import catalog from './catalogStyle.module.css'


const Catalog = function ({ picture, label, curency, price }) {
    return (
        <li className={catalog.listItem}>
            <div className={catalog.listDiv}>
                <img src={picture} className={catalog.listPicture} alt="productImage" />
                <div className={catalog.listInfoDiv}>
                    <span className={catalog.listLabel}>{label}</span>
                    <span className={catalog.listPrice}>{price}</span>
                </div>
            </div>
        </li >

    )

}

const CatalogRender = function ({ catalogInfo }) {
    return (
        <container className={catalog.container}>
            <div className={catalog.catalogDiv}>
                <h1 className={catalog.title}>Category name</h1>
                <ul className={catalog.list}>
                    {catalogInfo.map(catalogInfo => (
                        <Catalog
                            key={catalogInfo.id}
                            picture={catalogInfo.picture}
                            label={catalogInfo.label}
                            price={catalogInfo.price}
                        />
                    ))}
                </ul>
            </div>
        </container>
    )
}

export default CatalogRender