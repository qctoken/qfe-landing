import { css } from "@emotion/react";

const styles = {
  root: css({ color: "green" }),
  info: css({ color: "#ccc" }),
};

function App() {
  return (
    <>
      <h1 css={styles.root}>Past all landing code here</h1>
      <h2>
        You can create any nested folders in the src, example: components,
        icons, etc...
      </h2>
      <h3 css={styles.info}>
        You don't need any prettier or eslint config. We will move code to other
        repository, but you can use it for self responsibility
      </h3>
    </>
  );
}

export default App;
