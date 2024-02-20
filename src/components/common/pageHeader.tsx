import { FC } from "react";

import { css } from "styled-system/css";

type Props = {
  title: string;
};

const PageHeader: FC<Props> = ({ title }) => {
  return (
    <div
      className={css({
        bg: "green.200",
        textAlign: "center",
        position: "sticky",
      })}
    >
      <h1 className={css({ fontSize: 40, fontWeight: "bold" })}>{title}</h1>
    </div>
  );
};

export default PageHeader;
