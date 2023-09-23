import './infoTable.scss'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../redux/hooks'
import { selectData } from '../../redux/formSlice'

const InfoTable = () => {
    const formData = useAppSelector(selectData)

    return (
        <Container className="table-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item, id) => (
                        <tr>
                            <td>{id + 1}</td>
                            <td>{item.description}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default InfoTable
