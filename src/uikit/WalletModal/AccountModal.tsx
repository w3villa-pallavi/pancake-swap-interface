import React from "react";
import { Button, Text, LinkExternal, Flex } from "@pancakeswap-libs/uikit";
import { Modal } from "../Modal/index";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal className="heading-h" title="Your wallet" onDismiss={onDismiss}>
    <Text
      className="heading"
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
    <div className="heading-link">
      <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
        View on BscScan hello
      </LinkExternal>
     </div>
     <div className="heading-link">
      <CopyToClipboard toCopy={account}>
          Copy Address
      </CopyToClipboard>
    </div>
    </Flex>
    <Flex justifyContent="center">
      <Button
        className="heading-theme"
        scale="sm"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
