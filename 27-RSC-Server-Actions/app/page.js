
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ErrorBoundary from "@/components/ErrorBoundary";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default async function Home() {
  

  return (
    <main>
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
      <DataFetchingDemo/>
      <ServerActionsDemo />

      <ErrorBoundary fallback={<p>Soemthing Went Wrong</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
