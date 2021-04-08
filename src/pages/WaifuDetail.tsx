/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import { PageContentWrapper } from "../components/CommonLayout";
import {
  CatgirlTraitIcon,
  EyesTraitIcon,
  HashIcon,
  SchoolgirlTraitIcon,
  SwimsuitTraitIcon,
} from "../components/Icons";
import LargeWaifuCard from "../components/LargeWaifuCard";
import { makeRequest } from "../services/api";
import { addWaifu, selectWaifus } from "../state/reducers/waifus";
import { Waifu } from "../types/waifusion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  width: 100%;

  h1 {
    margin: 0;
    font-size: 28pt;
  }

  h2 {
    margin: 20px 0;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 16pt;
    color: var(--text-secondary);
  }

  button {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const WaifuOwnerInfo = styled(PrimaryInfo)`
  text-align: right;

  h3 {
    font-weight: 500;
    margin: 0;
  }

  label {
    color: #9c9b9c;
    font-weight: 500;
  }
`;

const WaifuOwnerIconWrapper = styled.div`
  margin-left: 1rem;
  border: 2px dotted #817d82;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

const WaifuOwnerIcon = styled.img`
  border: 2px solid var(--background-primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--text-secondary);
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  align-items: center;
  font-weight: 500;
  font-size: 16pt;

  svg {
    height: 16pt;
  }

  line {
    color: var(--text-secondary);
  }

  label {
    color: var(--text-secondary);
  }
`;

const WaifuOwnerContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TraitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TraitTag = styled.div<{ colorTrait?: string }>`
  width: 50%;
  background-color: var(--plain);
  border: 2px solid var(--plain-shadow);
  border-radius: 100px;
  padding: 0.5rem 1.2rem;
  font-weight: 500;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;

  svg {
    height: 18pt;
    width: 18pt;
    margin-right: 0.5rem;
    color: ${(props) =>
      props.colorTrait ? props.colorTrait : "var(--text-secondary)"};
    color: var(--plain-dark);
  }

  path {
    color: var(--plain-dark);
  }

  h3 {
    margin: 0;
    color: var(--plain-dark);
  }

  label {
    color: var(--plain-dark);
  }
`;

const TraitDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

type ParamProps = {
  id: string;
};

const WaifuDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamProps>();
  const waifus = useSelector(selectWaifus);
  const waifu = waifus.filter((w: Waifu) => Number(w.id) === Number(id))[0];

  const getWaifu = async () => {
    const response = await makeRequest(`waifus/${id}`, {
      method: "GET",
      body: null,
    });
    if (!response.success) {
      console.log(response.error?.code);
      return;
    }
    const _waifu: Waifu = response.data;

    if (waifus.map((w: Waifu) => w.id).indexOf(_waifu.id) === -1)
      dispatch(addWaifu(_waifu));
  };

  useEffect(() => {
    getWaifu();
  });

  return (
    <PageContentWrapper>
      {!waifu && <p>Loading...</p>}
      {waifu && (
        <Wrapper>
          <LargeWaifuCard id={Number(waifu.id)} />
          <Content>
            <Header>
              <PrimaryInfo>
                <h1>{waifu.name}</h1>
                <MetaRow>
                  <MetaItem>
                    <HashIcon />
                    <label>{waifu.id}</label>
                  </MetaItem>
                </MetaRow>
              </PrimaryInfo>

              <WaifuOwnerContainer>
                <WaifuOwnerInfo>
                  <h3>Phineas</h3>
                  <label>Owner</label>
                </WaifuOwnerInfo>
                <WaifuOwnerIconWrapper>
                  <WaifuOwnerIcon src="https://avatars.githubusercontent.com/u/6209808?v=4" />
                </WaifuOwnerIconWrapper>
              </WaifuOwnerContainer>
            </Header>

            <h2>Bio</h2>
            <p>
              Kaitlyn is a cute catgirl who loves to swim. She is also very shy
              and is currently learning how to speak Japanese.
            </p>

            <h2>Traits</h2>
            <TraitsContainer>
              <TraitTag>
                <CatgirlTraitIcon />
                <TraitDetail>
                  <h3>Catgirl</h3>
                  <label>HeadAccessory</label>
                </TraitDetail>
              </TraitTag>
              <TraitTag>
                <SchoolgirlTraitIcon />
                <TraitDetail>
                  <h3>Schoolgirl</h3>
                  <label>Bottom</label>
                </TraitDetail>
              </TraitTag>
              <TraitTag>
                <SwimsuitTraitIcon />
                <TraitDetail>
                  <h3>Swimsuit</h3>
                  <label>Top</label>
                </TraitDetail>
              </TraitTag>
              <TraitTag colorTrait="#98614b">
                <EyesTraitIcon />
                <TraitDetail>
                  <h3>Brown</h3>
                  <label>Eyes</label>
                </TraitDetail>
              </TraitTag>
            </TraitsContainer>

            <h2>Tools</h2>
            <Button>Change Name</Button>
            <Button danger>Burn Waifu</Button>
          </Content>
        </Wrapper>
      )}
    </PageContentWrapper>
  );
};

export default WaifuDetail;
