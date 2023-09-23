import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import InfoTable from './components/InfoTable/InfoTable'
import FormInputs from './components/Form/FormInputs'
import TimeChart from './components/Chart/TimeChart'

function App() {
    return (
        <>
            <FormInputs></FormInputs>
            <InfoTable></InfoTable>
            <TimeChart></TimeChart>
        </>
    )
}

export default App
