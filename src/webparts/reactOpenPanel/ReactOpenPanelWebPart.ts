import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReactOpenPanelWebPartStrings';
import ReactOpenPanelWithAccessibility from './components/ReactOpenPanelWithAccessibility';
import ReactOpenPanelWithoutAccessibility from './components/ReactOpenPanelWithoutAccessibility';
import { IReactOpenPanelProps } from './components/IReactOpenPanelProps';

export interface IReactOpenPanelWebPartProps {
  description: string;
}

export default class ReactOpenPanelWebPart extends BaseClientSideWebPart <IReactOpenPanelWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactOpenPanelProps> = React.createElement(
      ReactOpenPanelWithAccessibility,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
