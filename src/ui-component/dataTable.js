import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = (props) => {
    const { rows, columns, onSelectionModelChangeHandler } = props;

    return (
        <div style={{ height: 660, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                // onSelectionModelChange={(ids) => {
                //     const selectedIDs = new Set(ids);
                //     const selectedRowData = rows.filter((row) => selectedIDs.has(row.id.toString()));
                //     console.log(selectedRowData);
                onSelectionModelChange={onSelectionModelChangeHandler}
            />
        </div>
    );
};

DataTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSelectionModelChangeHandler: PropTypes.func
};

export default DataTable;
