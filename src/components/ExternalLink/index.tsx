import React, { FC } from "react";
import { ExternalLinkProps } from "./types";

import * as S from "./styled";

const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => (
    <S.Link href={href}>{children}</S.Link>
);

export default ExternalLink;
