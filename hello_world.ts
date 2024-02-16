type FnoidsRequest<T> = {
  timestamp: Date;
  uuid: string;
  path: string;
  http: {
    method: string;
    protocol?: string;
    tls: {
      version?: string;
    };
  };
  headers: Record<string, string[]>;
  body: T;
  bodyRaw: string;
};

type FnoidsRequestAllowedTrigger<T> = (
  req: FnoidsRequest<T>,
) => boolean | Promise<boolean>;

export async function processRequest(event: FnoidsRequest<unknown>) {
  console.log("Hello, world!");
  return event.body;
}
