import { useState, useEffect } from 'react'
import './infoTable.scss'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../redux/hooks'
import { selectData } from '../../redux/formSlice'

const InfoTable = () => {
    const formData = useAppSelector(selectData)
    const [sortedData, setSortedData] = useState([...formData])
    const [isAscending, setIsAscending] = useState(true)
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

    return (
        <Container className="table-container">
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
