import React from 'react';


import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container.component';
import CollectionPageContainer from '../collection/collection.container.component';



import {Route} from 'react-router-dom';



import {connect} from 'react-redux';


import {fetchCollectionsStart} from '../../Redux/shop/shop.action';








class Shop extends React.Component{
 

  componentDidMount(){
   
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
    
  }

render(){
  

   
  const {match} = this.props;
  
  return (
    
    <div>
      <Route exact path={`${match.path}`} 
      component={CollectionsOverviewContainer} />

      <Route path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer}/>
    </div>

  ) 

 }    
}



const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
});


export default connect(null,mapDispatchToProps)(Shop);