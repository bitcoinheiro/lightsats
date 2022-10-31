import { Progress, Spacer, Text } from "@nextui-org/react";
import { User } from "@prisma/client";
import { bitcoinJourneyPages } from "lib/Routes";
import { defaultFetcher } from "lib/swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { UpdateUserJourneyRequest } from "types/UpdateUserJourneyRequest";

export function MyBitcoinJourneyHeader() {
  const { data: session } = useSession();
  const { data: user } = useSWR<User>(
    session ? `/api/users/${session.user.id}` : null,
    defaultFetcher
  );

  const router = useRouter();
  console.log("router.pathname", router.pathname);
  const progressIndex =
    bitcoinJourneyPages.findIndex((route) => {
      console.log(router.pathname, route, router.pathname.indexOf(route) > -1);
      return router.pathname.indexOf(route) > -1;
    }) + 1;

  const userJourneyStep = user?.journeyStep;
  const userId = session?.user.id;

  React.useEffect(() => {
    if (
      userId &&
      userJourneyStep !== undefined &&
      userJourneyStep < progressIndex
    ) {
      (async () => {
        const updateUserJourneyRequest: UpdateUserJourneyRequest = {
          journeyStep: progressIndex,
        };
        const result = await fetch(`/api/users/${userId}/journey`, {
          method: "PUT",
          body: JSON.stringify(updateUserJourneyRequest),
          headers: { "Content-Type": "application/json" },
        });
        if (!result.ok) {
          console.error("Failed to update user journey: " + result.status);
        }
      })();
    }
  }, [progressIndex, userJourneyStep, userId]);

  const progress = (progressIndex / bitcoinJourneyPages.length) * 100;

  return (
    <>
      <Text size="small" b>
        My Bitcoin Journey ({progressIndex} / {bitcoinJourneyPages.length})
      </Text>
      <Spacer y={0.5} />
      <Progress value={progress} color="success" status="success" />
      <Spacer />
    </>
  );
}