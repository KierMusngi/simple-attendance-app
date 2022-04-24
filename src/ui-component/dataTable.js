import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = (props) => {
    const { rows, columns } = props;

    return (
        <div style={{ height: 660, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
        </div>
    );
};

DataTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array
};

export default DataTable;
