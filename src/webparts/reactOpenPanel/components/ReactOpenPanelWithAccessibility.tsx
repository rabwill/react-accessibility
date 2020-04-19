import * as React from "react";
import styles from "./ReactOpenPanel.module.scss";
import { IReactOpenPanelProps } from "./IReactOpenPanelProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { DefaultButton, IconButton } from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import * as ReactDOM from "react-dom";
export interface IReactOpenPanelState {
  showPanel: boolean;
}
export default class ReactOpenPanelWithAccessibility extends React.Component<
  IReactOpenPanelProps,
  IReactOpenPanelState
> {
  public state = {
    showPanel: false,
  };
  private _showPanel = (): void => {
    this.setState({ showPanel: true });
  }
  private _hidePanel = (): void => {
    this.setState({ showPanel: false });
  }
  private ref=React.createRef<HTMLDivElement>();
  public componentDidMount() {
    this._focusDiv();
  }

  private _focusDiv() {
  this.ref.current.focus();
  }
  public render(): React.ReactElement<IReactOpenPanelProps> {
    const style1 = {
      width: "300px",
      height: "300px",
    };
    return (
      <div ref={this.ref} tabIndex = {0}>
      <React.Fragment>
          <h2 tabIndex={0}
            className={`${styles[`grid-item__title`]}`}>
          This is an area that needs to be seen
          </h2>
            <p tabIndex={0}
              className={`${styles[`grid-item__excerpt`]}`} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam nam odit possimus dolorem.
            </p>
      </React.Fragment>
      
        <DefaultButton
          tabIndex={0}
          role="button"
          aria-label="Press enter to open panel"
          text="Click me"
          iconProps={{ iconName: "Unknown" }}
          onClick={this._showPanel}
        />

        <Panel
          tabIndex={0}
          aria-label="panel is open"
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
                  <div className={`${styles[`grid-item--top-large`]}`}>
                    <h2
                      tabIndex={0}
                      className={`${styles[`grid-item__title`]}`}
                    >
                      This is an incredible title
                    </h2>
                    <div className={`${styles[`grid-item__image`]}`}>
                      <img
                        tabIndex={0}
                        alt="Cool image"
                        style={style1}
                        src="https://safebooru.org//images/2793/a6ab2ce0c3b480ce93861aeae841afb40fbe3749.jpg?2909270"
                      />
                    </div>
                    <div>
                      <p
                        tabIndex={0}
                        className={`${styles[`grid-item__excerpt`]}`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam nam odit possimus dolorem.
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
