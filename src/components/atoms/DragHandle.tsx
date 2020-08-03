import React from 'react';

import { SortableHandle } from 'react-sortable-hoc';

import DragHandleIcon from '@material-ui/icons/DragHandle';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const DragHandle = SortableHandle(() => (
    <ListItemIcon style={{padding: "calc(var(--vh))", minWidth: "calc(2.5 * var(--vh))", marginRight: "calc(1 * var(--vh))"}}>
        <DragHandleIcon
            style={{fontSize: "calc(2.5 * var(--vh))", padding:"0"}}
        />
    </ListItemIcon>
));

export default DragHandle;
