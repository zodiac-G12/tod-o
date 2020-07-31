import React from 'react';

import {SortableHandle} from 'react-sortable-hoc';

import DragHandleIcon from '@material-ui/icons/DragHandle';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const DragHandle = SortableHandle(() => (
    <ListItemIcon>
        <DragHandleIcon />
    </ListItemIcon>
));

export default DragHandle;
