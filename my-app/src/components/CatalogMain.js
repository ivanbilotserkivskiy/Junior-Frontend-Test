import catalog from './catalogStyle.module.css'
import shopImg from './Common.svg'

const Catalog = function ({ picture, label, curency, price }) {
    return (


        <li className={catalog.listItem}>
            <a className={catalog.productLink} href="google.com">
                <div className={catalog.listDiv}>

                    <img src={picture} className={catalog.listPicture} alt="productImage" />
                    <div className={catalog.listInfoDiv}>
                        <span className={catalog.listLabel}>{label}</span>
                        <span className={catalog.listPrice}>{price}</span>
                    </div>
                </div>
            </a>
            <a className={catalog.cartLink}>
                <img className={catalog.cartImg} src={shopImg}></img>
            </a>
        </li >



    )

}

const CatalogRender = function ({ catalogInfo }) {
    return (

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

    )
}

export default CatalogRender