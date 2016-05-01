import React from 'react';
import Compania from './Compania';
import {carregarCompanias} from '../acoes/compania';
// const CompaniaList = ({compannies}) => (
//     <ul className="collection">
//         {
//             compannies.map(compania =>
//                 <Compania key={compania.id}
//                     {...compania}
//                    ></Compania>
//             )
//         }
//     </ul>
// );

const CompaniaList = React.createClass({
    getCompannies() {
        $.ajax({
            url: '/api/compannies',
            dataType: 'json',
            success: function(data) {
                this.props.dispatch(carregarCompanias(data));
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err.toString());
                return [];
            }.bind(this)
        });
    },
    componentDidMount() {
        this.getCompannies();
    },
    render() {
        return (
            <ul className="collection">
                {
                    'map' in this.props.compannies ?
                        this.props.compannies.map(compania =>
                            <Compania key={compania.id}
                                {...compania}
                                ></Compania>
                        ) :
                        <li></li>
                }
            </ul>
        );
    }
});

export default CompaniaList;