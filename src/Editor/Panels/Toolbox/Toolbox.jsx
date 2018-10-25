/*
 * Copyright 2018 WICKLETS LLC
 *
 * This file is part of Wick Editor.
 *
 * Wick Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Editor.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import './_toolbox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToolButton from 'Editor/Util/ToolButton/ToolButton';
import WickInput from 'Editor/Util/WickInput/WickInput';

class Toolbox extends Component {
  constructor (props) {
    super(props);

    this.iconProps = {
      toolIsActive: this.toolIsActive.bind(this),
      activateTool: this.props.activateTool,
    };
  }

  toolIsActive (toolName) {
    return toolName === this.props.activeTool;
  }

  render() {
    let updateToolSettings = this.props.updateToolSettings;
    console.log(updateToolSettings)

    return(
      <div className="docked-pane tool-box">
        <ToolButton
          name="cursor"
          {...this.iconProps}
        />
        <ToolButton
          name="croquisBrush"
          {...this.iconProps}
        />
        <ToolButton
          name="pencil"
          {...this.iconProps}
        />
        <ToolButton
          name="eraser"
          {...this.iconProps}
        />
        <ToolButton
          name="rectangle"
          {...this.iconProps}
        />
        <ToolButton
          name="ellipse"
          {...this.iconProps}
        />
        <ToolButton
          name="line"
          {...this.iconProps}
        />
        <ToolButton
          name="eyedropper"
          {...this.iconProps}
        />
        <ToolButton
          name="pan"
          {...this.iconProps}
        />
        <ToolButton
          name="zoom"
          {...this.iconProps}
        />
        {/*<ToolButton
          name="fillBucket"
          {...this.iconProps}
        />
        <ToolButton
          name="text"
          {...this.iconProps}
        />
        <ToolButton
          name="potraceBrush"
          {...this.iconProps}
        />*/}

      <div className="color-container" id="fill-color-picker-container" style={{backgroundColor:this.props.toolSettings.fillColor}}>
          <WickInput
            type="color"
            color= {this.props.toolSettings.fillColor}
            onChangeComplete={(color) => updateToolSettings({fillColor: color.hex})}
            id="tool-box-fill-color"
            placement="right"
            />
        </div>
        <div className="color-container" id="stroke-color-picker-container" style={{borderColor:this.props.toolSettings.strokeColor}}>
          <WickInput
            type="color"
            color= {this.props.toolSettings.strokeColor}
            onChangeComplete={(color) => updateToolSettings({strokeColor: color.hex})}
            id="tool-box-stroke-color"
            placement="right"
            />
        </div>
      </div>

    )
  }
}

export default Toolbox
