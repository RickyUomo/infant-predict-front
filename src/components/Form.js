import React from 'react';
import * as d3 from "d3";
import DataService from '../services/service'
import './form.css'
import Report from './Report'

const URL = 'https://gist.githubusercontent.com/RickyUomo/b55072a481d91469bf2700dad27ee313/raw/infants.csv'



class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: null,
            report: false,
            hover: false,
            gest: '',
            birthweight: '',
            MAS: false,
            gender: 'male',
            multip: false,
            level_3: false,
            steroid: '',
            fuzzyPro: '',
            treePro: '',
            high: null,
            low: null,

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }


    componentDidMount() {
        d3.csv(URL).then(d => {
            this.setState({ data: d })
        })
    }



    clearForm() {
        this.setState(prevState => {
            return {
                gest: '',
                birthweight: '',
                MAS: !prevState,
                gender: '',
                multip: !prevState,
                level_3: !prevState,
                steroid: '',
                fuzzyPro: '',
                treePro: ''
            }
        })
        this.setState({ report: false })
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = {
            gest: this.state.gest,
            birthweight: this.state.birthweight,
            MAS: this.state.MAS,
            gender: this.state.gender,
            multip: this.state.multip,
            level_3: this.state.level_3,
        };

        DataService.create(data)
            .then(res =>
                this.setState({
                    steroid: res.data['steroid'],
                    fuzzyPro: res.data['fuzzyPro'],
                    treePro: res.data['treePro']
                })).then(() => {
                    this.setState({ report: true })
                })
            .catch(err => console.log(err))
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
        this.setState({ report: false })
    }



    render() {
        return (
            <div className="min-h-screen">
                <div className="flex flex-col items-center">



                    <p className="required pt-6" >Indicate Required Field</p>
                    <form className="grid" onSubmit={this.handleSubmit}>



                        <div className="form-group">
                            <label className="required">
                                <a href="0">Gestational Weeks</a>
                                <p style={{ fontSize: ".6em" }}>(From 22-32 weeks)</p>
                            </label>
                            <input
                                type="number"
                                name="gest"
                                value={this.state.gest}
                                onChange={this.handleChange}
                                min='22'
                                max='32'
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label className="required">
                                <a>Birth Weight</a>
                                <p style={{ fontSize: ".6em" }}>(From 400-1200 grams)</p>
                            </label>
                            <input
                                type="number"
                                name="birthweight"
                                value={this.state.birthweight}
                                onChange={this.handleChange}
                                min='400'
                                max='1200'
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <a href="https://en.wikipedia.org/wiki/Antenatal_steroid">MAS</a>
                            </label>
                            <input
                                type="checkbox"
                                name="MAS"
                                value={this.state.MAS}
                                onChange={this.handleChange}
                                checked={this.state.MAS}
                            />
                        </div>

                        <div>
                            <label className="required">
                                <a>Gender</a>
                            </label>
                            <select className="ml-6 mt-6 pl-2 p-1 border w-18 border-black rounded" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <option value="male">Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label>
                                <a>Multiple Birth</a>
                            </label>
                            <input
                                type="checkbox"
                                name="multip"
                                value={this.state.multip}
                                onChange={this.handleChange}
                                checked={this.state.multip}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <a>Level 3 Hospital</a>
                            </label>
                            <input
                                type="checkbox"
                                name="level_3"
                                value={this.state.level_3}
                                onChange={this.handleChange}
                                checked={this.state.level_3}
                            />
                        </div>
                        <br />
                        <hr />

                        <div className="btn-container">
                            <button className="btn" type="submit">Submit</button>
                            <button className="btn" onClick={this.clearForm}>Clear</button>
                        </div>

                        <hr />

                    </form>

                    <div className="bg-yellow-100 px-6 py-2 font-medium w-3/4 max-w-md mt-6 rounded">
                        <h1
                            onMouseEnter={() => this.setState({ hover: true })}
                            onMouseLeave={() => this.setState({ hover: false })}
                            className="font-bold text-xl mb-3 cursor-pointer text-blue-700 underline"
                        >
                            Different models of survival probability
                        </h1>
                        <ul
                            className={`${this.state.hover ?
                                "absolute bg-yellow-400 p-2 \
                                text-red-900  rounded shadow-2xl \
                                left-5 right-5 \
                                sm:left-10 sm:right-10 lg:left-60 lg:right-60"
                                : "hidden"}`}
                        >
                            <li className="">1. Voting Classifier: A Voting Classifier is a machine learning model that trains on an ensemble of numerous models and predicts an output based on their highest probability of chosen class as the output.</li>
                            <li className="mt-2">2. Fuzzy logic:  Robust, simple structure, good performance with high AUC, but the model may predicted a lower value when the actual survival rate is high.</li>
                        </ul>
                        <p className="">VOTING: {this.state.treePro ? this.state.treePro : '-'}{this.state.treePro ? '%' : ''}
                            <span className="text-sm text-red-600"> {this.state.steroid}</span>
                        </p>
                        <p className="mt-2">FUZZY: {this.state.fuzzyPro ? this.state.fuzzyPro : '-'}{this.state.fuzzyPro ? '%' : ''}</p>
                    </div>

                </div>

                <div>
                    {
                        this.state.report ?
                            <Report
                                data={this.state.data}
                                birthweight={this.state.birthweight}
                                gest={this.state.gest}
                                MAS={this.state.MAS}
                                gender={this.state.gender}
                                multip={this.state.multip}
                                level_3={this.state.level_3}
                                treePro={this.state.treePro}
                                fuzzyPro={this.state.fuzzyPro}
                            />
                            : ''
                    }



                </div>
            </div>
        )
    }
}

export default Form;

