import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {ListItem} from 'material-ui/List';

const SingleTodo  = ({text, completed, id, deleteItem, changeStatus, editItem, onEdit}) => (
            <ListItem

                onTouchTap={() => { changeStatus(id)}}
                rightIconButton={
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                        <MenuItem leftIcon={<EditorModeEdit/>} primaryText="Edit" onTouchTap={() => { onEdit(id, text)}} />
                        <MenuItem leftIcon={<ActionDelete/>} primaryText="Delete" onTouchTap={() => { deleteItem(id)}} />
                    </IconMenu>



                }
            >
                <Checkbox
                    label={text}
                    checked={completed}
                    style={{ textDecoration: (completed) ? 'line-through' : 'none'}}
                />

            </ListItem>
)

export default SingleTodo
