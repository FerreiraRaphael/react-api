import React from "react";
import {connect} from "react-redux";
import CompaniaList from "../componentes/CompaniaList";
// import {novaCompania} from "../acoes/compania";

const mapStateToProps = (state) => {
  return {
    compannies : state.compannies       
  };
};

const ContainerCompaniaList = connect(mapStateToProps)(CompaniaList);

export default ContainerCompaniaList;