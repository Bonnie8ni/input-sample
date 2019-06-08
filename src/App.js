import React, { Component } from 'react';

class App extends Component {
    state = {
        gender: 'male',
        like: {
            male: false,
            famale: false,
        }
    }

    onChangeGender = (e) => {
        this.setState({
            gender: e.target.value,
        });
    }

    onChangeLike = (e) => {
        const key = e.target.value;
        this.setState((state) => ({
            like: {
                ...state.like,
                [key]: !state.like[key],
            },
        }));
    }

    render() {
        const { like, gender } = this.state;
        return (
            <div>
                <div>
                    Your gender:
                    <input
                        type="radio"
                        value="male"
                        onChange={this.onChangeGender}
                        checked={gender === 'male'}
                    /><label>male</label>
                    <input
                        type="radio"
                        value="famale"
                        onChange={this.onChangeGender}
                        checked={gender === 'famale'}
                    /><label>famale</label>
                </div>
                <div>
                    You like:
                    <input
                        type="checkbox"
                        value="male"
                        onChange={this.onChangeLike}
                        checked={like.male}
                    /><label>male</label>
                    <input
                        type="checkbox"
                        value="famale"
                        onChange={this.onChangeLike}
                        checked={like.famale}
                    /><label>famale</label>
                </div>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        );
    }
}

export default App;