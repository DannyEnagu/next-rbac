import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { generateProducts } from '@/constants/constants';

function ProductsPage() {
 const products = generateProducts()
  return (
    <div>
        <h1 className="text-3xl font-bold underline mb-2">
            Products
        </h1>
        <div className="card mt-8">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </div>
  )
}

export default ProductsPage