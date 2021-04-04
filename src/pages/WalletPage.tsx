import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ClaimWet from "../components/ClaimWet";
import { PageContentWrapper } from "../components/CommonLayout";
import Header from "../components/Header";
import WaifuCard from "../components/WaifuCard";
import { loadWaifus, selectUsersWaifus } from "../state/reducers/user";
import { Waifu } from "../types/waifusion";

const StyledWalletPage = styled(PageContentWrapper)`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WaifuContainer = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 2rem;
  margin: 3rem auto;
`;

const WalletPage: React.FC = () => {
  const dispatch = useDispatch();
  const usersWaifus = useSelector(selectUsersWaifus);
  const [t] = useTranslation();

  useEffect(() => {
    dispatch(loadWaifus());
  }, []);

  return (
    <StyledWalletPage>
      <HeaderContainer>
        <Header text={t("headers.wallet")} />
        <ClaimWet />
      </HeaderContainer>
      <WaifuContainer>
        {usersWaifus.map((waifu: Waifu) => (
          <WaifuCard waifu={waifu} key={waifu.id} />
        ))}
      </WaifuContainer>
    </StyledWalletPage>
  );
};

export default WalletPage;
