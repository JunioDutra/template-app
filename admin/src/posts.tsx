import { Datagrid, Create, List, TextField, Edit, SimpleForm, TextInput } from 'react-admin';

import { RichTextInput } from 'ra-input-rich-text';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="title" />
            <RichTextInput source="content" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="content" />
        </SimpleForm>
    </Create>
);