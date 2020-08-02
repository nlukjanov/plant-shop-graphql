import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.components';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;
