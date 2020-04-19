import * as React from 'react';
import styles from './ReactOpenPanel.module.scss';
import { IReactOpenPanelProps } from './IReactOpenPanelProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
export interface IReactOpenPanelState {
  showPanel: boolean;
}
export default class ReactOpenPanelWithoutAccessibility extends React.Component<IReactOpenPanelProps,IReactOpenPanelState> {
  public state = {
    showPanel: false
  };
  private _showPanel = (): void => {
    this.setState({ showPanel: true });
  }

  private _hidePanel = (): void => {
    this.setState({ showPanel: false });
  }
  public render(): React.ReactElement<IReactOpenPanelProps> {
   const style1={
    width: "300px",
    height: "300px"
   };
    return (
      <div>
        <DefaultButton
          text="Click me"
          iconProps={{ iconName: 'Unknown' }}
          onClick={this._showPanel}
        />

        <Panel 
          isBlocking={false}
          isOpen={this.state.showPanel}
          onDismiss={this._hidePanel}
          type={PanelType.medium}
          closeButtonAriaLabel="Closing awesome panel"
          headerText="Take a look at your panel"        
        >
          <div className={styles.container}>
            <div className={styles.row}>
            <div className={`${styles[`grid`]}`}>
          <div className={`${styles[`grid-item`]}`}>
          <div className={`${styles[`grid-item--top-large`]}` }>
           <h2 className={`${styles[`grid-item__title`]}`}>
             This is an incredible title
              </h2>
              <div className={`${styles[`grid-item__image`]}` } >
                <img style={style1} src="https://safebooru.org//images/2793/a6ab2ce0c3b480ce93861aeae841afb40fbe3749.jpg?2909270" />
              </div>
            <div>
              <p className={`${styles[`grid-item__excerpt`]}` }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam odit possimus dolorem.
              </p>
            </div>              
          </div>
          </div>
        </div>
        </div>
        </div>
        </Panel>
      </div>


    );
  }
}
