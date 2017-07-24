import React, { Component } from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard'

class App extends Component {
  render() {
    return (
      <div>
        <DocumentCard onClickHref='http://bing.com'>
          <DocumentCardPreview
            previewImages={[
              {
                previewImageSrc: require('./documentpreview.png'),
                iconSrc: require('./iconppt.png'),
                width: 318,
                height: 196,
                accentColor: '#ce4b1f'
              }
            ]}
          />
          <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx' />
          <DocumentCardActivity
            activity='Created July 23, 2017'
            people={
              [
                {
                  name: 'Erich Abellera',
                  //profileImageSrc: require('./avatarkat.png')
                }
              ]
            }
          />
        </DocumentCard>
      </div>
    );
  }
}

export default App;
