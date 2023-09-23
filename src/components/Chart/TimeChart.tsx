import './timeChart.scss'
import { Container } from 'react-bootstrap'
import { useAppSelector } from '../../redux/hooks'
import { selectData } from '../../redux/formSlice'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const TimeChart = () => {
    const formData = useAppSelector(selectData)

    const userData = {
        labels: formData.map((data) => data.formattedDate),
        datasets: [
            {
                label: 'Time worked (seconds)',
                data: formData.map((data) => {
                    const [minutes, seconds, hundredths] = data.time.split(':').map(Number)
                    const totalTimeInSeconds = minutes * 60 + seconds + hundredths / 100
                    return totalTimeInSeconds
                }),
            },
        ],
    }

    return (
        <Container>
            <Chart type="line" data={userData} />
        </Container>
    )
}

export default TimeChart
