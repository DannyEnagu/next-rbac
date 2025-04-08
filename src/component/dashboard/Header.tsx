import { Button } from "primereact/button"


const Header = () => {
    return (<div className="h-[56px] sticky top-0 border-b border-[#ffffff0d] flex items-center justify-end p-2 pr-8">
        <Button label="Logout" size="small" className="p-button-danger" />
    </div>)
}

export default Header