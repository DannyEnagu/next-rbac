
interface Product {  
    id: string;  
    code: string;  
    name: string;  
    description: string;  
    image: string;  
    price: number;  
    category: string;  
    quantity: number;  
    inventoryStatus: string;  
    rating: number;  
}  
  
  export const generateProducts = (): Product[] => {  
    const products: Product[] = [  
      {  
        id: '1',  
        code: 'f230fh0g3',  
        name: 'Bamboo Watch',  
        description:  
          'Product Description: Eco-friendly bamboo watch with a leather strap.',  
        image: 'bamboo-watch.jpg',  
        price: 65,  
        category: 'Accessories',  
        quantity: 24,  
        inventoryStatus: 'INSTOCK',  
        rating: 5,  
      },  
      {  
        id: '2',  
        code: 'nvklal433',  
        name: 'Black Watch',  
        description: 'Product Description: Sleek and stylish black watch.',  
        image: 'black-watch.jpg',  
        price: 72,  
        category: 'Accessories',  
        quantity: 61,  
        inventoryStatus: 'INSTOCK',  
        rating: 4,  
      },  
      {  
        id: '3',  
        code: 'zz21cz3c1',  
        name: 'Blue Band',  
        description: 'Product Description: Comfortable and durable blue band.',  
        image: 'blue-band.jpg',  
        price: 79,  
        category: 'Fitness',  
        quantity: 2,  
        inventoryStatus: 'LOWSTOCK',  
        rating: 3,  
      },  
      {  
        id: '4',  
        code: '244wgerg2',  
        name: 'Brown Purse',  
        description: 'Product Description: Classic brown purse for everyday use.',  
        image: 'brown-purse.jpg',  
        price: 50,  
        category: 'Bags',  
        quantity: 0,  
        inventoryStatus: 'OUTOFSTOCK',  
        rating: 4,  
      },  
      {  
        id: '5',  
        code: 'qwertyu987',  
        name: 'Gaming Mouse',  
        description: 'Product Description: High-performance gaming mouse with customizable DPI.',  
        image: 'gaming-mouse.jpg',  
        price: 99,  
        category: 'Electronics',  
        quantity: 15,  
        inventoryStatus: 'INSTOCK',  
        rating: 5,  
      },  
    ];  
    return products;  
};
  
interface Country {  
    name: string;  
    code: string;  
}  

interface Representative {  
    name: string;  
    image: string;  
}  

interface Customer {  
    id: number;  
    name: string;  
    country: Country;  
    company: string;  
    date: string;  
    status: string;  
    verified: boolean;  
    activity: number;  
    representative: Representative;  
    balance: number;  
}  

export const generateCustomers = (): Customer[] => {  
    const customers: Customer[] = [  
        {  
            id: 1001,  
            name: "Olivia Smith",  
            country: { name: "United States", code: "US" },  
            company: "Acme Corp",  
            date: "2023-01-15",  
            status: "active",  
            verified: true,  
            activity: 75,  
            representative: { name: "Amy Elsner", image: "amyelsner.png" },  
            balance: 5500.00  
        },  
        {  
            id: 1002,  
            name: "Liam Johnson",  
            country: { name: "Canada", code: "CA" },  
            company: "Maple Leaf Inc",  
            date: "2023-02-28",  
            status: "inactive",  
            verified: false,  
            activity: 20,  
            representative: { name: "Anna Fitori", image: "annafitori.png" },  
            balance: 12000.50  
        },
        {
            id: 1003,  
            name: "Emma Williams",  
            country: { name: "United Kingdom", code: "GB" },  
            company: "British Telecom",  
            date: "2023-03-10",  
            status: "active",  
            verified: true,  
            activity: 90,
            representative: {
                name: 'Danny Bless', image: "dannybess.png"
            },
            balance: 22000.90
        },
        {  
            id: 1004,  
            name: "Liam Johnson",  
            country: { name: "Canada", code: "CA" },  
            company: "Maple Leaf Inc",  
            date: "2023-02-28",  
            status: "inactive",  
            verified: false,  
            activity: 20,  
            representative: { name: "Anna Fitori", image: "annafitori.png" },  
            balance: 12000.50  
        },
        {  
            id: 1005,  
            name: "Olivia Smith",  
            country: { name: "United States", code: "US" },  
            company: "Acme Corp",  
            date: "2023-01-15",  
            status: "active",  
            verified: true,  
            activity: 75,  
            representative: { name: "Amy Elsner", image: "amyelsner.png" },  
            balance: 5500.00
        }, 
    ]
    return customers
}
