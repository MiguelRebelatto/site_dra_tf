globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/images/cada-ciclo.webp": {
		"type": "image/webp",
		"etag": "\"17ec8-1k8eYmfM3++imNqdmweklpUbX0Y\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 97992,
		"path": "../public/images/cada-ciclo.webp"
	},
	"/images/saude-menstrual.webp": {
		"type": "image/webp",
		"etag": "\"da0a-US1IbfPaaCv92wmbPlgKEw9cUag\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 55818,
		"path": "../public/images/saude-menstrual.webp"
	},
	"/images/saude-hormonal.webp": {
		"type": "image/webp",
		"etag": "\"eda4-qgzyOkFej7NEOVuFnHD+A+9eqDc\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 60836,
		"path": "../public/images/saude-hormonal.webp"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/images/tatiana-retrato.jpg": {
		"type": "image/jpeg",
		"etag": "\"11182-hjh4TQwLtwlcv9fW9NWDGqog7tA\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 70018,
		"path": "../public/images/tatiana-retrato.jpg"
	},
	"/assets/ArticleCard-CkaB1yE5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ef-rEPmwT/kXTW4ZzmmP1mFOg0BmjM\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 751,
		"path": "../public/assets/ArticleCard-CkaB1yE5.js"
	},
	"/assets/artigos._slug-B5PEfJXj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514-1k0pUIgsRrDhLnqT1ByK47ZZxYA\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 1300,
		"path": "../public/assets/artigos._slug-B5PEfJXj.js"
	},
	"/assets/artigo-capa-BKK4x9W2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca1c-FDekHJ2XwbCqCDCRPRD0455zn4w\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 117276,
		"path": "../public/assets/artigo-capa-BKK4x9W2.jpg"
	},
	"/assets/artigos._slug-eQ4Ag1Ux.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"739-5Z7K4wypiRYyt5ipd2XsayOMIgM\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 1849,
		"path": "../public/assets/artigos._slug-eQ4Ag1Ux.js"
	},
	"/assets/artigos.index-BhMbK0wY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e4-2iTJ7Qnjki4Rs+8BZ0HUu11thhg\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 1252,
		"path": "../public/assets/artigos.index-BhMbK0wY.js"
	},
	"/assets/Layout-BiO9_3v-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9368-oSyhtZgNsDbg9UyVITmkNL6eJpA\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 37736,
		"path": "../public/assets/Layout-BiO9_3v-.js"
	},
	"/assets/cursos-Dj237oKC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2de-TBl8bt6eEX6L5KU7Je7OAH46WF4\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 734,
		"path": "../public/assets/cursos-Dj237oKC.js"
	},
	"/assets/contacto-DhjsFwEm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"803-vdjdRHIGxas7wZ6DTj7ifWo0Tsk\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 2051,
		"path": "../public/assets/contacto-DhjsFwEm.js"
	},
	"/assets/preload-helper-B13e9ZOS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"161d-Yb4bH6g4h3LQY6mB7MxsBKFJeHY\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 5661,
		"path": "../public/assets/preload-helper-B13e9ZOS.js"
	},
	"/assets/privacidade-CuPopsB7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"334-ryBTOS7IHEZXXe3eXFaZkmlEvkY\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 820,
		"path": "../public/assets/privacidade-CuPopsB7.js"
	},
	"/assets/routes-hGXwM1AA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2052-X/SrwhnMiG7uhgw/0EXfLU5OhxY\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 8274,
		"path": "../public/assets/routes-hGXwM1AA.js"
	},
	"/images/tatiana-consulta.jpg": {
		"type": "image/jpeg",
		"etag": "\"16ddd-mDEZgdILKBQhTQYoZw4QwWuGZ/c\"",
		"mtime": "2026-10-26T19:58:32.194Z",
		"size": 93661,
		"path": "../public/images/tatiana-consulta.jpg"
	},
	"/assets/sobre-BkGWnoVn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e8-lh4uPjTPotiBIhY/LDl5Tp3s4n0\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 1768,
		"path": "../public/assets/sobre-BkGWnoVn.js"
	},
	"/assets/site-CGNb6XrU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"583d-RXb+zI2UUz7+8IL7LjzUUG3r4fM\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 22589,
		"path": "../public/assets/site-CGNb6XrU.js"
	},
	"/assets/tatiana-retrato.jpg.asset-CNG9rR0V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"180-jZH0nTEYAnkn5UE+xEWpLAVME/E\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 384,
		"path": "../public/assets/tatiana-retrato.jpg.asset-CNG9rR0V.js"
	},
	"/assets/termos-C7zAVfcS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"207-71q1EOoEErwAjcGjfcp8ynrjJeE\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 519,
		"path": "../public/assets/termos-C7zAVfcS.js"
	},
	"/assets/styles-DiSrf97C.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12a24-aoySVZFQqcYgB7o4WLxgC6N5kCc\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 76324,
		"path": "../public/assets/styles-DiSrf97C.css"
	},
	"/assets/index-CrIkOJ-b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"554b9-yQZxkhXEKeCrX5aXJmWxWTDM8yg\"",
		"mtime": "2026-10-26T19:58:32.027Z",
		"size": 349369,
		"path": "../public/assets/index-CrIkOJ-b.js"
	},
	"/assets/tatiana-consulta-clean-CgsLZrv8.jpg": {
		"type": "image/jpeg",
		"etag": "\"14fffa-Fg+NG4rpMOIldmaljErIsNW6A2U\"",
		"mtime": "2026-10-26T19:58:32.028Z",
		"size": 1376250,
		"path": "../public/assets/tatiana-consulta-clean-CgsLZrv8.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_u15zuK = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_u15zuK
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
