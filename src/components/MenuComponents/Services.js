import React from "react";
import ReactDOM from "react-dom";

const Services = () => {

    const servicesData = {
        oneMonth: {
            title: "Tiramisu",
            subtitle: "Cupcake ipsum dolor sit amet croissant muffin.",
            price: 1,
            detailsList: [
                "Marzipan wafer I love marshmallow cake chocolate bar I love.",
                "Chupa chups I love pastry sweet roll gingerbread jujubes dessert biscuit.",
                "Candy canes chocolate sweet roll croissant halvah tart.",
                "Jelly-o donut shortbread toffee I love.",
                "Halvah icing apple pie icing I love oat cake ice cream.",
                "I love chocolate cake chocolate bar jelly-o powder gummies.",
                "Jujubes I love cheesecake pastry wafer cake tootsie roll.",
            ]
        },
        twoMonths: {
            title: "Apple pie",
            subtitle: "Cotton candy pastry candy halvah jujubes biscuit tiramisu soufflé.",
            price: 5,
            detailsList: [
                "Marzipan wafer I love marshmallow cake chocolate bar I love.",
                "Chupa chups I love pastry sweet roll gingerbread jujubes dessert biscuit.",
                "Candy canes chocolate sweet roll croissant halvah tart.",
                "Jelly-o donut shortbread toffee I love.",
                "Halvah icing apple pie icing I love oat cake ice cream.",
                "I love chocolate cake chocolate bar jelly-o powder gummies.",
                "Jujubes I love cheesecake pastry wafer cake tootsie roll.",
            ]
        },
        threeMonths: {
            title: "Lollipop",
            subtitle: "Halvah icing apple pie icing I love oat cake ice cream.",
            price: 10,
            detailsList: [
                "Marzipan wafer I love marshmallow cake chocolate bar I love.",
                "Chupa chups I love pastry sweet roll gingerbread jujubes dessert biscuit.",
                "Candy canes chocolate sweet roll croissant halvah tart.",
                "Jelly-o donut shortbread toffee I love.",
                "Halvah icing apple pie icing I love oat cake ice cream.",
                "I love chocolate cake chocolate bar jelly-o powder gummies.",
                "Jujubes I love cheesecake pastry wafer cake tootsie roll.",
            ]
        },
        bussinessOffer: {
            title: null,
            subtitle: " Jujubes I love cheesecake pastry wafer.",
            price: null,
            moreInfo: "Gummies croissant macaroon candy canes I love. Gingerbread soufflé sweet jujubes soufflé.",
            listTitle: "Cheesecake cookie cake toffee tootsie roll candy canes?",
            detailsList: [
                "Marzipan wafer I love marshmallow cake chocolate bar I love.",
                "Chupa chups I love pastry sweet roll gingerbread jujubes dessert biscuit.",
                "Candy canes chocolate sweet roll croissant halvah tart.",
                "Jelly-o donut shortbread toffee I love.",
            ]
        }
    }

    return (
        <section className="services">
            <div className="container services__page">
                <h3 className="section__title">OAT CAKE JELLY ICE CREAM</h3>
                <span className="underline"></span>
                <SingleService data={servicesData.oneMonth} />
                <SingleService data={servicesData.twoMonths} />
                <SingleService data={servicesData.threeMonths} />
                <h3 className="section__title">JELLY-O BISCUIT CAKE</h3>
                <span className="underline"></span>
                <SingleService data={servicesData.bussinessOffer} />
            </div>
        </section>
    );
};



const SingleService = ( {data} ) => {
    return (
        <div className="service-box">
            <div className="service__details">
                { data.moreInfo ? 
                    <div>
                        <h4>{ data.moreInfo }</h4>
                        <h4>{ data.listTitle }</h4>
                    </div> : null 
                }
                <ul>
                    {data.detailsList.map( (data, idx) => <li key={idx}>{ data }</li> )}
                </ul>
            </div>
            { data.title ? <span className="service__title">{ data.title }</span> : null}
            { data.subtitle ? <span className="service__subtitle">{ data.subtitle }</span> : null}
            { data.price ? <span className="service__price">{ data.price } ETH</span> : <span className="service__price">Marshmallow powder wafer</span>}
        </div>
    )    
}

export default Services;