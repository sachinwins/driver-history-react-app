import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function createData(driverName, totalDuration, totalDistance, mph) {
  return { driverName, totalDuration, totalDistance, mph }
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const DriverHistoryTable = (props) => {
  const classes = useStyles()
  const { driverHistory } = props
  driverHistory.sort((current, next) => {
    return next.mph - current.mph
  })
  const rows = driverHistory.map((driver) => {
    const { driverName, totalDuration, totalDistance, mph } = driver
    return createData(driverName, totalDuration, totalDistance, mph)
  })

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Driver</StyledTableCell>
              <StyledTableCell align="right">Total Duration</StyledTableCell>
              <StyledTableCell align="right">Total Distance</StyledTableCell>
              <StyledTableCell align="right">
                Average Speed(MPH)
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="column">
                  {row.driverName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="column" align="right">
                  {row.totalDuration}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.totalDistance}
                </StyledTableCell>
                <StyledTableCell align="right">{row.mph}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

DriverHistoryTable.propTypes = {
  driverHistory: PropTypes.array,
}
export default DriverHistoryTable
