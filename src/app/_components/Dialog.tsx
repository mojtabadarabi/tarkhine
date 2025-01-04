import Button from '@mui/material/Button';
import DialogMui from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const changeHashHandler = (modalId: string) => {
    window.location.hash = modalId
}

export default function Dialog({ open, onClose, onOpen, modalId }: any) {

    React.useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#' + modalId) {
                onOpen()
            }
            else {
                closeModalHandler()
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    React.useEffect(() => {
        if (window.location.hash === '#' + modalId) {
            onOpen()
        }
        else {
            closeModalHandler()
        }
    }, [window.location.hash])

    const closeModalHandler = () => {
        onClose()
        window.location.hash = ''
    }

    return (

        <DialogMui
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={closeModalHandler}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModalHandler}>Disagree</Button>
                <Button onClick={closeModalHandler}>Agree</Button>
            </DialogActions>
        </DialogMui>
    );
}