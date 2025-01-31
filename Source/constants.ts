/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ext } from "./extensionVariables";

// tslint:disable-next-line: export-name
export function getResourcesPath(): string {
	return ext.context.asAbsolutePath("resources");
}
