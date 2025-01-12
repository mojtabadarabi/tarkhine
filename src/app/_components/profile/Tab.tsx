import Link from 'next/link';
import { ReactComponent as Call } from 'public/icons/calling.svg';
import { ReactComponent as Heart } from 'public/icons/heart.svg';
import { ReactComponent as Laws } from 'public/icons/info_circle.svg';
import { ReactComponent as Location } from 'public/icons/location.svg';
import { ReactComponent as Logout } from 'public/icons/logout.svg';
import { ReactComponent as Questions } from 'public/icons/message_question.svg';
import { ReactComponent as User } from 'public/icons/users/user.svg';
import { ReactComponent as CustomAvatar } from 'public/svg/custom-avatar.svg';

export default function ProfileTab() {

    const profileLinks = [
        {
            icon: <User width={30}/>,
            title: 'اطلاعات حساب کاربری',
            href:'/'
        },
        {
            icon: <Heart width={30}/>,
            title: "علاقه مندی ها",
            href:'/'
        },
        {
            icon: <Location width={30}/>,
            title: "آدرس ها",
            href:'/'
        },
        {
            icon: <Questions width={30}/>,
            title: "سوالات متداول",
            href:'/'
        },
        {
            icon: <Laws width={30}/>,
            title: "قوانین",
            href:'/'
        },
        {
            icon: <Call width={30}/>,
            title: "تماس با ما",
            href:'/'
        },
        {
            icon: <Logout width={30}/>,
            title: 'خروج',
            href:'/'
        },
    ]

    return (
        <>
            <div className="bg-primary flex-col py-8 flex justify-center items-center gap-4">
                <CustomAvatar width={100} />
                <span className="text-xl text-white">کاربر ترخینه</span>
            </div>
            <div className='flex flex-col gap-4 p-6'>
                {
                    profileLinks.map((link, index) => (
                        <div key={index} className='flex items-center text-md justify-start gap-2'>
                            {link.icon}
                            <Link href={link.href}>{link.title}</Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
