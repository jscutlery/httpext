import { ConvoyRequest } from './request';
import { NextFn } from './request-handler';
import { ConvoyrResponse } from './response';
import { SyncOrAsync } from './utils/from-sync-or-async';

export interface PluginHandlerArgs {
  request: ConvoyRequest;
  next: NextFn;
}

export interface PluginHandler {
  handle({ request, next }: PluginHandlerArgs): SyncOrAsync<ConvoyrResponse>;
}
