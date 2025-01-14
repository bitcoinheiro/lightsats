import { Button, Card, Row, Spacer, Text } from "@nextui-org/react";
import { BecomeATipper } from "components/tippee/BecomeATipper";
import { ReceivedTips } from "components/tippee/ReceivedTips";
import { SentTips } from "components/tipper/SentTips";
import { useReceivedTips, useSentTips } from "hooks/useTips";
import { useUser } from "hooks/useUser";
import React from "react";

const historyTabs = ["sent", "received"] as const;
type HistoryTab = typeof historyTabs[number];

export function TipHistory() {
  const { data: user } = useUser();
  const [selectedTab, setSelectedTab] = React.useState<HistoryTab>(
    user?.userType === "tipper" ? "sent" : "received"
  );
  const { data: sentTips } = useSentTips();
  const { data: receivedTips } = useReceivedTips();

  const tipCounts = [sentTips?.length, receivedTips?.length];

  return (
    <>
      <Row>
        <Text h5>History</Text>
      </Row>
      <Card variant="flat" css={{ backgroundColor: "$accents2" }}>
        <Card.Body css={{ p: 5 }}>
          <Row css={{ gap: 20 }}>
            {historyTabs.map((tab, i) => (
              <Button
                css={{
                  backgroundColor: tab === selectedTab ? "$white" : "$accents2",
                  color: "$black",
                  flex: 1,
                  my: 0,
                  textTransform: "capitalize",
                }}
                size="sm"
                key={tab}
                onClick={() => setSelectedTab(tab)}
              >
                {tab} ({tipCounts[i] ?? 0})
              </Button>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <Spacer />
      {selectedTab === "sent" &&
        (user?.userType === "tipper" ? <SentTips /> : <BecomeATipper />)}
      {selectedTab === "received" && <ReceivedTips />}
    </>
  );
}
