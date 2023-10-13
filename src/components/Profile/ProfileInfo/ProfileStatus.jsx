import React from 'react';
import { render } from 'react-dom';

class ProfileStatus extends React.Component {
    state={
        editMode: false,
        status: this.props.status,
    }

    activatetEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivatetEditMode = () => {
        this.setState({
            editMode: true,
        });

        this.props.updeteStatus(this.state.status);
    }

    onStatusChenge = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState){

        if(prevProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })}
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activatetEditMode}>{this.props.status || "--------"}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deactivatetEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;