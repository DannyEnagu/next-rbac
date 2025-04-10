'use client'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import withPermission from "@/utils/withPermission";
import { generateCustomers } from "@/constants/constants";
import AddUserForm from "@/component/dashboard/forms/AddUserForm";


const AddUserFormWithPermission = withPermission(AddUserForm);

function UsersPage() {
  const customers = generateCustomers()
  return (
    <div>
        <h1 className="text-3xl font-bold underline mb-2">Users</h1>
        <div className="flex items-center justify-end">
            <AddUserFormWithPermission requiredPermission="System.Admin.Create.User" />
        </div>
        <div className="card mt-4">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    </div>
  )
}

export default UsersPage