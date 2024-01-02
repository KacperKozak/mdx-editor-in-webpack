import React, { useState } from "react";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  ListsToggle,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  tablePlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";

import "./styles.css";

export const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Hello Webpack + Babel + TypeScript</h1>

      <MDXEditor
        className="editor"
        markdown={value}
        onChange={setValue}
        plugins={[
          headingsPlugin(),
          tablePlugin(),
          listsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <CreateLink />
                <InsertTable />
                <BlockTypeSelect />
                <UndoRedo />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
};
