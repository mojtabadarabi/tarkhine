import aghdasieImg from 'public/images/branches/aghdasie.png'
import chaloosImg from 'public/images/branches/chaloos.png'
import ekbatanImg from 'public/images/branches/ekbatan.png'
import vanakImg from 'public/images/branches/vanak.png'
import bademjan from './bademjan.png'
import dolme from './dolme.png'
import esfenaj from './esfenaj.png'
import peperoni from './peperoni.png'
import sooshi from './sooshi.png'
import ratotoi from './ratotoi.png'

export const branches = [
    {
        image: ekbatanImg,
        title: 'شعبه اکباتان',
        address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        phone: '۰۲۱-۵۴۸۹۱۲۵۰-۵۱',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: vanakImg,
        title: 'شعبه ونک',
        address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
        phone: '۰۲۱-۵۴۸۹۱۲۵۲-۵۳',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: aghdasieImg,
        title: 'شعبه اقدسیه',
        address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
        phone: '۰۲۱-۵۴۸۹۱۲۵۴-۵۵',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: chaloosImg,
        title: 'شعبه چالوس',
        address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
        phone: '۰۲۱-۵۴۸۹۱۲۵۲-۵۳',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
]

export const recommendedFoods = [
    {
        title: 'دلمه برگ کلم',
        price: 220000,
        discount: 8,
        rate: 5,
        image: dolme
    },
    {
        title: 'بادمجان شکم‌پر',
        price: 150000,
        discount: 18,
        rate: 4,
        image: bademjan
    },
    {
        title: 'دلمه برگ کلم',
        price: 220000,
        discount: 8,
        rate: 5,
        image: dolme
    },
]

export const popularFoods = [
    {
        title:'پنینی اسفناج',
        price: 150000,
        discount: 0,
        rate: 3,
        image: esfenaj
    },
    {
        title:'پیتزا پپرونی',
        price: 175000,
        discount: 20,
        rate: 4,
        image: peperoni
    },
    {
        title:'پنینی اسفناج',
        price: 150000,
        discount: 0,
        rate: 3,
        image: esfenaj
    },
]

export const nonIranianFoods = [
    {
        title:'سوشی',
        price: 175000,
        discount: 20,
        rate: 4,
        image: sooshi
    },
    {
        title:'راتاتویی',
        price: 175000,
        discount: 20,
        rate: 3,
        image: ratotoi
    },
    {
        title:'سوشی',
        price: 175000,
        discount: 20,
        rate: 4,
        image: sooshi
    },
]