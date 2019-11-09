import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors({origin:true}))

type Menu = {
    name: string,
    price: number
};


const menus: Menu[] = [
    {
        name: 'Americano',
        price: 1.5
    },
    {
        name: 'Flat White',
        price: 1.6
    },
    {
        name: 'Latte',
        price: 1.7
    },
    {
        name: 'Mocha',
        price: 1.8
    },
    {
        name: 'Iced Tea',
        price: 1.5
    },
    {
        name: 'Caramel Macchiato',
        price: 2.0
    }
]   

app.use('/_healthcheck', (_, res) => {
    res.status(200).json({ uptime: process.uptime() });
});

app.get('/menus', (_, response) => {
    response.status(200).json(menus);
})

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Running at localhost:${port}`) })
