import { useState, useEffect } from 'react'
import './infoTable.scss'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../redux/hooks'
import { selectData } from '../../redux/formSlice'
import Form from 'react-bootstrap/Form'

const InfoTable = () => {
    const formData = useAppSelector(selectData)
    const [sortedData, setSortedData] = useState([...formData])
    const [isAscending, setIsAscending] = useState(true)
    const [filterText, setFilterText] = useState('')

    useEffect(() => {
        const sorted = [...formData].sort((a, b) => {
            if (isAscending) {
                return a.time.localeCompare(b.time)
            } else {
                return b.time.localeCompare(a.time)
            }
        })

        setSortedData(sorted)
    }, [formData, isAscending])

    const sortByTime = () => {
        setIsAscending(!isAscending)
    }

    useEffect(() => {
        const filteredData = formData.filter((item) =>
            item.description.toLowerCase().includes(filterText.toLowerCase())
        )
        setSortedData(filteredData)
    }, [filterText, formData])

    return (
        <Container className="table-container">
            <Form.Label>Filter by description</Form.Label>
            <Form.Control
                type="text"
                placeholder="FormInputs component"
                className="filter-input"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th onClick={sortByTime} style={{ cursor: 'pointer' }}>
                            Time {isAscending ? '↑' : '↓'}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, id) => (
                        <tr key={id}>
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
