// Assets
import KC from "assets/images/works/kc.png";
import QCACAC from "assets/images/works/qcacace.png";
import SPOWER from "assets/images/works/s-power.png";

export const Works = ([
    {
        sample: KC,
        title: 'KC',
        link: 'https://kc-admin.vercel.app/',
        info: `A web app Inventory Management System for KC Electrical Innovation, Inc.'s. This system can generate reports and monitor the company's products.`,
        tech: ['ReactJS', 'MaterialUI', 'RestAPI', 'ExpressJS', 'Vercel']
    },
    {
        sample: QCACAC,
        title: 'Quezon City Animal Care & Adoption Center E-services',
        link: 'https://qcacace.vercel.app/',
        info: `Web app that helps promote the adoption center of Quezon City that also has an online transaction for adopting stray dogs and cats. 
                    It also has an admin side that can monitor the transaction of adopters and computerized transaction for walkin adopters.`,
        tech: ['ReactJS', 'MaterialUI', 'RestAPI', 'ExpressJS', 'Vercel']
    },{
        sample: SPOWER,
        title: 'S-Power Corporation',
        link: 'https://s-power.vercel.app/',
        info: `A template web design for S-Power Corporation that can promote the products and services they offer. It also helps for customers to 
                    have a little idea about the company product and services.`,
        tech: ['ReactJS', 'MaterialUI', 'Vercel']
    }
])