(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.CreaNyan = factory());
}(this, function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var isMobile = createCommonjsModule(function (module) {
	(function (global) {
	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
	        android_tablet      = /Android/i,
	        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone       = /Windows Phone/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
	        seven_inch = new RegExp(
	            '(?:' +
	            'Nexus 7' +
	            '|' +
	            'BNTV250' +
	            '|' +
	            'Kindle Fire' +
	            '|' +
	            'Silk' +
	            '|' +
	            'GT-P1000' +
	            ')',
	            'i');
	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };
	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;
	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone:  match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone:  match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            chrome:       match(other_chrome, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };
	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };
	    if (module.exports && typeof window === 'undefined') {
	        module.exports = IsMobileClass;
	    } else if (module.exports && typeof window !== 'undefined') {
	        module.exports = instantiate();
	    } else {
	        global.isMobile = instantiate();
	    }
	})(commonjsGlobal);
	});

	var D__workspace_opensource_creanyanEx_node_modules_removeArrayItems = function removeItems (arr, startIdx, removeCount) {
	  var i, length = arr.length;
	  if (startIdx >= length || removeCount === 0) {
	    return
	  }
	  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
	  var len = length - removeCount;
	  for (i = startIdx; i < len; ++i) {
	    arr[i] = arr[i + removeCount];
	  }
	  arr.length = len;
	};

	var eventemitter3 = createCommonjsModule(function (module) {
	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';
	function Events() {}
	if (Object.create) {
	  Events.prototype = Object.create(null);
	  if (!new Events().__proto__) prefix = false;
	}
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;
	  if (this._eventsCount === 0) return names;
	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	  return names;
	};
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events[evt];
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	  return ee;
	};
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	  if (!this._events[evt]) return false;
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	  return true;
	};
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	  return this;
	};
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];
	  return this;
	};
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }
	  var listeners = this._events[evt];
	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }
	  return this;
	};
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;
	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }
	  return this;
	};
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	EventEmitter.prefixed = prefix;
	EventEmitter.EventEmitter = EventEmitter;
	{
	  module.exports = EventEmitter;
	}
	});

	var earcut_1 = earcut;
	var default_1 = earcut;
	function earcut(data, holeIndices, dim) {
	    dim = dim || 2;
	    var hasHoles = holeIndices && holeIndices.length,
	        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
	        outerNode = linkedList(data, 0, outerLen, dim, true),
	        triangles = [];
	    if (!outerNode || outerNode.next === outerNode.prev) return triangles;
	    var minX, minY, maxX, maxY, x, y, invSize;
	    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
	    if (data.length > 80 * dim) {
	        minX = maxX = data[0];
	        minY = maxY = data[1];
	        for (var i = dim; i < outerLen; i += dim) {
	            x = data[i];
	            y = data[i + 1];
	            if (x < minX) minX = x;
	            if (y < minY) minY = y;
	            if (x > maxX) maxX = x;
	            if (y > maxY) maxY = y;
	        }
	        invSize = Math.max(maxX - minX, maxY - minY);
	        invSize = invSize !== 0 ? 1 / invSize : 0;
	    }
	    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
	    return triangles;
	}
	function linkedList(data, start, end, dim, clockwise) {
	    var i, last;
	    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
	        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
	    } else {
	        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
	    }
	    if (last && equals(last, last.next)) {
	        removeNode(last);
	        last = last.next;
	    }
	    return last;
	}
	function filterPoints(start, end) {
	    if (!start) return start;
	    if (!end) end = start;
	    var p = start,
	        again;
	    do {
	        again = false;
	        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
	            removeNode(p);
	            p = end = p.prev;
	            if (p === p.next) break;
	            again = true;
	        } else {
	            p = p.next;
	        }
	    } while (again || p !== end);
	    return end;
	}
	function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
	    if (!ear) return;
	    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
	    var stop = ear,
	        prev, next;
	    while (ear.prev !== ear.next) {
	        prev = ear.prev;
	        next = ear.next;
	        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
	            triangles.push(prev.i / dim);
	            triangles.push(ear.i / dim);
	            triangles.push(next.i / dim);
	            removeNode(ear);
	            ear = next.next;
	            stop = next.next;
	            continue;
	        }
	        ear = next;
	        if (ear === stop) {
	            if (!pass) {
	                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
	            } else if (pass === 1) {
	                ear = cureLocalIntersections(ear, triangles, dim);
	                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
	            } else if (pass === 2) {
	                splitEarcut(ear, triangles, dim, minX, minY, invSize);
	            }
	            break;
	        }
	    }
	}
	function isEar(ear) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;
	    if (area(a, b, c) >= 0) return false;
	    var p = ear.next.next;
	    while (p !== ear.prev) {
	        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.next;
	    }
	    return true;
	}
	function isEarHashed(ear, minX, minY, invSize) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;
	    if (area(a, b, c) >= 0) return false;
	    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
	        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
	        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
	        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);
	    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
	        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
	    var p = ear.prevZ,
	        n = ear.nextZ;
	    while (p && p.z >= minZ && n && n.z <= maxZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;
	        if (n !== ear.prev && n !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
	            area(n.prev, n, n.next) >= 0) return false;
	        n = n.nextZ;
	    }
	    while (p && p.z >= minZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;
	    }
	    while (n && n.z <= maxZ) {
	        if (n !== ear.prev && n !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
	            area(n.prev, n, n.next) >= 0) return false;
	        n = n.nextZ;
	    }
	    return true;
	}
	function cureLocalIntersections(start, triangles, dim) {
	    var p = start;
	    do {
	        var a = p.prev,
	            b = p.next.next;
	        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
	            triangles.push(a.i / dim);
	            triangles.push(p.i / dim);
	            triangles.push(b.i / dim);
	            removeNode(p);
	            removeNode(p.next);
	            p = start = b;
	        }
	        p = p.next;
	    } while (p !== start);
	    return p;
	}
	function splitEarcut(start, triangles, dim, minX, minY, invSize) {
	    var a = start;
	    do {
	        var b = a.next.next;
	        while (b !== a.prev) {
	            if (a.i !== b.i && isValidDiagonal(a, b)) {
	                var c = splitPolygon(a, b);
	                a = filterPoints(a, a.next);
	                c = filterPoints(c, c.next);
	                earcutLinked(a, triangles, dim, minX, minY, invSize);
	                earcutLinked(c, triangles, dim, minX, minY, invSize);
	                return;
	            }
	            b = b.next;
	        }
	        a = a.next;
	    } while (a !== start);
	}
	function eliminateHoles(data, holeIndices, outerNode, dim) {
	    var queue = [],
	        i, len, start, end, list;
	    for (i = 0, len = holeIndices.length; i < len; i++) {
	        start = holeIndices[i] * dim;
	        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	        list = linkedList(data, start, end, dim, false);
	        if (list === list.next) list.steiner = true;
	        queue.push(getLeftmost(list));
	    }
	    queue.sort(compareX);
	    for (i = 0; i < queue.length; i++) {
	        eliminateHole(queue[i], outerNode);
	        outerNode = filterPoints(outerNode, outerNode.next);
	    }
	    return outerNode;
	}
	function compareX(a, b) {
	    return a.x - b.x;
	}
	function eliminateHole(hole, outerNode) {
	    outerNode = findHoleBridge(hole, outerNode);
	    if (outerNode) {
	        var b = splitPolygon(outerNode, hole);
	        filterPoints(b, b.next);
	    }
	}
	function findHoleBridge(hole, outerNode) {
	    var p = outerNode,
	        hx = hole.x,
	        hy = hole.y,
	        qx = -Infinity,
	        m;
	    do {
	        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
	            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
	            if (x <= hx && x > qx) {
	                qx = x;
	                if (x === hx) {
	                    if (hy === p.y) return p;
	                    if (hy === p.next.y) return p.next;
	                }
	                m = p.x < p.next.x ? p : p.next;
	            }
	        }
	        p = p.next;
	    } while (p !== outerNode);
	    if (!m) return null;
	    if (hx === qx) return m.prev;
	    var stop = m,
	        mx = m.x,
	        my = m.y,
	        tanMin = Infinity,
	        tan;
	    p = m.next;
	    while (p !== stop) {
	        if (hx >= p.x && p.x >= mx && hx !== p.x &&
	                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
	            tan = Math.abs(hy - p.y) / (hx - p.x);
	            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
	                m = p;
	                tanMin = tan;
	            }
	        }
	        p = p.next;
	    }
	    return m;
	}
	function indexCurve(start, minX, minY, invSize) {
	    var p = start;
	    do {
	        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
	        p.prevZ = p.prev;
	        p.nextZ = p.next;
	        p = p.next;
	    } while (p !== start);
	    p.prevZ.nextZ = null;
	    p.prevZ = null;
	    sortLinked(p);
	}
	function sortLinked(list) {
	    var i, p, q, e, tail, numMerges, pSize, qSize,
	        inSize = 1;
	    do {
	        p = list;
	        list = null;
	        tail = null;
	        numMerges = 0;
	        while (p) {
	            numMerges++;
	            q = p;
	            pSize = 0;
	            for (i = 0; i < inSize; i++) {
	                pSize++;
	                q = q.nextZ;
	                if (!q) break;
	            }
	            qSize = inSize;
	            while (pSize > 0 || (qSize > 0 && q)) {
	                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                }
	                if (tail) tail.nextZ = e;
	                else list = e;
	                e.prevZ = tail;
	                tail = e;
	            }
	            p = q;
	        }
	        tail.nextZ = null;
	        inSize *= 2;
	    } while (numMerges > 1);
	    return list;
	}
	function zOrder(x, y, minX, minY, invSize) {
	    x = 32767 * (x - minX) * invSize;
	    y = 32767 * (y - minY) * invSize;
	    x = (x | (x << 8)) & 0x00FF00FF;
	    x = (x | (x << 4)) & 0x0F0F0F0F;
	    x = (x | (x << 2)) & 0x33333333;
	    x = (x | (x << 1)) & 0x55555555;
	    y = (y | (y << 8)) & 0x00FF00FF;
	    y = (y | (y << 4)) & 0x0F0F0F0F;
	    y = (y | (y << 2)) & 0x33333333;
	    y = (y | (y << 1)) & 0x55555555;
	    return x | (y << 1);
	}
	function getLeftmost(start) {
	    var p = start,
	        leftmost = start;
	    do {
	        if (p.x < leftmost.x) leftmost = p;
	        p = p.next;
	    } while (p !== start);
	    return leftmost;
	}
	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
	    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
	           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
	           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
	}
	function isValidDiagonal(a, b) {
	    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
	           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
	}
	function area(p, q, r) {
	    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}
	function equals(p1, p2) {
	    return p1.x === p2.x && p1.y === p2.y;
	}
	function intersects(p1, q1, p2, q2) {
	    if ((equals(p1, q1) && equals(p2, q2)) ||
	        (equals(p1, q2) && equals(p2, q1))) return true;
	    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
	           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
	}
	function intersectsPolygon(a, b) {
	    var p = a;
	    do {
	        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
	                intersects(p, p.next, a, b)) return true;
	        p = p.next;
	    } while (p !== a);
	    return false;
	}
	function locallyInside(a, b) {
	    return area(a.prev, a, a.next) < 0 ?
	        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
	        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}
	function middleInside(a, b) {
	    var p = a,
	        inside = false,
	        px = (a.x + b.x) / 2,
	        py = (a.y + b.y) / 2;
	    do {
	        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
	                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
	            inside = !inside;
	        p = p.next;
	    } while (p !== a);
	    return inside;
	}
	function splitPolygon(a, b) {
	    var a2 = new Node(a.i, a.x, a.y),
	        b2 = new Node(b.i, b.x, b.y),
	        an = a.next,
	        bp = b.prev;
	    a.next = b;
	    b.prev = a;
	    a2.next = an;
	    an.prev = a2;
	    b2.next = a2;
	    a2.prev = b2;
	    bp.next = b2;
	    b2.prev = bp;
	    return b2;
	}
	function insertNode(i, x, y, last) {
	    var p = new Node(i, x, y);
	    if (!last) {
	        p.prev = p;
	        p.next = p;
	    } else {
	        p.next = last.next;
	        p.prev = last;
	        last.next.prev = p;
	        last.next = p;
	    }
	    return p;
	}
	function removeNode(p) {
	    p.next.prev = p.prev;
	    p.prev.next = p.next;
	    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
	    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
	}
	function Node(i, x, y) {
	    this.i = i;
	    this.x = x;
	    this.y = y;
	    this.prev = null;
	    this.next = null;
	    this.z = null;
	    this.prevZ = null;
	    this.nextZ = null;
	    this.steiner = false;
	}
	earcut.deviation = function (data, holeIndices, dim, triangles) {
	    var hasHoles = holeIndices && holeIndices.length;
	    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
	    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
	    if (hasHoles) {
	        for (var i = 0, len = holeIndices.length; i < len; i++) {
	            var start = holeIndices[i] * dim;
	            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	            polygonArea -= Math.abs(signedArea(data, start, end, dim));
	        }
	    }
	    var trianglesArea = 0;
	    for (i = 0; i < triangles.length; i += 3) {
	        var a = triangles[i] * dim;
	        var b = triangles[i + 1] * dim;
	        var c = triangles[i + 2] * dim;
	        trianglesArea += Math.abs(
	            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
	            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
	    }
	    return polygonArea === 0 && trianglesArea === 0 ? 0 :
	        Math.abs((trianglesArea - polygonArea) / polygonArea);
	};
	function signedArea(data, start, end, dim) {
	    var sum = 0;
	    for (var i = start, j = end - dim; i < end; i += dim) {
	        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
	        j = i;
	    }
	    return sum;
	}
	earcut.flatten = function (data) {
	    var dim = data[0][0].length,
	        result = {vertices: [], holes: [], dimensions: dim},
	        holeIndex = 0;
	    for (var i = 0; i < data.length; i++) {
	        for (var j = 0; j < data[i].length; j++) {
	            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
	        }
	        if (i > 0) {
	            holeIndex += data[i - 1].length;
	            result.holes.push(holeIndex);
	        }
	    }
	    return result;
	};
	earcut_1.default = default_1;

	var constants = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var ENV = {
	    WEBGL_LEGACY: 0,
	    WEBGL: 1,
	    WEBGL2: 2,
	};
	var RENDERER_TYPE = {
	    UNKNOWN:    0,
	    WEBGL:      1,
	    CANVAS:     2,
	};
	var BLEND_MODES = {
	    NORMAL:         0,
	    ADD:            1,
	    MULTIPLY:       2,
	    SCREEN:         3,
	    OVERLAY:        4,
	    DARKEN:         5,
	    LIGHTEN:        6,
	    COLOR_DODGE:    7,
	    COLOR_BURN:     8,
	    HARD_LIGHT:     9,
	    SOFT_LIGHT:     10,
	    DIFFERENCE:     11,
	    EXCLUSION:      12,
	    HUE:            13,
	    SATURATION:     14,
	    COLOR:          15,
	    LUMINOSITY:     16,
	    NORMAL_NPM:     17,
	    ADD_NPM:        18,
	    SCREEN_NPM:     19,
	};
	var DRAW_MODES = {
	    POINTS:         0,
	    LINES:          1,
	    LINE_LOOP:      2,
	    LINE_STRIP:     3,
	    TRIANGLES:      4,
	    TRIANGLE_STRIP: 5,
	    TRIANGLE_FAN:   6,
	};
	var FORMATS = {
	    RGBA:             6408,
	    RGB:              6407,
	    ALPHA:            6406,
	    LUMINANCE:        6409,
	    LUMINANCE_ALPHA:  6410,
	    DEPTH_COMPONENT:  6402,
	    DEPTH_STENCIL:    34041,
	};
	var TARGETS = {
	    TEXTURE_2D: 3553,
	    TEXTURE_CUBE_MAP: 34067,
	    TEXTURE_2D_ARRAY: 35866,
	    TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
	    TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
	    TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
	    TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
	    TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
	    TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
	};
	var TYPES = {
	    UNSIGNED_BYTE: 5121,
	    UNSIGNED_SHORT: 5123,
	    UNSIGNED_SHORT_5_6_5: 33635,
	    UNSIGNED_SHORT_4_4_4_4: 32819,
	    UNSIGNED_SHORT_5_5_5_1: 32820,
	    FLOAT: 5126,
	    HALF_FLOAT: 36193,
	};
	var SCALE_MODES = {
	    LINEAR:     1,
	    NEAREST:    0,
	};
	var WRAP_MODES = {
	    CLAMP:           33071,
	    REPEAT:          10497,
	    MIRRORED_REPEAT: 33648,
	};
	var GC_MODES = {
	    AUTO:           0,
	    MANUAL:         1,
	};
	var PRECISION = {
	    LOW: 'lowp',
	    MEDIUM: 'mediump',
	    HIGH: 'highp',
	};
	exports.ENV = ENV;
	exports.RENDERER_TYPE = RENDERER_TYPE;
	exports.BLEND_MODES = BLEND_MODES;
	exports.DRAW_MODES = DRAW_MODES;
	exports.FORMATS = FORMATS;
	exports.TARGETS = TARGETS;
	exports.TYPES = TYPES;
	exports.SCALE_MODES = SCALE_MODES;
	exports.WRAP_MODES = WRAP_MODES;
	exports.GC_MODES = GC_MODES;
	exports.PRECISION = PRECISION;
	});
	var constants$1 = unwrapExports(constants);
	var constants_1 = constants.ENV;
	var constants_2 = constants.RENDERER_TYPE;
	var constants_3 = constants.BLEND_MODES;
	var constants_4 = constants.DRAW_MODES;
	var constants_5 = constants.FORMATS;
	var constants_6 = constants.TARGETS;
	var constants_7 = constants.TYPES;
	var constants_8 = constants.SCALE_MODES;
	var constants_9 = constants.WRAP_MODES;
	var constants_10 = constants.GC_MODES;
	var constants_11 = constants.PRECISION;

	var constants$2 = ({
		default: constants$1,
		__moduleExports: constants,
		ENV: constants_1,
		RENDERER_TYPE: constants_2,
		BLEND_MODES: constants_3,
		DRAW_MODES: constants_4,
		FORMATS: constants_5,
		TARGETS: constants_6,
		TYPES: constants_7,
		SCALE_MODES: constants_8,
		WRAP_MODES: constants_9,
		GC_MODES: constants_10,
		PRECISION: constants_11
	});

	var settings_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var Device = _interopDefault(isMobile);
	function maxRecommendedTextures(max)
	{
	    if (Device.tablet || Device.phone)
	    {
	        return 4;
	    }
	    return max;
	}
	function canUploadSameBuffer()
	{
	    var ios = !!navigator.platform && (/iPad|iPhone|iPod/).test(navigator.platform);
	    return !ios;
	}
	var settings = {
	    MIPMAP_TEXTURES: true,
	    RESOLUTION: 1,
	    FILTER_RESOLUTION: 1,
	    SPRITE_MAX_TEXTURES: maxRecommendedTextures(32),
	    SPRITE_BATCH_SIZE: 4096,
	    RENDER_OPTIONS: {
	        view: null,
	        antialias: false,
	        forceFXAA: false,
	        autoResize: false,
	        transparent: false,
	        backgroundColor: 0x000000,
	        clearBeforeRender: true,
	        preserveDrawingBuffer: false,
	        roundPixels: false,
	        width: 800,
	        height: 600,
	        legacy: false,
	    },
	    GC_MODE: 0,
	    GC_MAX_IDLE: 60 * 60,
	    GC_MAX_CHECK_COUNT: 60 * 10,
	    WRAP_MODE: 33071,
	    SCALE_MODE: 1,
	    PRECISION_VERTEX: 'highp',
	    PRECISION_FRAGMENT: 'mediump',
	    CAN_UPLOAD_SAME_BUFFER: canUploadSameBuffer(),
	    CREATE_IMAGE_BITMAP: true,
	};
	exports.settings = settings;
	});
	unwrapExports(settings_1);
	var settings_2 = settings_1.settings;

	var punycode = createCommonjsModule(function (module, exports) {
	(function(root) {
		var freeExports = exports &&
			!exports.nodeType && exports;
		var freeModule = module &&
			!module.nodeType && module;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
		var punycode,
		maxInt = 2147483647,
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128,
		delimiter = '-',
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/,
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
		key;
		function error(type) {
			throw RangeError(errors[type]);
		}
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				result = parts[0] + '@';
				string = parts[1];
			}
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
		function digitToBasic(digit, flag) {
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
		function decode(input) {
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    baseMinusT;
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
			for (j = 0; j < basic; ++j) {
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
				for (oldi = i, w = 1, k = base; ; k += base) {
					if (index >= inputLength) {
						error('invalid-input');
					}
					digit = basicToDigit(input.charCodeAt(index++));
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (digit < t) {
						break;
					}
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
					w *= baseMinusT;
				}
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
				n += floor(i / out);
				i %= out;
				output.splice(i++, 0, n);
			}
			return ucs2encode(output);
		}
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    inputLength,
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
			input = ucs2decode(input);
			inputLength = input.length;
			n = initialN;
			delta = 0;
			bias = initialBias;
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
			handledCPCount = basicLength = output.length;
			if (basicLength) {
				output.push(delimiter);
			}
			while (handledCPCount < inputLength) {
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
					if (currentValue == n) {
						for (q = delta, k = base; ; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
				++delta;
				++n;
			}
			return output.join('');
		}
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
		punycode = {
			'version': '1.3.2',
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
		if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				freeModule.exports = punycode;
			} else {
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			root.punycode = punycode;
		}
	}(commonjsGlobal));
	});

	var util = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	  var len = qs.length;
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	  return obj;
	};

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	    case 'boolean':
	      return v ? 'true' : 'false';
	    case 'number':
	      return isFinite(v) ? v : '';
	    default:
	      return '';
	  }
	};
	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var D__workspace_opensource_creanyanEx_node_modules_querystring = createCommonjsModule(function (module, exports) {
	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});
	var D__workspace_opensource_creanyanEx_node_modules_querystring_1 = D__workspace_opensource_creanyanEx_node_modules_querystring.decode;
	var D__workspace_opensource_creanyanEx_node_modules_querystring_2 = D__workspace_opensource_creanyanEx_node_modules_querystring.parse;
	var D__workspace_opensource_creanyanEx_node_modules_querystring_3 = D__workspace_opensource_creanyanEx_node_modules_querystring.encode;
	var D__workspace_opensource_creanyanEx_node_modules_querystring_4 = D__workspace_opensource_creanyanEx_node_modules_querystring.stringify;

	var parse = urlParse;
	var resolve = urlResolve;
	var resolveObject = urlResolveObject;
	var format = urlFormat;
	var Url_1 = Url;
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	    autoEscape = ['\''].concat(unwise),
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    };
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	  var rest = url;
	  rest = rest.trim();
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = D__workspace_opensource_creanyanEx_node_modules_querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    var auth, atSign;
	    if (hostEnd === -1) {
	      atSign = rest.lastIndexOf('@');
	    } else {
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	    this.parseHost();
	    this.hostname = this.hostname || '';
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      this.hostname = this.hostname.toLowerCase();
	    }
	    if (!ipv6Hostname) {
	      this.hostname = punycode.toASCII(this.hostname);
	    }
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	  if (!unsafeProtocol[lowerProto]) {
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = D__workspace_opensource_creanyanEx_node_modules_querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	  this.href = this.format();
	  return this;
	};
	function urlFormat(obj) {
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = D__workspace_opensource_creanyanEx_node_modules_querystring.stringify(this.query);
	  }
	  var search = this.search || (query && ('?' + query)) || '';
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	  return protocol + host + pathname + search + hash;
	};
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	  result.hash = relative.hash;
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	  if (relative.slashes && !relative.protocol) {
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	    result.href = result.format();
	    return result;
	  }
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	  if (isRelAbs) {
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	  } else if (relPath.length) {
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	  if (!srcPath.length) {
	    result.pathname = null;
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};
	var url = {
		parse: parse,
		resolve: resolve,
		resolveObject: resolveObject,
		format: format,
		Url: Url_1
	};

	var utils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var ismobilejs = _interopDefault(isMobile);
	var removeArrayItems = _interopDefault(D__workspace_opensource_creanyanEx_node_modules_removeArrayItems);
	var eventemitter3$$1 = _interopDefault(eventemitter3);
	var earcut = _interopDefault(earcut_1);
	var _url = _interopDefault(url);
	function mixin(target, source)
	{
	    if (!target || !source) { return; }
	    var keys = Object.keys(source);
	    for (var i = 0; i < keys.length; ++i)
	    {
	        var propertyName = keys[i];
	        Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
	    }
	}
	var mixins = [];
	function delayMixin(target, source)
	{
	    mixins.push(target, source);
	}
	function performMixins()
	{
	    for (var i = 0; i < mixins.length; i += 2)
	    {
	        mixin(mixins[i], mixins[i + 1]);
	    }
	    mixins.length = 0;
	}
	var mixins$1 = ({
		mixin: mixin,
		delayMixin: delayMixin,
		performMixins: performMixins
	});
	var saidHello = false;
	var VERSION = '5.0.0-alpha.3';
	function skipHello()
	{
	    saidHello = true;
	}
	function sayHello(type)
	{
	    if (saidHello)
	    {
	        return;
	    }
	    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
	    {
	        var args = [
	            ("\n %c %c %c PixiJS " + VERSION + " - ✰ " + type + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n"),
	            'background: #ff66a5; padding:5px 0;',
	            'background: #ff66a5; padding:5px 0;',
	            'color: #ff66a5; background: #030307; padding:5px 0;',
	            'background: #ff66a5; padding:5px 0;',
	            'background: #ffc3dc; padding:5px 0;',
	            'background: #ff66a5; padding:5px 0;',
	            'color: #ff2424; background: #fff; padding:5px 0;',
	            'color: #ff2424; background: #fff; padding:5px 0;',
	            'color: #ff2424; background: #fff; padding:5px 0;' ];
	        window.console.log.apply(console, args);
	    }
	    else if (window.console)
	    {
	        window.console.log(("PixiJS " + VERSION + " - " + type + " - http://www.pixijs.com/"));
	    }
	    saidHello = true;
	}
	function isWebGLSupported()
	{
	    var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };
	    try
	    {
	        if (!window.WebGLRenderingContext)
	        {
	            return false;
	        }
	        var canvas = document.createElement('canvas');
	        var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
	        var success = !!(gl && gl.getContextAttributes().stencil);
	        if (gl)
	        {
	            var loseContext = gl.getExtension('WEBGL_lose_context');
	            if (loseContext)
	            {
	                loseContext.loseContext();
	            }
	        }
	        gl = null;
	        return success;
	    }
	    catch (e)
	    {
	        return false;
	    }
	}
	function hex2rgb(hex, out)
	{
	    out = out || [];
	    out[0] = ((hex >> 16) & 0xFF) / 255;
	    out[1] = ((hex >> 8) & 0xFF) / 255;
	    out[2] = (hex & 0xFF) / 255;
	    return out;
	}
	function hex2string(hex)
	{
	    hex = hex.toString(16);
	    hex = '000000'.substr(0, 6 - hex.length) + hex;
	    return ("#" + hex);
	}
	function rgb2hex(rgb)
	{
	    return (((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + (rgb[2] * 255 | 0));
	}
	function mapPremultipliedBlendModes()
	{
	    var pm = [];
	    var npm = [];
	    for (var i = 0; i < 32; i++)
	    {
	        pm[i] = i;
	        npm[i] = i;
	    }
	    pm[constants.BLEND_MODES.NORMAL_NPM] = constants.BLEND_MODES.NORMAL;
	    pm[constants.BLEND_MODES.ADD_NPM] = constants.BLEND_MODES.ADD;
	    pm[constants.BLEND_MODES.SCREEN_NPM] = constants.BLEND_MODES.SCREEN;
	    npm[constants.BLEND_MODES.NORMAL] = constants.BLEND_MODES.NORMAL_NPM;
	    npm[constants.BLEND_MODES.ADD] = constants.BLEND_MODES.ADD_NPM;
	    npm[constants.BLEND_MODES.SCREEN] = constants.BLEND_MODES.SCREEN_NPM;
	    var array = [];
	    array.push(npm);
	    array.push(pm);
	    return array;
	}
	var premultiplyBlendMode = mapPremultipliedBlendModes();
	function correctBlendMode(blendMode, premultiplied)
	{
	    return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
	}
	function premultiplyRgba(rgb, alpha, out, premultiply)
	{
	    out = out || new Float32Array(4);
	    if (premultiply || premultiply === undefined)
	    {
	        out[0] = rgb[0] * alpha;
	        out[1] = rgb[1] * alpha;
	        out[2] = rgb[2] * alpha;
	    }
	    else
	    {
	        out[0] = rgb[0];
	        out[1] = rgb[1];
	        out[2] = rgb[2];
	    }
	    out[3] = alpha;
	    return out;
	}
	function premultiplyTint(tint, alpha)
	{
	    if (alpha === 1.0)
	    {
	        return (alpha * 255 << 24) + tint;
	    }
	    if (alpha === 0.0)
	    {
	        return 0;
	    }
	    var R = ((tint >> 16) & 0xFF);
	    var G = ((tint >> 8) & 0xFF);
	    var B = (tint & 0xFF);
	    R = ((R * alpha) + 0.5) | 0;
	    G = ((G * alpha) + 0.5) | 0;
	    B = ((B * alpha) + 0.5) | 0;
	    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
	}
	function premultiplyTintToRgba(tint, alpha, out, premultiply)
	{
	    out = out || new Float32Array(4);
	    out[0] = ((tint >> 16) & 0xFF) / 255.0;
	    out[1] = ((tint >> 8) & 0xFF) / 255.0;
	    out[2] = (tint & 0xFF) / 255.0;
	    if (premultiply || premultiply === undefined)
	    {
	        out[0] *= alpha;
	        out[1] *= alpha;
	        out[2] *= alpha;
	    }
	    out[3] = alpha;
	    return out;
	}
	function createIndicesForQuads(size)
	{
	    var totalIndices = size * 6;
	    var indices = new Uint16Array(totalIndices);
	    for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4)
	    {
	        indices[i + 0] = j + 0;
	        indices[i + 1] = j + 1;
	        indices[i + 2] = j + 2;
	        indices[i + 3] = j + 0;
	        indices[i + 4] = j + 2;
	        indices[i + 5] = j + 3;
	    }
	    return indices;
	}
	var nextUid = 0;
	function uid()
	{
	    return ++nextUid;
	}
	function sign(n)
	{
	    if (n === 0) { return 0; }
	    return n < 0 ? -1 : 1;
	}
	var ProgramCache = {};
	var TextureCache = Object.create(null);
	var BaseTextureCache = Object.create(null);
	function destroyTextureCache()
	{
	    var key;
	    for (key in TextureCache)
	    {
	        TextureCache[key].destroy();
	    }
	    for (key in BaseTextureCache)
	    {
	        BaseTextureCache[key].destroy();
	    }
	}
	function clearTextureCache()
	{
	    var key;
	    for (key in TextureCache)
	    {
	        delete TextureCache[key];
	    }
	    for (key in BaseTextureCache)
	    {
	        delete BaseTextureCache[key];
	    }
	}
	function trimCanvas(canvas)
	{
	    var width = canvas.width;
	    var height = canvas.height;
	    var context = canvas.getContext('2d');
	    var imageData = context.getImageData(0, 0, width, height);
	    var pixels = imageData.data;
	    var len = pixels.length;
	    var bound = {
	        top: null,
	        left: null,
	        right: null,
	        bottom: null,
	    };
	    var i;
	    var x;
	    var y;
	    for (i = 0; i < len; i += 4)
	    {
	        if (pixels[i + 3] !== 0)
	        {
	            x = (i / 4) % width;
	            y = ~~((i / 4) / width);
	            if (bound.top === null)
	            {
	                bound.top = y;
	            }
	            if (bound.left === null)
	            {
	                bound.left = x;
	            }
	            else if (x < bound.left)
	            {
	                bound.left = x;
	            }
	            if (bound.right === null)
	            {
	                bound.right = x + 1;
	            }
	            else if (bound.right < x)
	            {
	                bound.right = x + 1;
	            }
	            if (bound.bottom === null)
	            {
	                bound.bottom = y;
	            }
	            else if (bound.bottom < y)
	            {
	                bound.bottom = y;
	            }
	        }
	    }
	    width = bound.right - bound.left;
	    height = bound.bottom - bound.top + 1;
	    var data = context.getImageData(bound.left, bound.top, width, height);
	    return {
	        height: height,
	        width: width,
	        data: data,
	    };
	}
	var CanvasRenderTarget = function CanvasRenderTarget(width, height, resolution)
	{
	    this.canvas = document.createElement('canvas');
	    this.context = this.canvas.getContext('2d');
	    this.resolution = resolution || settings_1.settings.RESOLUTION;
	    this.resize(width, height);
	};
	var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };
	CanvasRenderTarget.prototype.clear = function clear ()
	{
	    this.context.setTransform(1, 0, 0, 1, 0, 0);
	    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};
	CanvasRenderTarget.prototype.resize = function resize (width, height)
	{
	    this.canvas.width = width * this.resolution;
	    this.canvas.height = height * this.resolution;
	};
	CanvasRenderTarget.prototype.destroy = function destroy ()
	{
	    this.context = null;
	    this.canvas = null;
	};
	prototypeAccessors.width.get = function ()
	{
	    return this.canvas.width;
	};
	prototypeAccessors.width.set = function (val)
	{
	    this.canvas.width = val;
	};
	prototypeAccessors.height.get = function ()
	{
	    return this.canvas.height;
	};
	prototypeAccessors.height.set = function (val)
	{
	    this.canvas.height = val;
	};
	Object.defineProperties( CanvasRenderTarget.prototype, prototypeAccessors );
	var DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
	function decomposeDataUri(dataUri)
	{
	    var dataUriMatch = DATA_URI.exec(dataUri);
	    if (dataUriMatch)
	    {
	        return {
	            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
	            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
	            charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
	            encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : undefined,
	            data: dataUriMatch[5],
	        };
	    }
	    return undefined;
	}
	var tempAnchor;
	function determineCrossOrigin(url$$1, loc)
	{
	    if ( loc === void 0 ) loc = window.location;
	    if (url$$1.indexOf('data:') === 0)
	    {
	        return '';
	    }
	    loc = loc || window.location;
	    if (!tempAnchor)
	    {
	        tempAnchor = document.createElement('a');
	    }
	    tempAnchor.href = url$$1;
	    url$$1 = _url.parse(tempAnchor.href);
	    var samePort = (!url$$1.port && loc.port === '') || (url$$1.port === loc.port);
	    if (url$$1.hostname !== loc.hostname || !samePort || url$$1.protocol !== loc.protocol)
	    {
	        return 'anonymous';
	    }
	    return '';
	}
	settings_1.settings.RETINA_PREFIX = /@([0-9\.]+)x/;
	function getResolutionOfUrl(url$$1, defaultValue)
	{
	    var resolution = settings_1.settings.RETINA_PREFIX.exec(url$$1);
	    if (resolution)
	    {
	        return parseFloat(resolution[1]);
	    }
	    return defaultValue !== undefined ? defaultValue : 1;
	}
	exports.isMobile = ismobilejs;
	exports.removeItems = removeArrayItems;
	exports.EventEmitter = eventemitter3$$1;
	exports.mixins = mixins$1;
	exports.earcut = earcut;
	exports.skipHello = skipHello;
	exports.sayHello = sayHello;
	exports.isWebGLSupported = isWebGLSupported;
	exports.hex2rgb = hex2rgb;
	exports.hex2string = hex2string;
	exports.rgb2hex = rgb2hex;
	exports.premultiplyBlendMode = premultiplyBlendMode;
	exports.correctBlendMode = correctBlendMode;
	exports.premultiplyRgba = premultiplyRgba;
	exports.premultiplyTint = premultiplyTint;
	exports.premultiplyTintToRgba = premultiplyTintToRgba;
	exports.createIndicesForQuads = createIndicesForQuads;
	exports.uid = uid;
	exports.sign = sign;
	exports.CanvasRenderTarget = CanvasRenderTarget;
	exports.ProgramCache = ProgramCache;
	exports.TextureCache = TextureCache;
	exports.BaseTextureCache = BaseTextureCache;
	exports.destroyTextureCache = destroyTextureCache;
	exports.clearTextureCache = clearTextureCache;
	exports.trimCanvas = trimCanvas;
	exports.decomposeDataUri = decomposeDataUri;
	exports.determineCrossOrigin = determineCrossOrigin;
	exports.getResolutionOfUrl = getResolutionOfUrl;
	exports.DATA_URI = DATA_URI;
	});
	var utils$1 = unwrapExports(utils);
	var utils_1 = utils.isMobile;
	var utils_2 = utils.removeItems;
	var utils_3 = utils.EventEmitter;
	var utils_4 = utils.mixins;
	var utils_5 = utils.earcut;
	var utils_6 = utils.skipHello;
	var utils_7 = utils.sayHello;
	var utils_8 = utils.isWebGLSupported;
	var utils_9 = utils.hex2rgb;
	var utils_10 = utils.hex2string;
	var utils_11 = utils.rgb2hex;
	var utils_12 = utils.premultiplyBlendMode;
	var utils_13 = utils.correctBlendMode;
	var utils_14 = utils.premultiplyRgba;
	var utils_15 = utils.premultiplyTint;
	var utils_16 = utils.premultiplyTintToRgba;
	var utils_17 = utils.createIndicesForQuads;
	var utils_18 = utils.uid;
	var utils_19 = utils.sign;
	var utils_20 = utils.CanvasRenderTarget;
	var utils_21 = utils.ProgramCache;
	var utils_22 = utils.TextureCache;
	var utils_23 = utils.BaseTextureCache;
	var utils_24 = utils.destroyTextureCache;
	var utils_25 = utils.clearTextureCache;
	var utils_26 = utils.trimCanvas;
	var utils_27 = utils.decomposeDataUri;
	var utils_28 = utils.determineCrossOrigin;
	var utils_29 = utils.getResolutionOfUrl;
	var utils_30 = utils.DATA_URI;

	var utils$2 = ({
		default: utils$1,
		__moduleExports: utils,
		isMobile: utils_1,
		removeItems: utils_2,
		EventEmitter: utils_3,
		mixins: utils_4,
		earcut: utils_5,
		skipHello: utils_6,
		sayHello: utils_7,
		isWebGLSupported: utils_8,
		hex2rgb: utils_9,
		hex2string: utils_10,
		rgb2hex: utils_11,
		premultiplyBlendMode: utils_12,
		correctBlendMode: utils_13,
		premultiplyRgba: utils_14,
		premultiplyTint: utils_15,
		premultiplyTintToRgba: utils_16,
		createIndicesForQuads: utils_17,
		uid: utils_18,
		sign: utils_19,
		CanvasRenderTarget: utils_20,
		ProgramCache: utils_21,
		TextureCache: utils_22,
		BaseTextureCache: utils_23,
		destroyTextureCache: utils_24,
		clearTextureCache: utils_25,
		trimCanvas: utils_26,
		decomposeDataUri: utils_27,
		determineCrossOrigin: utils_28,
		getResolutionOfUrl: utils_29,
		DATA_URI: utils_30
	});

	var math = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var Point = function Point(x, y)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    this.x = x;
	    this.y = y;
	};
	Point.prototype.clone = function clone ()
	{
	    return new Point(this.x, this.y);
	};
	Point.prototype.copyFrom = function copyFrom (p)
	{
	    this.set(p.x, p.y);
	    return this;
	};
	Point.prototype.copyTo = function copyTo (p)
	{
	    p.set(this.x, this.y);
	    return p;
	};
	Point.prototype.equals = function equals (p)
	{
	    return (p.x === this.x) && (p.y === this.y);
	};
	Point.prototype.set = function set (x, y)
	{
	    this.x = x || 0;
	    this.y = y || ((y !== 0) ? this.x : 0);
	};
	var ObservablePoint = function ObservablePoint(cb, scope, x, y)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    this._x = x;
	    this._y = y;
	    this.cb = cb;
	    this.scope = scope;
	};
	var prototypeAccessors = { x: { configurable: true },y: { configurable: true } };
	ObservablePoint.prototype.set = function set (x, y)
	{
	    var _x = x || 0;
	    var _y = y || ((y !== 0) ? _x : 0);
	    if (this._x !== _x || this._y !== _y)
	    {
	        this._x = _x;
	        this._y = _y;
	        this.cb.call(this.scope);
	    }
	};
	ObservablePoint.prototype.copyFrom = function copyFrom (p)
	{
	    if (this._x !== p.x || this._y !== p.y)
	    {
	        this._x = p.x;
	        this._y = p.y;
	        this.cb.call(this.scope);
	    }
	    return this;
	};
	ObservablePoint.prototype.copyTo = function copyTo (p)
	{
	    p.set(this._x, this._y);
	    return p;
	};
	prototypeAccessors.x.get = function ()
	{
	    return this._x;
	};
	prototypeAccessors.x.set = function (value)
	{
	    if (this._x !== value)
	    {
	        this._x = value;
	        this.cb.call(this.scope);
	    }
	};
	prototypeAccessors.y.get = function ()
	{
	    return this._y;
	};
	prototypeAccessors.y.set = function (value)
	{
	    if (this._y !== value)
	    {
	        this._y = value;
	        this.cb.call(this.scope);
	    }
	};
	Object.defineProperties( ObservablePoint.prototype, prototypeAccessors );
	var PI_2 = Math.PI * 2;
	var RAD_TO_DEG = 180 / Math.PI;
	var DEG_TO_RAD = Math.PI / 180;
	var SHAPES = {
	    POLY: 0,
	    RECT: 1,
	    CIRC: 2,
	    ELIP: 3,
	    RREC: 4,
	};
	var Matrix = function Matrix(a, b, c, d, tx, ty)
	{
	    if ( a === void 0 ) a = 1;
	    if ( b === void 0 ) b = 0;
	    if ( c === void 0 ) c = 0;
	    if ( d === void 0 ) d = 1;
	    if ( tx === void 0 ) tx = 0;
	    if ( ty === void 0 ) ty = 0;
	    this.a = a;
	    this.b = b;
	    this.c = c;
	    this.d = d;
	    this.tx = tx;
	    this.ty = ty;
	    this.array = null;
	};
	var staticAccessors = { IDENTITY: { configurable: true },TEMP_MATRIX: { configurable: true } };
	Matrix.prototype.fromArray = function fromArray (array)
	{
	    this.a = array[0];
	    this.b = array[1];
	    this.c = array[3];
	    this.d = array[4];
	    this.tx = array[2];
	    this.ty = array[5];
	};
	Matrix.prototype.set = function set (a, b, c, d, tx, ty)
	{
	    this.a = a;
	    this.b = b;
	    this.c = c;
	    this.d = d;
	    this.tx = tx;
	    this.ty = ty;
	    return this;
	};
	Matrix.prototype.toArray = function toArray (transpose, out)
	{
	    if (!this.array)
	    {
	        this.array = new Float32Array(9);
	    }
	    var array = out || this.array;
	    if (transpose)
	    {
	        array[0] = this.a;
	        array[1] = this.b;
	        array[2] = 0;
	        array[3] = this.c;
	        array[4] = this.d;
	        array[5] = 0;
	        array[6] = this.tx;
	        array[7] = this.ty;
	        array[8] = 1;
	    }
	    else
	    {
	        array[0] = this.a;
	        array[1] = this.c;
	        array[2] = this.tx;
	        array[3] = this.b;
	        array[4] = this.d;
	        array[5] = this.ty;
	        array[6] = 0;
	        array[7] = 0;
	        array[8] = 1;
	    }
	    return array;
	};
	Matrix.prototype.apply = function apply (pos, newPos)
	{
	    newPos = newPos || new Point();
	    var x = pos.x;
	    var y = pos.y;
	    newPos.x = (this.a * x) + (this.c * y) + this.tx;
	    newPos.y = (this.b * x) + (this.d * y) + this.ty;
	    return newPos;
	};
	Matrix.prototype.applyInverse = function applyInverse (pos, newPos)
	{
	    newPos = newPos || new Point();
	    var id = 1 / ((this.a * this.d) + (this.c * -this.b));
	    var x = pos.x;
	    var y = pos.y;
	    newPos.x = (this.d * id * x) + (-this.c * id * y) + (((this.ty * this.c) - (this.tx * this.d)) * id);
	    newPos.y = (this.a * id * y) + (-this.b * id * x) + (((-this.ty * this.a) + (this.tx * this.b)) * id);
	    return newPos;
	};
	Matrix.prototype.translate = function translate (x, y)
	{
	    this.tx += x;
	    this.ty += y;
	    return this;
	};
	Matrix.prototype.scale = function scale (x, y)
	{
	    this.a *= x;
	    this.d *= y;
	    this.c *= x;
	    this.b *= y;
	    this.tx *= x;
	    this.ty *= y;
	    return this;
	};
	Matrix.prototype.rotate = function rotate (angle)
	{
	    var cos = Math.cos(angle);
	    var sin = Math.sin(angle);
	    var a1 = this.a;
	    var c1 = this.c;
	    var tx1 = this.tx;
	    this.a = (a1 * cos) - (this.b * sin);
	    this.b = (a1 * sin) + (this.b * cos);
	    this.c = (c1 * cos) - (this.d * sin);
	    this.d = (c1 * sin) + (this.d * cos);
	    this.tx = (tx1 * cos) - (this.ty * sin);
	    this.ty = (tx1 * sin) + (this.ty * cos);
	    return this;
	};
	Matrix.prototype.append = function append (matrix)
	{
	    var a1 = this.a;
	    var b1 = this.b;
	    var c1 = this.c;
	    var d1 = this.d;
	    this.a = (matrix.a * a1) + (matrix.b * c1);
	    this.b = (matrix.a * b1) + (matrix.b * d1);
	    this.c = (matrix.c * a1) + (matrix.d * c1);
	    this.d = (matrix.c * b1) + (matrix.d * d1);
	    this.tx = (matrix.tx * a1) + (matrix.ty * c1) + this.tx;
	    this.ty = (matrix.tx * b1) + (matrix.ty * d1) + this.ty;
	    return this;
	};
	Matrix.prototype.setTransform = function setTransform (x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY)
	{
	    this.a = Math.cos(rotation + skewY) * scaleX;
	    this.b = Math.sin(rotation + skewY) * scaleX;
	    this.c = -Math.sin(rotation - skewX) * scaleY;
	    this.d = Math.cos(rotation - skewX) * scaleY;
	    this.tx = x - ((pivotX * this.a) + (pivotY * this.c));
	    this.ty = y - ((pivotX * this.b) + (pivotY * this.d));
	    return this;
	};
	Matrix.prototype.prepend = function prepend (matrix)
	{
	    var tx1 = this.tx;
	    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1)
	    {
	        var a1 = this.a;
	        var c1 = this.c;
	        this.a = (a1 * matrix.a) + (this.b * matrix.c);
	        this.b = (a1 * matrix.b) + (this.b * matrix.d);
	        this.c = (c1 * matrix.a) + (this.d * matrix.c);
	        this.d = (c1 * matrix.b) + (this.d * matrix.d);
	    }
	    this.tx = (tx1 * matrix.a) + (this.ty * matrix.c) + matrix.tx;
	    this.ty = (tx1 * matrix.b) + (this.ty * matrix.d) + matrix.ty;
	    return this;
	};
	Matrix.prototype.decompose = function decompose (transform)
	{
	    var a = this.a;
	    var b = this.b;
	    var c = this.c;
	    var d = this.d;
	    var skewX = -Math.atan2(-c, d);
	    var skewY = Math.atan2(b, a);
	    var delta = Math.abs(skewX + skewY);
	    if (delta < 0.00001 || Math.abs(PI_2 - delta) < 0.00001)
	    {
	        transform.rotation = skewY;
	        if (a < 0 && d >= 0)
	        {
	            transform.rotation += (transform.rotation <= 0) ? Math.PI : -Math.PI;
	        }
	        transform.skew.x = transform.skew.y = 0;
	    }
	    else
	    {
	        transform.rotation = 0;
	        transform.skew.x = skewX;
	        transform.skew.y = skewY;
	    }
	    transform.scale.x = Math.sqrt((a * a) + (b * b));
	    transform.scale.y = Math.sqrt((c * c) + (d * d));
	    transform.position.x = this.tx;
	    transform.position.y = this.ty;
	    return transform;
	};
	Matrix.prototype.invert = function invert ()
	{
	    var a1 = this.a;
	    var b1 = this.b;
	    var c1 = this.c;
	    var d1 = this.d;
	    var tx1 = this.tx;
	    var n = (a1 * d1) - (b1 * c1);
	    this.a = d1 / n;
	    this.b = -b1 / n;
	    this.c = -c1 / n;
	    this.d = a1 / n;
	    this.tx = ((c1 * this.ty) - (d1 * tx1)) / n;
	    this.ty = -((a1 * this.ty) - (b1 * tx1)) / n;
	    return this;
	};
	Matrix.prototype.identity = function identity ()
	{
	    this.a = 1;
	    this.b = 0;
	    this.c = 0;
	    this.d = 1;
	    this.tx = 0;
	    this.ty = 0;
	    return this;
	};
	Matrix.prototype.clone = function clone ()
	{
	    var matrix = new Matrix();
	    matrix.a = this.a;
	    matrix.b = this.b;
	    matrix.c = this.c;
	    matrix.d = this.d;
	    matrix.tx = this.tx;
	    matrix.ty = this.ty;
	    return matrix;
	};
	Matrix.prototype.copyTo = function copyTo (matrix)
	{
	    matrix.a = this.a;
	    matrix.b = this.b;
	    matrix.c = this.c;
	    matrix.d = this.d;
	    matrix.tx = this.tx;
	    matrix.ty = this.ty;
	    return matrix;
	};
	Matrix.prototype.copyFrom = function copyFrom (matrix)
	{
	    this.a = matrix.a;
	    this.b = matrix.b;
	    this.c = matrix.c;
	    this.d = matrix.d;
	    this.tx = matrix.tx;
	    this.ty = matrix.ty;
	    return this;
	};
	staticAccessors.IDENTITY.get = function ()
	{
	    return new Matrix();
	};
	staticAccessors.TEMP_MATRIX.get = function ()
	{
	    return new Matrix();
	};
	Object.defineProperties( Matrix, staticAccessors );
	var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
	var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
	var tempMatrices = [];
	var mul = [];
	function signum(x)
	{
	    if (x < 0)
	    {
	        return -1;
	    }
	    if (x > 0)
	    {
	        return 1;
	    }
	    return 0;
	}
	function init()
	{
	    for (var i = 0; i < 16; i++)
	    {
	        var row = [];
	        mul.push(row);
	        for (var j = 0; j < 16; j++)
	        {
	            var _ux = signum((ux[i] * ux[j]) + (vx[i] * uy[j]));
	            var _uy = signum((uy[i] * ux[j]) + (vy[i] * uy[j]));
	            var _vx = signum((ux[i] * vx[j]) + (vx[i] * vy[j]));
	            var _vy = signum((uy[i] * vx[j]) + (vy[i] * vy[j]));
	            for (var k = 0; k < 16; k++)
	            {
	                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy)
	                {
	                    row.push(k);
	                    break;
	                }
	            }
	        }
	    }
	    for (var i$1 = 0; i$1 < 16; i$1++)
	    {
	        var mat = new Matrix();
	        mat.set(ux[i$1], uy[i$1], vx[i$1], vy[i$1], 0, 0);
	        tempMatrices.push(mat);
	    }
	}
	init();
	var GroupD8 = {
	    E: 0,
	    SE: 1,
	    S: 2,
	    SW: 3,
	    W: 4,
	    NW: 5,
	    N: 6,
	    NE: 7,
	    MIRROR_VERTICAL: 8,
	    MIRROR_HORIZONTAL: 12,
	    uX: function (ind) { return ux[ind]; },
	    uY: function (ind) { return uy[ind]; },
	    vX: function (ind) { return vx[ind]; },
	    vY: function (ind) { return vy[ind]; },
	    inv: function (rotation) {
	        if (rotation & 8)
	        {
	            return rotation & 15;
	        }
	        return (-rotation) & 7;
	    },
	    add: function (rotationSecond, rotationFirst) { return mul[rotationSecond][rotationFirst]; },
	    sub: function (rotationSecond, rotationFirst) { return mul[rotationSecond][GroupD8.inv(rotationFirst)]; },
	    rotate180: function (rotation) { return rotation ^ 4; },
	    isVertical: function (rotation) { return (rotation & 3) === 2; },
	    byDirection: function (dx, dy) {
	        if (Math.abs(dx) * 2 <= Math.abs(dy))
	        {
	            if (dy >= 0)
	            {
	                return GroupD8.S;
	            }
	            return GroupD8.N;
	        }
	        else if (Math.abs(dy) * 2 <= Math.abs(dx))
	        {
	            if (dx > 0)
	            {
	                return GroupD8.E;
	            }
	            return GroupD8.W;
	        }
	        else if (dy > 0)
	        {
	            if (dx > 0)
	            {
	                return GroupD8.SE;
	            }
	            return GroupD8.SW;
	        }
	        else if (dx > 0)
	        {
	            return GroupD8.NE;
	        }
	        return GroupD8.NW;
	    },
	    matrixAppendRotationInv: function (matrix, rotation, tx, ty) {
	        if ( tx === void 0 ) tx = 0;
	        if ( ty === void 0 ) ty = 0;
	        var mat = tempMatrices[GroupD8.inv(rotation)];
	        mat.tx = tx;
	        mat.ty = ty;
	        matrix.append(mat);
	    },
	};
	var Transform = function Transform()
	{
	    this.worldTransform = new Matrix();
	    this.localTransform = new Matrix();
	    this.position = new ObservablePoint(this.onChange, this, 0, 0);
	    this.scale = new ObservablePoint(this.onChange, this, 1, 1);
	    this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
	    this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
	    this._rotation = 0;
	    this._cx = 1;
	    this._sx = 0;
	    this._cy = 0;
	    this._sy = 1;
	    this._localID = 0;
	    this._currentLocalID = 0;
	    this._worldID = 0;
	    this._parentID = 0;
	};
	var prototypeAccessors$1 = { rotation: { configurable: true } };
	Transform.prototype.onChange = function onChange ()
	{
	    this._localID++;
	};
	Transform.prototype.updateSkew = function updateSkew ()
	{
	    this._cx = Math.cos(this._rotation + this.skew._y);
	    this._sx = Math.sin(this._rotation + this.skew._y);
	    this._cy = -Math.sin(this._rotation - this.skew._x);
	    this._sy = Math.cos(this._rotation - this.skew._x);
	    this._localID++;
	};
	Transform.prototype.updateLocalTransform = function updateLocalTransform ()
	{
	    var lt = this.localTransform;
	    if (this._localID !== this._currentLocalID)
	    {
	        lt.a = this._cx * this.scale._x;
	        lt.b = this._sx * this.scale._x;
	        lt.c = this._cy * this.scale._y;
	        lt.d = this._sy * this.scale._y;
	        lt.tx = this.position._x - ((this.pivot._x * lt.a) + (this.pivot._y * lt.c));
	        lt.ty = this.position._y - ((this.pivot._x * lt.b) + (this.pivot._y * lt.d));
	        this._currentLocalID = this._localID;
	        this._parentID = -1;
	    }
	};
	Transform.prototype.updateTransform = function updateTransform (parentTransform)
	{
	    var lt = this.localTransform;
	    if (this._localID !== this._currentLocalID)
	    {
	        lt.a = this._cx * this.scale._x;
	        lt.b = this._sx * this.scale._x;
	        lt.c = this._cy * this.scale._y;
	        lt.d = this._sy * this.scale._y;
	        lt.tx = this.position._x - ((this.pivot._x * lt.a) + (this.pivot._y * lt.c));
	        lt.ty = this.position._y - ((this.pivot._x * lt.b) + (this.pivot._y * lt.d));
	        this._currentLocalID = this._localID;
	        this._parentID = -1;
	    }
	    if (this._parentID !== parentTransform._worldID)
	    {
	        var pt = parentTransform.worldTransform;
	        var wt = this.worldTransform;
	        wt.a = (lt.a * pt.a) + (lt.b * pt.c);
	        wt.b = (lt.a * pt.b) + (lt.b * pt.d);
	        wt.c = (lt.c * pt.a) + (lt.d * pt.c);
	        wt.d = (lt.c * pt.b) + (lt.d * pt.d);
	        wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
	        wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
	        this._parentID = parentTransform._worldID;
	        this._worldID++;
	    }
	};
	Transform.prototype.setFromMatrix = function setFromMatrix (matrix)
	{
	    matrix.decompose(this);
	    this._localID++;
	};
	prototypeAccessors$1.rotation.get = function ()
	{
	    return this._rotation;
	};
	prototypeAccessors$1.rotation.set = function (value)
	{
	    this._rotation = value;
	    this.updateSkew();
	};
	Object.defineProperties( Transform.prototype, prototypeAccessors$1 );
	Transform.IDENTITY = new Transform();
	var Rectangle = function Rectangle(x, y, width, height)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    if ( width === void 0 ) width = 0;
	    if ( height === void 0 ) height = 0;
	    this.x = Number(x);
	    this.y = Number(y);
	    this.width = Number(width);
	    this.height = Number(height);
	    this.type = SHAPES.RECT;
	};
	var prototypeAccessors$2 = { left: { configurable: true },right: { configurable: true },top: { configurable: true },bottom: { configurable: true } };
	var staticAccessors$1 = { EMPTY: { configurable: true } };
	prototypeAccessors$2.left.get = function ()
	{
	    return this.x;
	};
	prototypeAccessors$2.right.get = function ()
	{
	    return this.x + this.width;
	};
	prototypeAccessors$2.top.get = function ()
	{
	    return this.y;
	};
	prototypeAccessors$2.bottom.get = function ()
	{
	    return this.y + this.height;
	};
	staticAccessors$1.EMPTY.get = function ()
	{
	    return new Rectangle(0, 0, 0, 0);
	};
	Rectangle.prototype.clone = function clone ()
	{
	    return new Rectangle(this.x, this.y, this.width, this.height);
	};
	Rectangle.prototype.copyFrom = function copyFrom (rectangle)
	{
	    this.x = rectangle.x;
	    this.y = rectangle.y;
	    this.width = rectangle.width;
	    this.height = rectangle.height;
	    return this;
	};
	Rectangle.prototype.copyTo = function copyTo (rectangle)
	{
	    rectangle.x = this.x;
	    rectangle.y = this.y;
	    rectangle.width = this.width;
	    rectangle.height = this.height;
	    return rectangle;
	};
	Rectangle.prototype.contains = function contains (x, y)
	{
	    if (this.width <= 0 || this.height <= 0)
	    {
	        return false;
	    }
	    if (x >= this.x && x < this.x + this.width)
	    {
	        if (y >= this.y && y < this.y + this.height)
	        {
	            return true;
	        }
	    }
	    return false;
	};
	Rectangle.prototype.pad = function pad (paddingX, paddingY)
	{
	    paddingX = paddingX || 0;
	    paddingY = paddingY || ((paddingY !== 0) ? paddingX : 0);
	    this.x -= paddingX;
	    this.y -= paddingY;
	    this.width += paddingX * 2;
	    this.height += paddingY * 2;
	};
	Rectangle.prototype.fit = function fit (rectangle)
	{
	    if (this.x < rectangle.x)
	    {
	        this.width += this.x;
	        if (this.width < 0)
	        {
	            this.width = 0;
	        }
	        this.x = rectangle.x;
	    }
	    if (this.y < rectangle.y)
	    {
	        this.height += this.y;
	        if (this.height < 0)
	        {
	            this.height = 0;
	        }
	        this.y = rectangle.y;
	    }
	    if (this.x + this.width > rectangle.x + rectangle.width)
	    {
	        this.width = rectangle.width - this.x;
	        if (this.width < 0)
	        {
	            this.width = 0;
	        }
	    }
	    if (this.y + this.height > rectangle.y + rectangle.height)
	    {
	        this.height = rectangle.height - this.y;
	        if (this.height < 0)
	        {
	            this.height = 0;
	        }
	    }
	};
	Rectangle.prototype.ceil = function ceil (resolution, eps)
	{
	        if ( resolution === void 0 ) resolution = 1;
	        if ( eps === void 0 ) eps = 0.001;
	    var x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
	    var y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
	    this.x = Math.floor((this.x + eps) * resolution) / resolution;
	    this.y = Math.floor((this.y + eps) * resolution) / resolution;
	    this.width = x2 - this.x;
	    this.height = y2 - this.y;
	};
	Rectangle.prototype.enlarge = function enlarge (rectangle)
	{
	    var x1 = Math.min(this.x, rectangle.x);
	    var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
	    var y1 = Math.min(this.y, rectangle.y);
	    var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
	    this.x = x1;
	    this.width = x2 - x1;
	    this.y = y1;
	    this.height = y2 - y1;
	};
	Object.defineProperties( Rectangle.prototype, prototypeAccessors$2 );
	Object.defineProperties( Rectangle, staticAccessors$1 );
	var Circle = function Circle(x, y, radius)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    if ( radius === void 0 ) radius = 0;
	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	    this.type = SHAPES.CIRC;
	};
	Circle.prototype.clone = function clone ()
	{
	    return new Circle(this.x, this.y, this.radius);
	};
	Circle.prototype.contains = function contains (x, y)
	{
	    if (this.radius <= 0)
	    {
	        return false;
	    }
	    var r2 = this.radius * this.radius;
	    var dx = (this.x - x);
	    var dy = (this.y - y);
	    dx *= dx;
	    dy *= dy;
	    return (dx + dy <= r2);
	};
	Circle.prototype.getBounds = function getBounds ()
	{
	    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	};
	var Ellipse = function Ellipse(x, y, width, height)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    if ( width === void 0 ) width = 0;
	    if ( height === void 0 ) height = 0;
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.type = SHAPES.ELIP;
	};
	Ellipse.prototype.clone = function clone ()
	{
	    return new Ellipse(this.x, this.y, this.width, this.height);
	};
	Ellipse.prototype.contains = function contains (x, y)
	{
	    if (this.width <= 0 || this.height <= 0)
	    {
	        return false;
	    }
	    var normx = ((x - this.x) / this.width);
	    var normy = ((y - this.y) / this.height);
	    normx *= normx;
	    normy *= normy;
	    return (normx + normy <= 1);
	};
	Ellipse.prototype.getBounds = function getBounds ()
	{
	    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
	};
	var Polygon = function Polygon()
	{
	    var points = [], len = arguments.length;
	    while ( len-- ) points[ len ] = arguments[ len ];
	    if (Array.isArray(points[0]))
	    {
	        points = points[0];
	    }
	    if (points[0] instanceof Point)
	    {
	        var p = [];
	        for (var i = 0, il = points.length; i < il; i++)
	        {
	            p.push(points[i].x, points[i].y);
	        }
	        points = p;
	    }
	    this.closed = true;
	    this.points = points;
	    this.type = SHAPES.POLY;
	};
	Polygon.prototype.clone = function clone ()
	{
	    return new Polygon(this.points.slice());
	};
	Polygon.prototype.close = function close ()
	{
	    var points = this.points;
	    if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1])
	    {
	        points.push(points[0], points[1]);
	    }
	};
	Polygon.prototype.contains = function contains (x, y)
	{
	        var this$1 = this;
	    var inside = false;
	    var length = this.points.length / 2;
	    for (var i = 0, j = length - 1; i < length; j = i++)
	    {
	        var xi = this$1.points[i * 2];
	        var yi = this$1.points[(i * 2) + 1];
	        var xj = this$1.points[j * 2];
	        var yj = this$1.points[(j * 2) + 1];
	        var intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi);
	        if (intersect)
	        {
	            inside = !inside;
	        }
	    }
	    return inside;
	};
	var RoundedRectangle = function RoundedRectangle(x, y, width, height, radius)
	{
	    if ( x === void 0 ) x = 0;
	    if ( y === void 0 ) y = 0;
	    if ( width === void 0 ) width = 0;
	    if ( height === void 0 ) height = 0;
	    if ( radius === void 0 ) radius = 20;
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.radius = radius;
	    this.type = SHAPES.RREC;
	};
	RoundedRectangle.prototype.clone = function clone ()
	{
	    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
	};
	RoundedRectangle.prototype.contains = function contains (x, y)
	{
	    if (this.width <= 0 || this.height <= 0)
	    {
	        return false;
	    }
	    if (x >= this.x && x <= this.x + this.width)
	    {
	        if (y >= this.y && y <= this.y + this.height)
	        {
	            if ((y >= this.y + this.radius && y <= this.y + this.height - this.radius)
	            || (x >= this.x + this.radius && x <= this.x + this.width - this.radius))
	            {
	                return true;
	            }
	            var dx = x - (this.x + this.radius);
	            var dy = y - (this.y + this.radius);
	            var radius2 = this.radius * this.radius;
	            if ((dx * dx) + (dy * dy) <= radius2)
	            {
	                return true;
	            }
	            dx = x - (this.x + this.width - this.radius);
	            if ((dx * dx) + (dy * dy) <= radius2)
	            {
	                return true;
	            }
	            dy = y - (this.y + this.height - this.radius);
	            if ((dx * dx) + (dy * dy) <= radius2)
	            {
	                return true;
	            }
	            dx = x - (this.x + this.radius);
	            if ((dx * dx) + (dy * dy) <= radius2)
	            {
	                return true;
	            }
	        }
	    }
	    return false;
	};
	exports.Point = Point;
	exports.ObservablePoint = ObservablePoint;
	exports.Matrix = Matrix;
	exports.GroupD8 = GroupD8;
	exports.Transform = Transform;
	exports.Circle = Circle;
	exports.Ellipse = Ellipse;
	exports.Polygon = Polygon;
	exports.Rectangle = Rectangle;
	exports.RoundedRectangle = RoundedRectangle;
	exports.PI_2 = PI_2;
	exports.RAD_TO_DEG = RAD_TO_DEG;
	exports.DEG_TO_RAD = DEG_TO_RAD;
	exports.SHAPES = SHAPES;
	});
	var math$1 = unwrapExports(math);
	var math_1 = math.Point;
	var math_2 = math.ObservablePoint;
	var math_3 = math.Matrix;
	var math_4 = math.GroupD8;
	var math_5 = math.Transform;
	var math_6 = math.Circle;
	var math_7 = math.Ellipse;
	var math_8 = math.Polygon;
	var math_9 = math.Rectangle;
	var math_10 = math.RoundedRectangle;
	var math_11 = math.PI_2;
	var math_12 = math.RAD_TO_DEG;
	var math_13 = math.DEG_TO_RAD;
	var math_14 = math.SHAPES;

	var math$2 = ({
		default: math$1,
		__moduleExports: math,
		Point: math_1,
		ObservablePoint: math_2,
		Matrix: math_3,
		GroupD8: math_4,
		Transform: math_5,
		Circle: math_6,
		Ellipse: math_7,
		Polygon: math_8,
		Rectangle: math_9,
		RoundedRectangle: math_10,
		PI_2: math_11,
		RAD_TO_DEG: math_12,
		DEG_TO_RAD: math_13,
		SHAPES: math_14
	});

	var display = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var EventEmitter = _interopDefault(eventemitter3);
	var removeItems = _interopDefault(D__workspace_opensource_creanyanEx_node_modules_removeArrayItems);
	var Bounds = function Bounds()
	{
	    this.minX = Infinity;
	    this.minY = Infinity;
	    this.maxX = -Infinity;
	    this.maxY = -Infinity;
	    this.rect = null;
	};
	Bounds.prototype.isEmpty = function isEmpty ()
	{
	    return this.minX > this.maxX || this.minY > this.maxY;
	};
	Bounds.prototype.clear = function clear ()
	{
	    this.updateID++;
	    this.minX = Infinity;
	    this.minY = Infinity;
	    this.maxX = -Infinity;
	    this.maxY = -Infinity;
	};
	Bounds.prototype.getRectangle = function getRectangle (rect)
	{
	    if (this.minX > this.maxX || this.minY > this.maxY)
	    {
	        return math.Rectangle.EMPTY;
	    }
	    rect = rect || new math.Rectangle(0, 0, 1, 1);
	    rect.x = this.minX;
	    rect.y = this.minY;
	    rect.width = this.maxX - this.minX;
	    rect.height = this.maxY - this.minY;
	    return rect;
	};
	Bounds.prototype.addPoint = function addPoint (point)
	{
	    this.minX = Math.min(this.minX, point.x);
	    this.maxX = Math.max(this.maxX, point.x);
	    this.minY = Math.min(this.minY, point.y);
	    this.maxY = Math.max(this.maxY, point.y);
	};
	Bounds.prototype.addQuad = function addQuad (vertices)
	{
	    var minX = this.minX;
	    var minY = this.minY;
	    var maxX = this.maxX;
	    var maxY = this.maxY;
	    var x = vertices[0];
	    var y = vertices[1];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = vertices[2];
	    y = vertices[3];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = vertices[4];
	    y = vertices[5];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = vertices[6];
	    y = vertices[7];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};
	Bounds.prototype.addFrame = function addFrame (transform, x0, y0, x1, y1)
	{
	    var matrix = transform.worldTransform;
	    var a = matrix.a;
	    var b = matrix.b;
	    var c = matrix.c;
	    var d = matrix.d;
	    var tx = matrix.tx;
	    var ty = matrix.ty;
	    var minX = this.minX;
	    var minY = this.minY;
	    var maxX = this.maxX;
	    var maxY = this.maxY;
	    var x = (a * x0) + (c * y0) + tx;
	    var y = (b * x0) + (d * y0) + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = (a * x1) + (c * y0) + tx;
	    y = (b * x1) + (d * y0) + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = (a * x0) + (c * y1) + tx;
	    y = (b * x0) + (d * y1) + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    x = (a * x1) + (c * y1) + tx;
	    y = (b * x1) + (d * y1) + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;
	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};
	Bounds.prototype.addVertices = function addVertices (transform, vertices, beginOffset, endOffset)
	{
	    var matrix = transform.worldTransform;
	    var a = matrix.a;
	    var b = matrix.b;
	    var c = matrix.c;
	    var d = matrix.d;
	    var tx = matrix.tx;
	    var ty = matrix.ty;
	    var minX = this.minX;
	    var minY = this.minY;
	    var maxX = this.maxX;
	    var maxY = this.maxY;
	    for (var i = beginOffset; i < endOffset; i += 2)
	    {
	        var rawX = vertices[i];
	        var rawY = vertices[i + 1];
	        var x = (a * rawX) + (c * rawY) + tx;
	        var y = (d * rawY) + (b * rawX) + ty;
	        minX = x < minX ? x : minX;
	        minY = y < minY ? y : minY;
	        maxX = x > maxX ? x : maxX;
	        maxY = y > maxY ? y : maxY;
	    }
	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};
	Bounds.prototype.addBounds = function addBounds (bounds)
	{
	    var minX = this.minX;
	    var minY = this.minY;
	    var maxX = this.maxX;
	    var maxY = this.maxY;
	    this.minX = bounds.minX < minX ? bounds.minX : minX;
	    this.minY = bounds.minY < minY ? bounds.minY : minY;
	    this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
	    this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
	};
	Bounds.prototype.addBoundsMask = function addBoundsMask (bounds, mask)
	{
	    var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
	    var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
	    var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
	    var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
	    if (_minX <= _maxX && _minY <= _maxY)
	    {
	        var minX = this.minX;
	        var minY = this.minY;
	        var maxX = this.maxX;
	        var maxY = this.maxY;
	        this.minX = _minX < minX ? _minX : minX;
	        this.minY = _minY < minY ? _minY : minY;
	        this.maxX = _maxX > maxX ? _maxX : maxX;
	        this.maxY = _maxY > maxY ? _maxY : maxY;
	    }
	};
	Bounds.prototype.addBoundsArea = function addBoundsArea (bounds, area)
	{
	    var _minX = bounds.minX > area.x ? bounds.minX : area.x;
	    var _minY = bounds.minY > area.y ? bounds.minY : area.y;
	    var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : (area.x + area.width);
	    var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : (area.y + area.height);
	    if (_minX <= _maxX && _minY <= _maxY)
	    {
	        var minX = this.minX;
	        var minY = this.minY;
	        var maxX = this.maxX;
	        var maxY = this.maxY;
	        this.minX = _minX < minX ? _minX : minX;
	        this.minY = _minY < minY ? _minY : minY;
	        this.maxX = _maxX > maxX ? _maxX : maxX;
	        this.maxY = _maxY > maxY ? _maxY : maxY;
	    }
	};
	var DisplayObject = (function (EventEmitter$$1) {
	    function DisplayObject()
	    {
	        EventEmitter$$1.call(this);
	        this.tempDisplayObjectParent = null;
	        this.transform = new math.Transform();
	        this.alpha = 1;
	        this.visible = true;
	        this.renderable = true;
	        this.parent = null;
	        this.worldAlpha = 1;
	        this.filterArea = null;
	        this.filters = null;
	        this._enabledFilters = null;
	        this._bounds = new Bounds();
	        this._boundsID = 0;
	        this._lastBoundsID = -1;
	        this._boundsRect = null;
	        this._localBoundsRect = null;
	        this._mask = null;
	        this._destroyed = false;
	    }
	    if ( EventEmitter$$1 ) DisplayObject.__proto__ = EventEmitter$$1;
	    DisplayObject.prototype = Object.create( EventEmitter$$1 && EventEmitter$$1.prototype );
	    DisplayObject.prototype.constructor = DisplayObject;
	    var prototypeAccessors = { _tempDisplayObjectParent: { configurable: true },x: { configurable: true },y: { configurable: true },worldTransform: { configurable: true },localTransform: { configurable: true },position: { configurable: true },scale: { configurable: true },pivot: { configurable: true },skew: { configurable: true },rotation: { configurable: true },worldVisible: { configurable: true },mask: { configurable: true } };
	    prototypeAccessors._tempDisplayObjectParent.get = function ()
	    {
	        if (this.tempDisplayObjectParent === null)
	        {
	            this.tempDisplayObjectParent = new DisplayObject();
	        }
	        return this.tempDisplayObjectParent;
	    };
	    DisplayObject.prototype.updateTransform = function updateTransform ()
	    {
	        this.transform.updateTransform(this.parent.transform);
	        this.worldAlpha = this.alpha * this.parent.worldAlpha;
	        this._bounds.updateID++;
	    };
	    DisplayObject.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform ()
	    {
	        if (this.parent)
	        {
	            this.parent._recursivePostUpdateTransform();
	            this.transform.updateTransform(this.parent.transform);
	        }
	        else
	        {
	            this.transform.updateTransform(this._tempDisplayObjectParent.transform);
	        }
	    };
	    DisplayObject.prototype.getBounds = function getBounds (skipUpdate, rect)
	    {
	        if (!skipUpdate)
	        {
	            if (!this.parent)
	            {
	                this.parent = this._tempDisplayObjectParent;
	                this.updateTransform();
	                this.parent = null;
	            }
	            else
	            {
	                this._recursivePostUpdateTransform();
	                this.updateTransform();
	            }
	        }
	        if (this._boundsID !== this._lastBoundsID)
	        {
	            this.calculateBounds();
	        }
	        if (!rect)
	        {
	            if (!this._boundsRect)
	            {
	                this._boundsRect = new math.Rectangle();
	            }
	            rect = this._boundsRect;
	        }
	        return this._bounds.getRectangle(rect);
	    };
	    DisplayObject.prototype.getLocalBounds = function getLocalBounds (rect)
	    {
	        var transformRef = this.transform;
	        var parentRef = this.parent;
	        this.parent = null;
	        this.transform = this._tempDisplayObjectParent.transform;
	        if (!rect)
	        {
	            if (!this._localBoundsRect)
	            {
	                this._localBoundsRect = new math.Rectangle();
	            }
	            rect = this._localBoundsRect;
	        }
	        var bounds = this.getBounds(false, rect);
	        this.parent = parentRef;
	        this.transform = transformRef;
	        return bounds;
	    };
	    DisplayObject.prototype.toGlobal = function toGlobal (position, point, skipUpdate)
	    {
	        if ( skipUpdate === void 0 ) skipUpdate = false;
	        if (!skipUpdate)
	        {
	            this._recursivePostUpdateTransform();
	            if (!this.parent)
	            {
	                this.parent = this._tempDisplayObjectParent;
	                this.displayObjectUpdateTransform();
	                this.parent = null;
	            }
	            else
	            {
	                this.displayObjectUpdateTransform();
	            }
	        }
	        return this.worldTransform.apply(position, point);
	    };
	    DisplayObject.prototype.toLocal = function toLocal (position, from, point, skipUpdate)
	    {
	        if (from)
	        {
	            position = from.toGlobal(position, point, skipUpdate);
	        }
	        if (!skipUpdate)
	        {
	            this._recursivePostUpdateTransform();
	            if (!this.parent)
	            {
	                this.parent = this._tempDisplayObjectParent;
	                this.displayObjectUpdateTransform();
	                this.parent = null;
	            }
	            else
	            {
	                this.displayObjectUpdateTransform();
	            }
	        }
	        return this.worldTransform.applyInverse(position, point);
	    };
	    DisplayObject.prototype.render = function render (renderer)
	    {
	    };
	    DisplayObject.prototype.setParent = function setParent (container)
	    {
	        if (!container || !container.addChild)
	        {
	            throw new Error('setParent: Argument must be a Container');
	        }
	        container.addChild(this);
	        return container;
	    };
	    DisplayObject.prototype.setTransform = function setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)
	    {
	        if ( x === void 0 ) x = 0;
	        if ( y === void 0 ) y = 0;
	        if ( scaleX === void 0 ) scaleX = 1;
	        if ( scaleY === void 0 ) scaleY = 1;
	        if ( rotation === void 0 ) rotation = 0;
	        if ( skewX === void 0 ) skewX = 0;
	        if ( skewY === void 0 ) skewY = 0;
	        if ( pivotX === void 0 ) pivotX = 0;
	        if ( pivotY === void 0 ) pivotY = 0;
	        this.position.x = x;
	        this.position.y = y;
	        this.scale.x = !scaleX ? 1 : scaleX;
	        this.scale.y = !scaleY ? 1 : scaleY;
	        this.rotation = rotation;
	        this.skew.x = skewX;
	        this.skew.y = skewY;
	        this.pivot.x = pivotX;
	        this.pivot.y = pivotY;
	        return this;
	    };
	    DisplayObject.prototype.destroy = function destroy ()
	    {
	        this.removeAllListeners();
	        if (this.parent)
	        {
	            this.parent.removeChild(this);
	        }
	        this.transform = null;
	        this.parent = null;
	        this._bounds = null;
	        this._currentBounds = null;
	        this._mask = null;
	        this.filterArea = null;
	        this.interactive = false;
	        this.interactiveChildren = false;
	        this._destroyed = true;
	    };
	    prototypeAccessors.x.get = function ()
	    {
	        return this.position.x;
	    };
	    prototypeAccessors.x.set = function (value)
	    {
	        this.transform.position.x = value;
	    };
	    prototypeAccessors.y.get = function ()
	    {
	        return this.position.y;
	    };
	    prototypeAccessors.y.set = function (value)
	    {
	        this.transform.position.y = value;
	    };
	    prototypeAccessors.worldTransform.get = function ()
	    {
	        return this.transform.worldTransform;
	    };
	    prototypeAccessors.localTransform.get = function ()
	    {
	        return this.transform.localTransform;
	    };
	    prototypeAccessors.position.get = function ()
	    {
	        return this.transform.position;
	    };
	    prototypeAccessors.position.set = function (value)
	    {
	        this.transform.position.copyFrom(value);
	    };
	    prototypeAccessors.scale.get = function ()
	    {
	        return this.transform.scale;
	    };
	    prototypeAccessors.scale.set = function (value)
	    {
	        this.transform.scale.copyFrom(value);
	    };
	    prototypeAccessors.pivot.get = function ()
	    {
	        return this.transform.pivot;
	    };
	    prototypeAccessors.pivot.set = function (value)
	    {
	        this.transform.pivot.copyFrom(value);
	    };
	    prototypeAccessors.skew.get = function ()
	    {
	        return this.transform.skew;
	    };
	    prototypeAccessors.skew.set = function (value)
	    {
	        this.transform.skew.copyFrom(value);
	    };
	    prototypeAccessors.rotation.get = function ()
	    {
	        return this.transform.rotation;
	    };
	    prototypeAccessors.rotation.set = function (value)
	    {
	        this.transform.rotation = value;
	    };
	    prototypeAccessors.worldVisible.get = function ()
	    {
	        var item = this;
	        do
	        {
	            if (!item.visible)
	            {
	                return false;
	            }
	            item = item.parent;
	        } while (item);
	        return true;
	    };
	    prototypeAccessors.mask.get = function ()
	    {
	        return this._mask;
	    };
	    prototypeAccessors.mask.set = function (value)
	    {
	        if (this._mask)
	        {
	            this._mask.renderable = true;
	            this._mask.isMask = false;
	        }
	        this._mask = value;
	        if (this._mask)
	        {
	            this._mask.renderable = false;
	            this._mask.isMask = true;
	        }
	    };
	    Object.defineProperties( DisplayObject.prototype, prototypeAccessors );
	    return DisplayObject;
	}(EventEmitter));
	DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
	var Container = (function (DisplayObject$$1) {
	    function Container()
	    {
	        DisplayObject$$1.call(this);
	        this.children = [];
	    }
	    if ( DisplayObject$$1 ) Container.__proto__ = DisplayObject$$1;
	    Container.prototype = Object.create( DisplayObject$$1 && DisplayObject$$1.prototype );
	    Container.prototype.constructor = Container;
	    var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };
	    Container.prototype.onChildrenChange = function onChildrenChange ()
	    {
	    };
	    Container.prototype.addChild = function addChild (child)
	    {
	        var arguments$1 = arguments;
	        var this$1 = this;
	        var argumentsLength = arguments.length;
	        if (argumentsLength > 1)
	        {
	            for (var i = 0; i < argumentsLength; i++)
	            {
	                this$1.addChild(arguments$1[i]);
	            }
	        }
	        else
	        {
	            if (child.parent)
	            {
	                child.parent.removeChild(child);
	            }
	            child.parent = this;
	            child.transform._parentID = -1;
	            this.children.push(child);
	            this._boundsID++;
	            this.onChildrenChange(this.children.length - 1);
	            child.emit('added', this);
	        }
	        return child;
	    };
	    Container.prototype.addChildAt = function addChildAt (child, index)
	    {
	        if (index < 0 || index > this.children.length)
	        {
	            throw new Error((child + "addChildAt: The index " + index + " supplied is out of bounds " + (this.children.length)));
	        }
	        if (child.parent)
	        {
	            child.parent.removeChild(child);
	        }
	        child.parent = this;
	        child.transform._parentID = -1;
	        this.children.splice(index, 0, child);
	        this._boundsID++;
	        this.onChildrenChange(index);
	        child.emit('added', this);
	        return child;
	    };
	    Container.prototype.swapChildren = function swapChildren (child, child2)
	    {
	        if (child === child2)
	        {
	            return;
	        }
	        var index1 = this.getChildIndex(child);
	        var index2 = this.getChildIndex(child2);
	        this.children[index1] = child2;
	        this.children[index2] = child;
	        this.onChildrenChange(index1 < index2 ? index1 : index2);
	    };
	    Container.prototype.getChildIndex = function getChildIndex (child)
	    {
	        var index = this.children.indexOf(child);
	        if (index === -1)
	        {
	            throw new Error('The supplied DisplayObject must be a child of the caller');
	        }
	        return index;
	    };
	    Container.prototype.setChildIndex = function setChildIndex (child, index)
	    {
	        if (index < 0 || index >= this.children.length)
	        {
	            throw new Error(("The index " + index + " supplied is out of bounds " + (this.children.length)));
	        }
	        var currentIndex = this.getChildIndex(child);
	        removeItems(this.children, currentIndex, 1);
	        this.children.splice(index, 0, child);
	        this.onChildrenChange(index);
	    };
	    Container.prototype.getChildAt = function getChildAt (index)
	    {
	        if (index < 0 || index >= this.children.length)
	        {
	            throw new Error(("getChildAt: Index (" + index + ") does not exist."));
	        }
	        return this.children[index];
	    };
	    Container.prototype.removeChild = function removeChild (child)
	    {
	        var arguments$1 = arguments;
	        var this$1 = this;
	        var argumentsLength = arguments.length;
	        if (argumentsLength > 1)
	        {
	            for (var i = 0; i < argumentsLength; i++)
	            {
	                this$1.removeChild(arguments$1[i]);
	            }
	        }
	        else
	        {
	            var index = this.children.indexOf(child);
	            if (index === -1) { return null; }
	            child.parent = null;
	            child.transform._parentID = -1;
	            removeItems(this.children, index, 1);
	            this._boundsID++;
	            this.onChildrenChange(index);
	            child.emit('removed', this);
	        }
	        return child;
	    };
	    Container.prototype.removeChildAt = function removeChildAt (index)
	    {
	        var child = this.getChildAt(index);
	        child.parent = null;
	        child.transform._parentID = -1;
	        removeItems(this.children, index, 1);
	        this._boundsID++;
	        this.onChildrenChange(index);
	        child.emit('removed', this);
	        return child;
	    };
	    Container.prototype.removeChildren = function removeChildren (beginIndex, endIndex)
	    {
	        var this$1 = this;
	        if ( beginIndex === void 0 ) beginIndex = 0;
	        var begin = beginIndex;
	        var end = typeof endIndex === 'number' ? endIndex : this.children.length;
	        var range = end - begin;
	        var removed;
	        if (range > 0 && range <= end)
	        {
	            removed = this.children.splice(begin, range);
	            for (var i = 0; i < removed.length; ++i)
	            {
	                removed[i].parent = null;
	                if (removed[i].transform)
	                {
	                    removed[i].transform._parentID = -1;
	                }
	            }
	            this._boundsID++;
	            this.onChildrenChange(beginIndex);
	            for (var i$1 = 0; i$1 < removed.length; ++i$1)
	            {
	                removed[i$1].emit('removed', this$1);
	            }
	            return removed;
	        }
	        else if (range === 0 && this.children.length === 0)
	        {
	            return [];
	        }
	        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
	    };
	    Container.prototype.updateTransform = function updateTransform ()
	    {
	        var this$1 = this;
	        this._boundsID++;
	        this.transform.updateTransform(this.parent.transform);
	        this.worldAlpha = this.alpha * this.parent.worldAlpha;
	        for (var i = 0, j = this.children.length; i < j; ++i)
	        {
	            var child = this$1.children[i];
	            if (child.visible)
	            {
	                child.updateTransform();
	            }
	        }
	    };
	    Container.prototype.calculateBounds = function calculateBounds ()
	    {
	        var this$1 = this;
	        this._bounds.clear();
	        this._calculateBounds();
	        for (var i = 0; i < this.children.length; i++)
	        {
	            var child = this$1.children[i];
	            if (!child.visible || !child.renderable)
	            {
	                continue;
	            }
	            child.calculateBounds();
	            if (child._mask)
	            {
	                child._mask.calculateBounds();
	                this$1._bounds.addBoundsMask(child._bounds, child._mask._bounds);
	            }
	            else if (child.filterArea)
	            {
	                this$1._bounds.addBoundsArea(child._bounds, child.filterArea);
	            }
	            else
	            {
	                this$1._bounds.addBounds(child._bounds);
	            }
	        }
	        this._lastBoundsID = this._boundsID;
	    };
	    Container.prototype._calculateBounds = function _calculateBounds ()
	    {
	    };
	    Container.prototype.render = function render (renderer)
	    {
	        var this$1 = this;
	        if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
	        {
	            return;
	        }
	        if (this._mask || this.filters)
	        {
	            this.renderAdvanced(renderer);
	        }
	        else
	        {
	            this._render(renderer);
	            for (var i = 0, j = this.children.length; i < j; ++i)
	            {
	                this$1.children[i].render(renderer);
	            }
	        }
	    };
	    Container.prototype.renderAdvanced = function renderAdvanced (renderer)
	    {
	        var this$1 = this;
	        renderer.batch.flush();
	        var filters = this.filters;
	        var mask = this._mask;
	        if (filters)
	        {
	            if (!this._enabledFilters)
	            {
	                this._enabledFilters = [];
	            }
	            this._enabledFilters.length = 0;
	            for (var i = 0; i < filters.length; i++)
	            {
	                if (filters[i].enabled)
	                {
	                    this$1._enabledFilters.push(filters[i]);
	                }
	            }
	            if (this._enabledFilters.length)
	            {
	                renderer.filter.push(this, this._enabledFilters);
	            }
	        }
	        if (mask)
	        {
	            renderer.mask.push(this, this._mask);
	        }
	        this._render(renderer);
	        for (var i$1 = 0, j = this.children.length; i$1 < j; i$1++)
	        {
	            this$1.children[i$1].render(renderer);
	        }
	        renderer.batch.flush();
	        if (mask)
	        {
	            renderer.mask.pop(this, this._mask);
	        }
	        if (filters && this._enabledFilters && this._enabledFilters.length)
	        {
	            renderer.filter.pop();
	        }
	    };
	    Container.prototype._render = function _render (renderer)
	    {
	    };
	    Container.prototype.destroy = function destroy (options)
	    {
	        DisplayObject$$1.prototype.destroy.call(this);
	        var destroyChildren = typeof options === 'boolean' ? options : options && options.children;
	        var oldChildren = this.removeChildren(0, this.children.length);
	        if (destroyChildren)
	        {
	            for (var i = 0; i < oldChildren.length; ++i)
	            {
	                oldChildren[i].destroy(options);
	            }
	        }
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return this.scale.x * this.getLocalBounds().width;
	    };
	    prototypeAccessors.width.set = function (value)
	    {
	        var width = this.getLocalBounds().width;
	        if (width !== 0)
	        {
	            this.scale.x = value / width;
	        }
	        else
	        {
	            this.scale.x = 1;
	        }
	        this._width = value;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return this.scale.y * this.getLocalBounds().height;
	    };
	    prototypeAccessors.height.set = function (value)
	    {
	        var height = this.getLocalBounds().height;
	        if (height !== 0)
	        {
	            this.scale.y = value / height;
	        }
	        else
	        {
	            this.scale.y = 1;
	        }
	        this._height = value;
	    };
	    Object.defineProperties( Container.prototype, prototypeAccessors );
	    return Container;
	}(DisplayObject));
	Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;
	exports.Bounds = Bounds;
	exports.DisplayObject = DisplayObject;
	exports.Container = Container;
	});
	var display$1 = unwrapExports(display);
	var display_1 = display.Bounds;
	var display_2 = display.DisplayObject;
	var display_3 = display.Container;

	var display$2 = ({
		default: display$1,
		__moduleExports: display,
		Bounds: display_1,
		DisplayObject: display_2,
		Container: display_3
	});

	var accessibility = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var Device = _interopDefault(isMobile);
	var accessibleTarget = {
	    accessible: false,
	    accessibleTitle: null,
	    accessibleHint: null,
	    tabIndex: 0,
	    _accessibleActive: false,
	    _accessibleDiv: false,
	};
	utils.mixins.delayMixin(
	    display.DisplayObject.prototype,
	    accessibleTarget
	);
	var KEY_CODE_TAB = 9;
	var DIV_TOUCH_SIZE = 100;
	var DIV_TOUCH_POS_X = 0;
	var DIV_TOUCH_POS_Y = 0;
	var DIV_TOUCH_ZINDEX = 2;
	var DIV_HOOK_SIZE = 1;
	var DIV_HOOK_POS_X = -1000;
	var DIV_HOOK_POS_Y = -1000;
	var DIV_HOOK_ZINDEX = 2;
	var AccessibilityManager = function AccessibilityManager(renderer)
	{
	    if ((Device.tablet || Device.phone) && !navigator.isCocoonJS)
	    {
	        this.createTouchHook();
	    }
	    var div = document.createElement('div');
	    div.style.width = DIV_TOUCH_SIZE + "px";
	    div.style.height = DIV_TOUCH_SIZE + "px";
	    div.style.position = 'absolute';
	    div.style.top = DIV_TOUCH_POS_X + "px";
	    div.style.left = DIV_TOUCH_POS_Y + "px";
	    div.style.zIndex = DIV_TOUCH_ZINDEX;
	    this.div = div;
	    this.pool = [];
	    this.renderId = 0;
	    this.debug = false;
	    this.renderer = renderer;
	    this.children = [];
	    this._onKeyDown = this._onKeyDown.bind(this);
	    this._onMouseMove = this._onMouseMove.bind(this);
	    this.isActive = false;
	    this.isMobileAccessibility = false;
	    window.addEventListener('keydown', this._onKeyDown, false);
	};
	AccessibilityManager.prototype.createTouchHook = function createTouchHook ()
	{
	        var this$1 = this;
	    var hookDiv = document.createElement('button');
	    hookDiv.style.width = DIV_HOOK_SIZE + "px";
	    hookDiv.style.height = DIV_HOOK_SIZE + "px";
	    hookDiv.style.position = 'absolute';
	    hookDiv.style.top = DIV_HOOK_POS_X + "px";
	    hookDiv.style.left = DIV_HOOK_POS_Y + "px";
	    hookDiv.style.zIndex = DIV_HOOK_ZINDEX;
	    hookDiv.style.backgroundColor = '#FF0000';
	    hookDiv.title = 'HOOK DIV';
	    hookDiv.addEventListener('focus', function () {
	        this$1.isMobileAccessibility = true;
	        this$1.activate();
	        document.body.removeChild(hookDiv);
	    });
	    document.body.appendChild(hookDiv);
	};
	AccessibilityManager.prototype.activate = function activate ()
	{
	    if (this.isActive)
	    {
	        return;
	    }
	    this.isActive = true;
	    window.document.addEventListener('mousemove', this._onMouseMove, true);
	    window.removeEventListener('keydown', this._onKeyDown, false);
	    this.renderer.on('postrender', this.update, this);
	    if (this.renderer.view.parentNode)
	    {
	        this.renderer.view.parentNode.appendChild(this.div);
	    }
	};
	AccessibilityManager.prototype.deactivate = function deactivate ()
	{
	    if (!this.isActive || this.isMobileAccessibility)
	    {
	        return;
	    }
	    this.isActive = false;
	    window.document.removeEventListener('mousemove', this._onMouseMove);
	    window.addEventListener('keydown', this._onKeyDown, false);
	    this.renderer.off('postrender', this.update);
	    if (this.div.parentNode)
	    {
	        this.div.parentNode.removeChild(this.div);
	    }
	};
	AccessibilityManager.prototype.updateAccessibleObjects = function updateAccessibleObjects (displayObject)
	{
	        var this$1 = this;
	    if (!displayObject.visible)
	    {
	        return;
	    }
	    if (displayObject.accessible && displayObject.interactive)
	    {
	        if (!displayObject._accessibleActive)
	        {
	            this.addChild(displayObject);
	        }
	        displayObject.renderId = this.renderId;
	    }
	    var children = displayObject.children;
	    for (var i = 0; i < children.length; i++)
	    {
	        this$1.updateAccessibleObjects(children[i]);
	    }
	};
	AccessibilityManager.prototype.update = function update ()
	{
	        var this$1 = this;
	    if (!this.renderer.renderingToScreen)
	    {
	        return;
	    }
	    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
	    var rect = this.renderer.view.getBoundingClientRect();
	    var sx = rect.width / this.renderer.width;
	    var sy = rect.height / this.renderer.height;
	    var div = this.div;
	    div.style.left = (rect.left) + "px";
	    div.style.top = (rect.top) + "px";
	    div.style.width = (this.renderer.width) + "px";
	    div.style.height = (this.renderer.height) + "px";
	    for (var i = 0; i < this.children.length; i++)
	    {
	        var child = this$1.children[i];
	        if (child.renderId !== this$1.renderId)
	        {
	            child._accessibleActive = false;
	            utils.removeItems(this$1.children, i, 1);
	            this$1.div.removeChild(child._accessibleDiv);
	            this$1.pool.push(child._accessibleDiv);
	            child._accessibleDiv = null;
	            i--;
	            if (this$1.children.length === 0)
	            {
	                this$1.deactivate();
	            }
	        }
	        else
	        {
	            div = child._accessibleDiv;
	            var hitArea = child.hitArea;
	            var wt = child.worldTransform;
	            if (child.hitArea)
	            {
	                div.style.left = ((wt.tx + (hitArea.x * wt.a)) * sx) + "px";
	                div.style.top = ((wt.ty + (hitArea.y * wt.d)) * sy) + "px";
	                div.style.width = (hitArea.width * wt.a * sx) + "px";
	                div.style.height = (hitArea.height * wt.d * sy) + "px";
	            }
	            else
	            {
	                hitArea = child.getBounds();
	                this$1.capHitArea(hitArea);
	                div.style.left = (hitArea.x * sx) + "px";
	                div.style.top = (hitArea.y * sy) + "px";
	                div.style.width = (hitArea.width * sx) + "px";
	                div.style.height = (hitArea.height * sy) + "px";
	                if (div.title !== child.accessibleTitle && child.accessibleTitle !== null)
	                {
	                    div.title = child.accessibleTitle;
	                }
	                if (div.getAttribute('aria-label') !== child.accessibleHint
	                    && child.accessibleHint !== null)
	                {
	                    div.setAttribute('aria-label', child.accessibleHint);
	                }
	            }
	        }
	    }
	    this.renderId++;
	};
	AccessibilityManager.prototype.capHitArea = function capHitArea (hitArea)
	{
	    if (hitArea.x < 0)
	    {
	        hitArea.width += hitArea.x;
	        hitArea.x = 0;
	    }
	    if (hitArea.y < 0)
	    {
	        hitArea.height += hitArea.y;
	        hitArea.y = 0;
	    }
	    if (hitArea.x + hitArea.width > this.renderer.width)
	    {
	        hitArea.width = this.renderer.width - hitArea.x;
	    }
	    if (hitArea.y + hitArea.height > this.renderer.height)
	    {
	        hitArea.height = this.renderer.height - hitArea.y;
	    }
	};
	AccessibilityManager.prototype.addChild = function addChild (displayObject)
	{
	    var div = this.pool.pop();
	    if (!div)
	    {
	        div = document.createElement('button');
	        div.style.width = DIV_TOUCH_SIZE + "px";
	        div.style.height = DIV_TOUCH_SIZE + "px";
	        div.style.backgroundColor = this.debug ? 'rgba(255,0,0,0.5)' : 'transparent';
	        div.style.position = 'absolute';
	        div.style.zIndex = DIV_TOUCH_ZINDEX;
	        div.style.borderStyle = 'none';
	        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
	        {
	            div.setAttribute('aria-live', 'off');
	        }
	        else
	        {
	            div.setAttribute('aria-live', 'polite');
	        }
	        if (navigator.userAgent.match(/rv:.*Gecko\//))
	        {
	            div.setAttribute('aria-relevant', 'additions');
	        }
	        else
	        {
	            div.setAttribute('aria-relevant', 'text');
	        }
	        div.addEventListener('click', this._onClick.bind(this));
	        div.addEventListener('focus', this._onFocus.bind(this));
	        div.addEventListener('focusout', this._onFocusOut.bind(this));
	    }
	    if (displayObject.accessibleTitle && displayObject.accessibleTitle !== null)
	    {
	        div.title = displayObject.accessibleTitle;
	    }
	    else if (!displayObject.accessibleHint
	             || displayObject.accessibleHint === null)
	    {
	        div.title = "displayObject " + (displayObject.tabIndex);
	    }
	    if (displayObject.accessibleHint
	        && displayObject.accessibleHint !== null)
	    {
	        div.setAttribute('aria-label', displayObject.accessibleHint);
	    }
	    displayObject._accessibleActive = true;
	    displayObject._accessibleDiv = div;
	    div.displayObject = displayObject;
	    this.children.push(displayObject);
	    this.div.appendChild(displayObject._accessibleDiv);
	    displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
	};
	AccessibilityManager.prototype._onClick = function _onClick (e)
	{
	    var interactionManager = this.renderer.plugins.interaction;
	    interactionManager.dispatchEvent(e.target.displayObject, 'click', interactionManager.eventData);
	};
	AccessibilityManager.prototype._onFocus = function _onFocus (e)
	{
	    if (!e.target.getAttribute('aria-live', 'off'))
	    {
	        e.target.setAttribute('aria-live', 'assertive');
	    }
	    var interactionManager = this.renderer.plugins.interaction;
	    interactionManager.dispatchEvent(e.target.displayObject, 'mouseover', interactionManager.eventData);
	};
	AccessibilityManager.prototype._onFocusOut = function _onFocusOut (e)
	{
	    if (!e.target.getAttribute('aria-live', 'off'))
	    {
	        e.target.setAttribute('aria-live', 'polite');
	    }
	    var interactionManager = this.renderer.plugins.interaction;
	    interactionManager.dispatchEvent(e.target.displayObject, 'mouseout', interactionManager.eventData);
	};
	AccessibilityManager.prototype._onKeyDown = function _onKeyDown (e)
	{
	    if (e.keyCode !== KEY_CODE_TAB)
	    {
	        return;
	    }
	    this.activate();
	};
	AccessibilityManager.prototype._onMouseMove = function _onMouseMove (e)
	{
	    if (e.movementX === 0 && e.movementY === 0)
	    {
	        return;
	    }
	    this.deactivate();
	};
	AccessibilityManager.prototype.destroy = function destroy ()
	{
	        var this$1 = this;
	    this.div = null;
	    for (var i = 0; i < this.children.length; i++)
	    {
	        this$1.children[i].div = null;
	    }
	    window.document.removeEventListener('mousemove', this._onMouseMove);
	    window.removeEventListener('keydown', this._onKeyDown);
	    this.pool = null;
	    this.children = null;
	    this.renderer = null;
	};
	exports.accessibleTarget = accessibleTarget;
	exports.AccessibilityManager = AccessibilityManager;
	});
	var accessibility$1 = unwrapExports(accessibility);
	var accessibility_1 = accessibility.accessibleTarget;
	var accessibility_2 = accessibility.AccessibilityManager;

	var accessibility$2 = ({
		default: accessibility$1,
		__moduleExports: accessibility,
		accessibleTarget: accessibility_1,
		AccessibilityManager: accessibility_2
	});

	var MiniRunner=function(name,argsLength){this.items=[];this._name=name;this.dispatch=this.emit=this.run=MiniRunner.generateRun(name,argsLength||0);};var p=MiniRunner.prototype;p.add=function(item){if(!item[this._name])return;this.remove(item);this.items.push(item);};p.remove=function(item){var index=this.items.indexOf(item);if(index!==-1){this.items.splice(index,1);}};p.contains=function(item){return this.items.indexOf(item)!==-1};p.removeAll=function(){this.items.length=0;};Object.defineProperty(p,"empty",{get:function(){return this.items.length===0}});MiniRunner.generateRun=function(name,argsLength){var key=name+"|"+argsLength;var func=MiniRunner.hash[key];if(!func){if(argsLength>0){var args="arg0";for(var i=1;i<argsLength;i++){args+=",arg"+i;}func=new Function(args,"var items = this.items; for(var i=0;i<items.length;i++){ items[i]."+name+"("+args+"); }");}else{func=new Function("var items = this.items; for(var i=0;i<items.length;i++){ items[i]."+name+"(); }");}MiniRunner.hash[key]=func;}return func};MiniRunner.hash={};var miniRunner_min=MiniRunner;

	var ticker = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	settings_1.settings.TARGET_FPMS = 0.06;
	var UPDATE_PRIORITY = {
	    INTERACTION: 50,
	    HIGH: 25,
	    NORMAL: 0,
	    LOW: -25,
	    UTILITY: -50,
	};
	var TickerListener = function TickerListener(fn, context, priority, once)
	{
	    if ( context === void 0 ) context = null;
	    if ( priority === void 0 ) priority = 0;
	    if ( once === void 0 ) once = false;
	    this.fn = fn;
	    this.context = context;
	    this.priority = priority;
	    this.once = once;
	    this.next = null;
	    this.previous = null;
	    this._destroyed = false;
	};
	TickerListener.prototype.match = function match (fn, context)
	{
	    context = context || null;
	    return this.fn === fn && this.context === context;
	};
	TickerListener.prototype.emit = function emit (deltaTime)
	{
	    if (this.fn)
	    {
	        if (this.context)
	        {
	            this.fn.call(this.context, deltaTime);
	        }
	        else
	        {
	            this.fn(deltaTime);
	        }
	    }
	    var redirect = this.next;
	    if (this.once)
	    {
	        this.destroy(true);
	    }
	    if (this._destroyed)
	    {
	        this.next = null;
	    }
	    return redirect;
	};
	TickerListener.prototype.connect = function connect (previous)
	{
	    this.previous = previous;
	    if (previous.next)
	    {
	        previous.next.previous = this;
	    }
	    this.next = previous.next;
	    previous.next = this;
	};
	TickerListener.prototype.destroy = function destroy (hard)
	{
	        if ( hard === void 0 ) hard = false;
	    this._destroyed = true;
	    this.fn = null;
	    this.context = null;
	    if (this.previous)
	    {
	        this.previous.next = this.next;
	    }
	    if (this.next)
	    {
	        this.next.previous = this.previous;
	    }
	    var redirect = this.next;
	    this.next = hard ? null : redirect;
	    this.previous = null;
	    return redirect;
	};
	var Ticker = function Ticker()
	{
	    var this$1 = this;
	    this._head = new TickerListener(null, null, Infinity);
	    this._requestId = null;
	    this._maxElapsedMS = 100;
	    this.autoStart = false;
	    this.deltaTime = 1;
	    this.elapsedMS = 1 / settings_1.settings.TARGET_FPMS;
	    this.lastTime = -1;
	    this.speed = 1;
	    this.started = false;
	    this._protected = false;
	    this._tick = function (time) {
	        this$1._requestId = null;
	        if (this$1.started)
	        {
	            this$1.update(time);
	            if (this$1.started && this$1._requestId === null && this$1._head.next)
	            {
	                this$1._requestId = requestAnimationFrame(this$1._tick);
	            }
	        }
	    };
	};
	var prototypeAccessors = { FPS: { configurable: true },minFPS: { configurable: true } };
	var staticAccessors = { shared: { configurable: true } };
	Ticker.prototype._requestIfNeeded = function _requestIfNeeded ()
	{
	    if (this._requestId === null && this._head.next)
	    {
	        this.lastTime = performance.now();
	        this._requestId = requestAnimationFrame(this._tick);
	    }
	};
	Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded ()
	{
	    if (this._requestId !== null)
	    {
	        cancelAnimationFrame(this._requestId);
	        this._requestId = null;
	    }
	};
	Ticker.prototype._startIfPossible = function _startIfPossible ()
	{
	    if (this.started)
	    {
	        this._requestIfNeeded();
	    }
	    else if (this.autoStart)
	    {
	        this.start();
	    }
	};
	Ticker.prototype.add = function add (fn, context, priority)
	{
	        if ( priority === void 0 ) priority = UPDATE_PRIORITY.NORMAL;
	    return this._addListener(new TickerListener(fn, context, priority));
	};
	Ticker.prototype.addOnce = function addOnce (fn, context, priority)
	{
	        if ( priority === void 0 ) priority = UPDATE_PRIORITY.NORMAL;
	    return this._addListener(new TickerListener(fn, context, priority, true));
	};
	Ticker.prototype._addListener = function _addListener (listener)
	{
	    var current = this._head.next;
	    var previous = this._head;
	    if (!current)
	    {
	        listener.connect(previous);
	    }
	    else
	    {
	        while (current)
	        {
	            if (listener.priority > current.priority)
	            {
	                listener.connect(previous);
	                break;
	            }
	            previous = current;
	            current = current.next;
	        }
	        if (!listener.previous)
	        {
	            listener.connect(previous);
	        }
	    }
	    this._startIfPossible();
	    return this;
	};
	Ticker.prototype.remove = function remove (fn, context)
	{
	    var listener = this._head.next;
	    while (listener)
	    {
	        if (listener.match(fn, context))
	        {
	            listener = listener.destroy();
	        }
	        else
	        {
	            listener = listener.next;
	        }
	    }
	    if (!this._head.next)
	    {
	        this._cancelIfNeeded();
	    }
	    return this;
	};
	Ticker.prototype.start = function start ()
	{
	    if (!this.started)
	    {
	        this.started = true;
	        this._requestIfNeeded();
	    }
	};
	Ticker.prototype.stop = function stop ()
	{
	    if (this.started)
	    {
	        this.started = false;
	        this._cancelIfNeeded();
	    }
	};
	Ticker.prototype.destroy = function destroy ()
	{
	    if (!this._protected)
	    {
	        this.stop();
	        var listener = this._head.next;
	        while (listener)
	        {
	            listener = listener.destroy(true);
	        }
	        this._head.destroy();
	        this._head = null;
	    }
	};
	Ticker.prototype.update = function update (currentTime)
	{
	        var this$1 = this;
	        if ( currentTime === void 0 ) currentTime = performance.now();
	    var elapsedMS;
	    if (currentTime > this.lastTime)
	    {
	        elapsedMS = this.elapsedMS = currentTime - this.lastTime;
	        if (elapsedMS > this._maxElapsedMS)
	        {
	            elapsedMS = this._maxElapsedMS;
	        }
	        this.deltaTime = elapsedMS * settings_1.settings.TARGET_FPMS * this.speed;
	        var head = this._head;
	        var listener = head.next;
	        while (listener)
	        {
	            listener = listener.emit(this$1.deltaTime);
	        }
	        if (!head.next)
	        {
	            this._cancelIfNeeded();
	        }
	    }
	    else
	    {
	        this.deltaTime = this.elapsedMS = 0;
	    }
	    this.lastTime = currentTime;
	};
	prototypeAccessors.FPS.get = function ()
	{
	    return 1000 / this.elapsedMS;
	};
	prototypeAccessors.minFPS.get = function ()
	{
	    return 1000 / this._maxElapsedMS;
	};
	prototypeAccessors.minFPS.set = function (fps)
	{
	    var minFPMS = Math.min(Math.max(0, fps) / 1000, settings_1.settings.TARGET_FPMS);
	    this._maxElapsedMS = 1 / minFPMS;
	};
	staticAccessors.shared.get = function ()
	{
	    if (!Ticker._shared)
	    {
	        var shared = Ticker._shared = new Ticker();
	        shared.autoStart = true;
	        shared._protected = true;
	    }
	    return Ticker._shared;
	};
	Object.defineProperties( Ticker.prototype, prototypeAccessors );
	Object.defineProperties( Ticker, staticAccessors );
	var TickerPlugin = function TickerPlugin () {};
	TickerPlugin.init = function init (options)
	{
	        var this$1 = this;
	    options = Object.assign({
	        autoStart: true,
	        sharedTicker: false,
	    }, options);
	    Object.defineProperty(this, 'ticker',
	        {
	            set: function set(ticker)
	            {
	                if (this._ticker)
	                {
	                    this._ticker.remove(this.render, this);
	                }
	                this._ticker = ticker;
	                if (ticker)
	                {
	                    ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
	                }
	            },
	            get: function get()
	            {
	                return this._ticker;
	            },
	        });
	    this.stop = function () {
	        this$1._ticker.stop();
	    };
	    this.start = function () {
	        this$1._ticker.start();
	    };
	    this._ticker = null;
	    this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
	    if (options.autoStart)
	    {
	        this.start();
	    }
	};
	TickerPlugin.destroy = function destroy ()
	{
	    if (this._ticker)
	    {
	        var oldTicker = this._ticker;
	        this.ticker = null;
	        oldTicker.destroy();
	    }
	};
	exports.Ticker = Ticker;
	exports.TickerPlugin = TickerPlugin;
	exports.UPDATE_PRIORITY = UPDATE_PRIORITY;
	});
	var ticker$1 = unwrapExports(ticker);
	var ticker_1 = ticker.Ticker;
	var ticker_2 = ticker.TickerPlugin;
	var ticker_3 = ticker.UPDATE_PRIORITY;

	var ticker$2 = ({
		default: ticker$1,
		__moduleExports: ticker,
		Ticker: ticker_1,
		TickerPlugin: ticker_2,
		UPDATE_PRIORITY: ticker_3
	});

	var INT_BITS = 32;
	var INT_BITS_1  = INT_BITS;
	var INT_MAX   =  0x7fffffff;
	var INT_MIN   = -1<<(INT_BITS-1);
	var sign = function(v) {
	  return (v > 0) - (v < 0);
	};
	var abs = function(v) {
	  var mask = v >> (INT_BITS-1);
	  return (v ^ mask) - mask;
	};
	var min = function(x, y) {
	  return y ^ ((x ^ y) & -(x < y));
	};
	var max = function(x, y) {
	  return x ^ ((x ^ y) & -(x < y));
	};
	var isPow2 = function(v) {
	  return !(v & (v-1)) && (!!v);
	};
	var log2 = function(v) {
	  var r, shift;
	  r =     (v > 0xFFFF) << 4; v >>>= r;
	  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
	  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
	  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
	  return r | (v >> 1);
	};
	var log10 = function(v) {
	  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
	          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
	          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
	};
	var popCount = function(v) {
	  v = v - ((v >>> 1) & 0x55555555);
	  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
	  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
	};
	function countTrailingZeros(v) {
	  var c = 32;
	  v &= -v;
	  if (v) c--;
	  if (v & 0x0000FFFF) c -= 16;
	  if (v & 0x00FF00FF) c -= 8;
	  if (v & 0x0F0F0F0F) c -= 4;
	  if (v & 0x33333333) c -= 2;
	  if (v & 0x55555555) c -= 1;
	  return c;
	}
	var countTrailingZeros_1 = countTrailingZeros;
	var nextPow2 = function(v) {
	  v += v === 0;
	  --v;
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v + 1;
	};
	var prevPow2 = function(v) {
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v - (v>>>1);
	};
	var parity = function(v) {
	  v ^= v >>> 16;
	  v ^= v >>> 8;
	  v ^= v >>> 4;
	  v &= 0xf;
	  return (0x6996 >>> v) & 1;
	};
	var REVERSE_TABLE = new Array(256);
	(function(tab) {
	  for(var i=0; i<256; ++i) {
	    var v = i, r = i, s = 7;
	    for (v >>>= 1; v; v >>>= 1) {
	      r <<= 1;
	      r |= v & 1;
	      --s;
	    }
	    tab[i] = (r << s) & 0xff;
	  }
	})(REVERSE_TABLE);
	var reverse = function(v) {
	  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
	          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
	          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
	           REVERSE_TABLE[(v >>> 24) & 0xff];
	};
	var interleave2 = function(x, y) {
	  x &= 0xFFFF;
	  x = (x | (x << 8)) & 0x00FF00FF;
	  x = (x | (x << 4)) & 0x0F0F0F0F;
	  x = (x | (x << 2)) & 0x33333333;
	  x = (x | (x << 1)) & 0x55555555;
	  y &= 0xFFFF;
	  y = (y | (y << 8)) & 0x00FF00FF;
	  y = (y | (y << 4)) & 0x0F0F0F0F;
	  y = (y | (y << 2)) & 0x33333333;
	  y = (y | (y << 1)) & 0x55555555;
	  return x | (y << 1);
	};
	var deinterleave2 = function(v, n) {
	  v = (v >>> n) & 0x55555555;
	  v = (v | (v >>> 1))  & 0x33333333;
	  v = (v | (v >>> 2))  & 0x0F0F0F0F;
	  v = (v | (v >>> 4))  & 0x00FF00FF;
	  v = (v | (v >>> 16)) & 0x000FFFF;
	  return (v << 16) >> 16;
	};
	var interleave3 = function(x, y, z) {
	  x &= 0x3FF;
	  x  = (x | (x<<16)) & 4278190335;
	  x  = (x | (x<<8))  & 251719695;
	  x  = (x | (x<<4))  & 3272356035;
	  x  = (x | (x<<2))  & 1227133513;
	  y &= 0x3FF;
	  y  = (y | (y<<16)) & 4278190335;
	  y  = (y | (y<<8))  & 251719695;
	  y  = (y | (y<<4))  & 3272356035;
	  y  = (y | (y<<2))  & 1227133513;
	  x |= (y << 1);
	  z &= 0x3FF;
	  z  = (z | (z<<16)) & 4278190335;
	  z  = (z | (z<<8))  & 251719695;
	  z  = (z | (z<<4))  & 3272356035;
	  z  = (z | (z<<2))  & 1227133513;
	  return x | (z << 2);
	};
	var deinterleave3 = function(v, n) {
	  v = (v >>> n)       & 1227133513;
	  v = (v | (v>>>2))   & 3272356035;
	  v = (v | (v>>>4))   & 251719695;
	  v = (v | (v>>>8))   & 4278190335;
	  v = (v | (v>>>16))  & 0x3FF;
	  return (v<<22)>>22;
	};
	var nextCombination = function(v) {
	  var t = v | (v - 1);
	  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
	};
	var twiddle = {
		INT_BITS: INT_BITS_1,
		INT_MAX: INT_MAX,
		INT_MIN: INT_MIN,
		sign: sign,
		abs: abs,
		min: min,
		max: max,
		isPow2: isPow2,
		log2: log2,
		log10: log10,
		popCount: popCount,
		countTrailingZeros: countTrailingZeros_1,
		nextPow2: nextPow2,
		prevPow2: prevPow2,
		parity: parity,
		reverse: reverse,
		interleave2: interleave2,
		deinterleave2: deinterleave2,
		interleave3: interleave3,
		deinterleave3: deinterleave3,
		nextCombination: nextCombination
	};

	var core = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var Runner = _interopDefault(miniRunner_min);
	var EventEmitter = _interopDefault(eventemitter3);
	var bitTwiddle = _interopDefault(twiddle);
	var Resource = function Resource(width, height)
	{
	    if ( width === void 0 ) width = 0;
	    if ( height === void 0 ) height = 0;
	    this._width = width;
	    this._height = height;
	    this.destroyed = false;
	    this.internal = false;
	    this.onResize = new Runner('setRealSize', 2);
	    this.onUpdate = new Runner('update');
	};
	var prototypeAccessors = { valid: { configurable: true },width: { configurable: true },height: { configurable: true } };
	Resource.prototype.bind = function bind (baseTexture)
	{
	    this.onResize.add(baseTexture);
	    this.onUpdate.add(baseTexture);
	    if (this._width || this._height)
	    {
	        this.onResize.run(this._width, this._height);
	    }
	};
	Resource.prototype.unbind = function unbind (baseTexture)
	{
	    this.onResize.remove(baseTexture);
	    this.onUpdate.remove(baseTexture);
	};
	Resource.prototype.resize = function resize (width, height)
	{
	    if (width !== this._width || height !== this._height)
	    {
	        this._width = width;
	        this._height = height;
	        this.onResize.run(width, height);
	    }
	};
	prototypeAccessors.valid.get = function ()
	{
	    return !!this._width && !!this._height;
	};
	Resource.prototype.update = function update ()
	{
	    if (!this.destroyed)
	    {
	        this.onUpdate.run();
	    }
	};
	Resource.prototype.load = function load ()
	{
	    return Promise.resolve();
	};
	prototypeAccessors.width.get = function ()
	{
	    return this._width;
	};
	prototypeAccessors.height.get = function ()
	{
	    return this._height;
	};
	Resource.prototype.upload = function upload (renderer, baseTexture, glTexture)
	{
	    return false;
	};
	Resource.prototype.style = function style (renderer, baseTexture, glTexture)
	{
	    return false;
	};
	Resource.prototype.dispose = function dispose ()
	{
	};
	Resource.prototype.destroy = function destroy ()
	{
	    if (!this.destroyed)
	    {
	        this.onResize.removeAll();
	        this.onResize = null;
	        this.onUpdate.removeAll();
	        this.onUpdate = null;
	        this.destroyed = true;
	        this.dispose();
	    }
	};
	Object.defineProperties( Resource.prototype, prototypeAccessors );
	var BaseImageResource = (function (Resource$$1) {
	    function BaseImageResource(source)
	    {
	        Resource$$1.call(this, source.width, source.height);
	        this.source = source;
	    }
	    if ( Resource$$1 ) BaseImageResource.__proto__ = Resource$$1;
	    BaseImageResource.prototype = Object.create( Resource$$1 && Resource$$1.prototype );
	    BaseImageResource.prototype.constructor = BaseImageResource;
	    BaseImageResource.crossOrigin = function crossOrigin (element, url, crossorigin)
	    {
	        if (crossorigin === undefined && url.indexOf('data:') !== 0)
	        {
	            element.crossOrigin = utils.determineCrossOrigin(url);
	        }
	        else if (crossorigin !== false)
	        {
	            element.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
	        }
	    };
	    BaseImageResource.prototype.upload = function upload (renderer, baseTexture, glTexture, source)
	    {
	        var gl = renderer.gl;
	        var width = baseTexture.realWidth;
	        var height = baseTexture.realHeight;
	        source = source || this.source;
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.premultiplyAlpha);
	        if (glTexture.width === width && glTexture.height === height)
	        {
	            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, baseTexture.type, source);
	        }
	        else
	        {
	            glTexture.width = width;
	            glTexture.height = height;
	            gl.texImage2D(gl.TEXTURE_2D, 0, baseTexture.format, baseTexture.format, baseTexture.type, source);
	        }
	        return true;
	    };
	    BaseImageResource.prototype.dispose = function dispose ()
	    {
	        this.source = null;
	    };
	    return BaseImageResource;
	}(Resource));
	var ImageResource = (function (BaseImageResource$$1) {
	    function ImageResource(source, options)
	    {
	        options = options || {};
	        if (!(source instanceof HTMLImageElement))
	        {
	            var imageElement = new Image();
	            BaseImageResource$$1.crossOrigin(imageElement, source, options.crossorigin);
	            imageElement.src = source;
	            source = imageElement;
	        }
	        BaseImageResource$$1.call(this, source);
	        this.url = source.src;
	        this._process = null;
	        this.preserveBitmap = false;
	        this.createBitmap = options.createBitmap !== false && settings_1.settings.CREATE_IMAGE_BITMAP && !!window.createImageBitmap;
	        this.premultiplyAlpha = options.premultiplyAlpha !== false;
	        this.bitmap = null;
	        this._load = null;
	        if (options.autoLoad !== false)
	        {
	            this.load();
	        }
	    }
	    if ( BaseImageResource$$1 ) ImageResource.__proto__ = BaseImageResource$$1;
	    ImageResource.prototype = Object.create( BaseImageResource$$1 && BaseImageResource$$1.prototype );
	    ImageResource.prototype.constructor = ImageResource;
	    ImageResource.prototype.load = function load (createBitmap)
	    {
	        var this$1 = this;
	        if (createBitmap !== undefined)
	        {
	            this.createBitmap = createBitmap;
	        }
	        if (this._load)
	        {
	            return this._load;
	        }
	        this._load = new Promise(function (resolve) {
	            this$1.url = this$1.source.src;
	            var ref = this$1;
	            var source = ref.source;
	            var completed = function () {
	                if (this$1.destroyed)
	                {
	                    return;
	                }
	                source.onload = null;
	                source.onerror = null;
	                this$1.resize(source.width, source.height);
	                this$1._load = null;
	                if (this$1.createBitmap)
	                {
	                    resolve(this$1.process());
	                }
	                else
	                {
	                    resolve(this$1);
	                }
	            };
	            if (source.complete && source.src)
	            {
	                completed();
	            }
	            else
	            {
	                source.onload = completed;
	            }
	        });
	        return this._load;
	    };
	    ImageResource.prototype.process = function process ()
	    {
	        var this$1 = this;
	        if (this._process !== null)
	        {
	            return this._process;
	        }
	        if (this.bitmap !== null || !window.createImageBitmap)
	        {
	            return Promise.resolve(this);
	        }
	        this._process = window.createImageBitmap(this.source,
	            0, 0, this.source.width, this.source.height,
	            {
	                premultiplyAlpha: this.premultiplyAlpha ? 'premultiply' : 'none',
	            })
	            .then(function (bitmap) {
	                if (this$1.destroyed)
	                {
	                    return Promise.reject();
	                }
	                this$1.bitmap = bitmap;
	                this$1.update();
	                this$1._process = null;
	                return Promise.resolve(this$1);
	            });
	        return this._process;
	    };
	    ImageResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
	    {
	        baseTexture.premultiplyAlpha = this.premultiplyAlpha;
	        if (this.createBitmap)
	        {
	            if (!this.bitmap)
	            {
	                this.process();
	                if (!this.bitmap)
	                {
	                    return false;
	                }
	            }
	            BaseImageResource$$1.prototype.upload.call(this, renderer, baseTexture, glTexture, this.bitmap);
	            if (!this.preserveBitmap)
	            {
	                if (this.bitmap.close)
	                {
	                    this.bitmap.close();
	                }
	                this.bitmap = null;
	            }
	        }
	        else
	        {
	            BaseImageResource$$1.prototype.upload.call(this, renderer, baseTexture, glTexture);
	        }
	        return true;
	    };
	    ImageResource.prototype.dispose = function dispose ()
	    {
	        BaseImageResource$$1.prototype.dispose.call(this);
	        if (this.bitmap)
	        {
	            this.bitmap.close();
	            this.bitmap = null;
	        }
	        this._process = null;
	        this._load = null;
	    };
	    return ImageResource;
	}(BaseImageResource));
	var CanvasResource = (function (BaseImageResource$$1) {
	    function CanvasResource () {
	        BaseImageResource$$1.apply(this, arguments);
	    }
	    if ( BaseImageResource$$1 ) CanvasResource.__proto__ = BaseImageResource$$1;
	    CanvasResource.prototype = Object.create( BaseImageResource$$1 && BaseImageResource$$1.prototype );
	    CanvasResource.prototype.constructor = CanvasResource;
	    CanvasResource.test = function test (source)
	    {
	        return (source instanceof HTMLCanvasElement);
	    };
	    return CanvasResource;
	}(BaseImageResource));
	var VideoResource = (function (BaseImageResource$$1) {
	    function VideoResource(source, options)
	    {
	        options = options || {};
	        if (!(source instanceof HTMLVideoElement))
	        {
	            var videoElement = document.createElement('video');
	            videoElement.setAttribute('webkit-playsinline', '');
	            videoElement.setAttribute('playsinline', '');
	            if (typeof source === 'string')
	            {
	                source = [source];
	            }
	            BaseImageResource$$1.crossOrigin(videoElement, (source[0].src || source[0]), options.crossorigin);
	            for (var i = 0; i < source.length; ++i)
	            {
	                var sourceElement = document.createElement('source');
	                var ref = source[i];
	                var src = ref.src;
	                var mime = ref.mime;
	                src = src || source[i];
	                mime = mime || ("video/" + (src.substr(src.lastIndexOf('.') + 1)));
	                sourceElement.src = src;
	                sourceElement.type = mime;
	                videoElement.appendChild(sourceElement);
	            }
	            source = videoElement;
	        }
	        BaseImageResource$$1.call(this, source);
	        this._autoUpdate = true;
	        this._isAutoUpdating = false;
	        this.autoPlay = options.autoPlay !== false;
	        this._load = null;
	        this._resolve = null;
	        this._onCanPlay = this._onCanPlay.bind(this);
	        if (options.autoLoad !== false)
	        {
	            this.load();
	        }
	    }
	    if ( BaseImageResource$$1 ) VideoResource.__proto__ = BaseImageResource$$1;
	    VideoResource.prototype = Object.create( BaseImageResource$$1 && BaseImageResource$$1.prototype );
	    VideoResource.prototype.constructor = VideoResource;
	    var prototypeAccessors = { autoUpdate: { configurable: true } };
	    VideoResource.prototype.load = function load ()
	    {
	        var this$1 = this;
	        if (this._load)
	        {
	            return this._load;
	        }
	        var source = this.source;
	        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA)
	            && source.width && source.height)
	        {
	            source.complete = true;
	        }
	        source.addEventListener('play', this._onPlayStart.bind(this));
	        source.addEventListener('pause', this._onPlayStop.bind(this));
	        if (!this._isSourceReady())
	        {
	            source.addEventListener('canplay', this._onCanPlay);
	            source.addEventListener('canplaythrough', this._onCanPlay);
	        }
	        else
	        {
	            this._onCanPlay();
	        }
	        this._load = new Promise(function (resolve) {
	            if (this$1.valid)
	            {
	                resolve(this$1);
	            }
	            else
	            {
	                this$1._resolve = resolve;
	                source.load();
	            }
	        });
	        return this._load;
	    };
	    VideoResource.prototype._isSourcePlaying = function _isSourcePlaying ()
	    {
	        var source = this.source;
	        return (source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2);
	    };
	    VideoResource.prototype._isSourceReady = function _isSourceReady ()
	    {
	        return this.source.readyState === 3 || this.source.readyState === 4;
	    };
	    VideoResource.prototype._onPlayStart = function _onPlayStart ()
	    {
	        if (!this.valid)
	        {
	            this._onCanPlay();
	        }
	        if (!this._isAutoUpdating && this.autoUpdate)
	        {
	            ticker.Ticker.shared.add(this.update, this);
	            this._isAutoUpdating = true;
	        }
	    };
	    VideoResource.prototype._onPlayStop = function _onPlayStop ()
	    {
	        if (this._isAutoUpdating)
	        {
	            ticker.Ticker.shared.remove(this.update, this);
	            this._isAutoUpdating = false;
	        }
	    };
	    VideoResource.prototype._onCanPlay = function _onCanPlay ()
	    {
	        var ref = this;
	        var source = ref.source;
	        source.removeEventListener('canplay', this._onCanPlay);
	        source.removeEventListener('canplaythrough', this._onCanPlay);
	        var valid = this.valid;
	        this.resize(source.videoWidth, source.videoHeight);
	        if (!valid && this._resolve)
	        {
	            this._resolve(this);
	            this._resolve = null;
	        }
	        if (this._isSourcePlaying())
	        {
	            this._onPlayStart();
	        }
	        else if (this.autoPlay)
	        {
	            source.play();
	        }
	    };
	    VideoResource.prototype.dispose = function dispose ()
	    {
	        if (this._isAutoUpdating)
	        {
	            ticker.Ticker.shared.remove(this.update, this);
	        }
	        if (this.source)
	        {
	            this.source.pause();
	            this.source.src = '';
	            this.source.load();
	        }
	        BaseImageResource$$1.prototype.dispose.call(this);
	    };
	    prototypeAccessors.autoUpdate.get = function ()
	    {
	        return this._autoUpdate;
	    };
	    prototypeAccessors.autoUpdate.set = function (value)
	    {
	        if (value !== this._autoUpdate)
	        {
	            this._autoUpdate = value;
	            if (!this._autoUpdate && this._isAutoUpdating)
	            {
	                ticker.Ticker.shared.remove(this.update, this);
	                this._isAutoUpdating = false;
	            }
	            else if (this._autoUpdate && !this._isAutoUpdating)
	            {
	                ticker.Ticker.shared.add(this.update, this);
	                this._isAutoUpdating = true;
	            }
	        }
	    };
	    VideoResource.test = function test (source, extension)
	    {
	        return (source instanceof HTMLVideoElement)
	            || VideoResource.TYPES.indexOf(extension) > -1;
	    };
	    Object.defineProperties( VideoResource.prototype, prototypeAccessors );
	    return VideoResource;
	}(BaseImageResource));
	VideoResource.TYPES = ['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov'];
	var SVGResource = (function (BaseImageResource$$1) {
	    function SVGResource(source, options)
	    {
	        options = options || {};
	        BaseImageResource$$1.call(this, document.createElement('canvas'));
	        this.svg = source;
	        this.scale = options.scale || 1;
	        this._resolve = null;
	        this._load = null;
	        if (options.autoLoad !== false)
	        {
	            this.load();
	        }
	    }
	    if ( BaseImageResource$$1 ) SVGResource.__proto__ = BaseImageResource$$1;
	    SVGResource.prototype = Object.create( BaseImageResource$$1 && BaseImageResource$$1.prototype );
	    SVGResource.prototype.constructor = SVGResource;
	    SVGResource.prototype.load = function load ()
	    {
	        var this$1 = this;
	        if (this._load)
	        {
	            return this._load;
	        }
	        this._load = new Promise(function (resolve) {
	            this$1._resolve = function () {
	                this$1.resize(this$1.source.width, this$1.source.height);
	                resolve(this$1);
	            };
	            if (/^\<svg/.test(this$1.svg.trim()))
	            {
	                this$1.svg = "data:image/svg+xml;utf8," + (this$1.svg);
	            }
	            var dataUri = utils.decomposeDataUri(this$1.svg);
	            if (dataUri)
	            {
	                this$1._loadDataUri(dataUri);
	            }
	            else
	            {
	                this$1._loadXhr();
	            }
	        });
	        return this._load;
	    };
	    SVGResource.prototype._loadDataUri = function _loadDataUri (dataUri)
	    {
	        var svgString;
	        if (dataUri.encoding === 'base64')
	        {
	            if (!atob)
	            {
	                throw new Error('Your browser doesn\'t support base64 conversions.');
	            }
	            svgString = atob(dataUri.data);
	        }
	        else
	        {
	            svgString = dataUri.data;
	        }
	        this._loadString(svgString);
	    };
	    SVGResource.prototype._loadXhr = function _loadXhr ()
	    {
	        var this$1 = this;
	        var svgXhr = new XMLHttpRequest();
	        svgXhr.onload = function () {
	            if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200)
	            {
	                throw new Error('Failed to load SVG using XHR.');
	            }
	            this$1._loadString(svgXhr.response);
	        };
	        svgXhr.open('GET', this.svg, true);
	        svgXhr.send();
	    };
	    SVGResource.prototype._loadString = function _loadString (svgString)
	    {
	        var svgSize = SVGResource.getSize(svgString);
	        var tempImage = new Image();
	        tempImage.src = "data:image/svg+xml," + svgString;
	        var svgWidth = svgSize.width;
	        var svgHeight = svgSize.height;
	        if (!svgWidth || !svgHeight)
	        {
	            throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
	        }
	        this._width = Math.round(svgWidth * this.scale);
	        this._height = Math.round(svgHeight * this.scale);
	        var canvas = this.source;
	        canvas.width = this._width;
	        canvas.height = this._height;
	        canvas._pixiId = "canvas_" + (utils.uid());
	        canvas
	            .getContext('2d')
	            .drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, this.width, this.height);
	        this._resolve();
	        this._resolve = null;
	    };
	    SVGResource.getSize = function getSize (svgString)
	    {
	        var sizeMatch = SVGResource.SVG_SIZE.exec(svgString);
	        var size = {};
	        if (sizeMatch)
	        {
	            size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
	            size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
	        }
	        return size;
	    };
	    SVGResource.prototype.dispose = function dispose ()
	    {
	        BaseImageResource$$1.prototype.dispose.call(this);
	        this._resolve = null;
	    };
	    SVGResource.test = function test (source, extension)
	    {
	        return extension === 'svg'
	            || (typeof source === 'string' && source.indexOf('data:image/svg+xml') === 0);
	    };
	    return SVGResource;
	}(BaseImageResource));
	SVGResource.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
	var BufferResource = (function (Resource$$1) {
	    function BufferResource(source, options)
	    {
	        var ref = options || {};
	        var width = ref.width;
	        var height = ref.height;
	        if (!width || !height)
	        {
	            throw new Error('BufferResource width or height invalid');
	        }
	        Resource$$1.call(this, width, height);
	        this.data = source;
	    }
	    if ( Resource$$1 ) BufferResource.__proto__ = Resource$$1;
	    BufferResource.prototype = Object.create( Resource$$1 && Resource$$1.prototype );
	    BufferResource.prototype.constructor = BufferResource;
	    BufferResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
	    {
	        var gl = renderer.gl;
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.premultiplyAlpha);
	        if (glTexture.width === baseTexture.width && glTexture.height === baseTexture.height)
	        {
	            gl.texSubImage2D(
	                baseTexture.target,
	                0,
	                0,
	                0,
	                baseTexture.width,
	                baseTexture.height,
	                baseTexture.format,
	                baseTexture.type,
	                this.data
	            );
	        }
	        else
	        {
	            glTexture.width = baseTexture.width;
	            glTexture.height = baseTexture.height;
	            gl.texImage2D(
	                baseTexture.target,
	                0,
	                baseTexture.format,
	                baseTexture.width,
	                baseTexture.height,
	                0,
	                baseTexture.format,
	                baseTexture.type,
	                this.data
	            );
	        }
	        return true;
	    };
	    BufferResource.prototype.dispose = function dispose ()
	    {
	        this.data = null;
	    };
	    BufferResource.test = function test (source)
	    {
	        return source instanceof Float32Array
	            || source instanceof Uint8Array
	            || source instanceof Uint32Array;
	    };
	    return BufferResource;
	}(Resource));
	var defaultBufferOptions = {
	    scaleMode: constants.SCALE_MODES.NEAREST,
	    format: constants.FORMATS.RGBA,
	    premultiplyAlpha: false,
	};
	var BaseTexture = (function (EventEmitter$$1) {
	    function BaseTexture(resource, options)
	    {
	        if ( resource === void 0 ) resource = null;
	        if ( options === void 0 ) options = null;
	        EventEmitter$$1.call(this);
	        options = options || {};
	        var premultiplyAlpha = options.premultiplyAlpha;
	        var mipmap = options.mipmap;
	        var scaleMode = options.scaleMode;
	        var width = options.width;
	        var height = options.height;
	        var wrapMode = options.wrapMode;
	        var format = options.format;
	        var type = options.type;
	        var target = options.target;
	        var resolution = options.resolution;
	        var resourceOptions = options.resourceOptions;
	        if (resource && !(resource instanceof Resource))
	        {
	            resource = autoDetectResource(resource, resourceOptions);
	            resource.internal = true;
	        }
	        this.width = width || 0;
	        this.height = height || 0;
	        this.resolution = resolution || settings_1.settings.RESOLUTION;
	        this.mipmap = mipmap !== undefined ? mipmap : settings_1.settings.MIPMAP_TEXTURES;
	        this.wrapMode = wrapMode || settings_1.settings.WRAP_MODE;
	        this.scaleMode = scaleMode !== undefined ? scaleMode : settings_1.settings.SCALE_MODE;
	        this.format = format || constants.FORMATS.RGBA;
	        this.type = type || constants.TYPES.UNSIGNED_BYTE;
	        this.target = target || constants.TARGETS.TEXTURE_2D;
	        this.premultiplyAlpha = premultiplyAlpha !== false;
	        this.uid = utils.uid();
	        this.touched = 0;
	        this.isPowerOfTwo = false;
	        this._refreshPOT();
	        this._glTextures = {};
	        this.dirtyId = 0;
	        this.dirtyStyleId = 0;
	        this.cacheId = null;
	        this.valid = width > 0 && height > 0;
	        this.textureCacheIds = [];
	        this.destroyed = false;
	        this.resource = null;
	        this.setResource(resource);
	    }
	    if ( EventEmitter$$1 ) BaseTexture.__proto__ = EventEmitter$$1;
	    BaseTexture.prototype = Object.create( EventEmitter$$1 && EventEmitter$$1.prototype );
	    BaseTexture.prototype.constructor = BaseTexture;
	    var prototypeAccessors = { realWidth: { configurable: true },realHeight: { configurable: true } };
	    prototypeAccessors.realWidth.get = function ()
	    {
	        return this.width * this.resolution;
	    };
	    prototypeAccessors.realHeight.get = function ()
	    {
	        return this.height * this.resolution;
	    };
	    BaseTexture.prototype.setStyle = function setStyle (scaleMode, mipmap)
	    {
	        var dirty;
	        if (scaleMode !== undefined && scaleMode !== this.scaleMode)
	        {
	            this.scaleMode = scaleMode;
	            dirty = true;
	        }
	        if (mipmap !== undefined && mipmap !== this.mipmap)
	        {
	            this.mipmap = mipmap;
	            dirty = true;
	        }
	        if (dirty)
	        {
	            this.dirtyStyleId++;
	        }
	        return this;
	    };
	    BaseTexture.prototype.setSize = function setSize (width, height, resolution)
	    {
	        this.resolution = resolution || this.resolution;
	        this.width = width;
	        this.height = height;
	        this._refreshPOT();
	        this.update();
	        return this;
	    };
	    BaseTexture.prototype.setRealSize = function setRealSize (realWidth, realHeight, resolution)
	    {
	        this.resolution = resolution || this.resolution;
	        this.width = realWidth / this.resolution;
	        this.height = realHeight / this.resolution;
	        this._refreshPOT();
	        this.update();
	        return this;
	    };
	    BaseTexture.prototype._refreshPOT = function _refreshPOT ()
	    {
	        this.isPowerOfTwo = bitTwiddle.isPow2(this.realWidth) && bitTwiddle.isPow2(this.realHeight);
	    };
	    BaseTexture.prototype.setResolution = function setResolution (resolution)
	    {
	        var oldResolution = this.resolution;
	        if (oldResolution === resolution)
	        {
	            return this;
	        }
	        this.resolution = resolution;
	        if (this.valid)
	        {
	            this.width = this.width * oldResolution / resolution;
	            this.height = this.height * oldResolution / resolution;
	            this.emit('update');
	        }
	        this._refreshPOT();
	        return this;
	    };
	    BaseTexture.prototype.setResource = function setResource (resource)
	    {
	        if (this.resource === resource)
	        {
	            return this;
	        }
	        if (this.resource)
	        {
	            throw new Error('Resource can be set only once');
	        }
	        resource.bind(this);
	        this.resource = resource;
	        return this;
	    };
	    BaseTexture.prototype.update = function update ()
	    {
	        if (!this.valid)
	        {
	            if (this.width > 0 && this.height > 0)
	            {
	                this.valid = true;
	                this.emit('loaded', this);
	                this.emit('update', this);
	            }
	        }
	        else
	        {
	            this.dirtyId++;
	            this.dirtyStyleId++;
	            this.emit('update', this);
	        }
	    };
	    BaseTexture.prototype.destroy = function destroy ()
	    {
	        if (this.resource)
	        {
	            this.resource.unbind(this);
	            if (this.resource.internal)
	            {
	                this.resource.destroy();
	            }
	            this.resource = null;
	        }
	        if (this.cacheId)
	        {
	            delete utils.BaseTextureCache[this.cacheId];
	            delete utils.TextureCache[this.cacheId];
	            this.cacheId = null;
	        }
	        this.dispose();
	        BaseTexture.removeFromCache(this);
	        this.textureCacheIds = null;
	        this.destroyed = true;
	    };
	    BaseTexture.prototype.dispose = function dispose ()
	    {
	        this.emit('dispose', this);
	    };
	    BaseTexture.from = function from (source, options)
	    {
	        var cacheId = null;
	        if (typeof source === 'string')
	        {
	            cacheId = source;
	        }
	        else
	        {
	            if (!source._pixiId)
	            {
	                source._pixiId = "pixiid_" + (utils.uid());
	            }
	            cacheId = source._pixiId;
	        }
	        var baseTexture = utils.BaseTextureCache[cacheId];
	        if (!baseTexture)
	        {
	            baseTexture = new BaseTexture(source, options);
	            baseTexture.cacheId = cacheId;
	            BaseTexture.addToCache(baseTexture, cacheId);
	        }
	        return baseTexture;
	    };
	    BaseTexture.fromBuffer = function fromBuffer (buffer, width, height, options)
	    {
	        buffer = buffer || new Float32Array(width * height * 4);
	        var resource = new BufferResource(buffer, { width: width, height: height });
	        var type = buffer instanceof Float32Array ? constants.TYPES.FLOAT : constants.TYPES.UNSIGNED_BYTE;
	        return new BaseTexture(resource, Object.assign(defaultBufferOptions, options || { width: width, height: height, type: type }));
	    };
	    BaseTexture.addToCache = function addToCache (baseTexture, id)
	    {
	        if (id)
	        {
	            if (baseTexture.textureCacheIds.indexOf(id) === -1)
	            {
	                baseTexture.textureCacheIds.push(id);
	            }
	            if (utils.BaseTextureCache[id])
	            {
	                console.warn(("BaseTexture added to the cache with an id [" + id + "] that already had an entry"));
	            }
	            utils.BaseTextureCache[id] = baseTexture;
	        }
	    };
	    BaseTexture.removeFromCache = function removeFromCache (baseTexture)
	    {
	        if (typeof baseTexture === 'string')
	        {
	            var baseTextureFromCache = utils.BaseTextureCache[baseTexture];
	            if (baseTextureFromCache)
	            {
	                var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
	                if (index > -1)
	                {
	                    baseTextureFromCache.textureCacheIds.splice(index, 1);
	                }
	                delete utils.BaseTextureCache[baseTexture];
	                return baseTextureFromCache;
	            }
	        }
	        else if (baseTexture && baseTexture.textureCacheIds)
	        {
	            for (var i = 0; i < baseTexture.textureCacheIds.length; ++i)
	            {
	                delete utils.BaseTextureCache[baseTexture.textureCacheIds[i]];
	            }
	            baseTexture.textureCacheIds.length = 0;
	            return baseTexture;
	        }
	        return null;
	    };
	    Object.defineProperties( BaseTexture.prototype, prototypeAccessors );
	    return BaseTexture;
	}(EventEmitter));
	var ArrayResource = (function (Resource$$1) {
	    function ArrayResource(source, options)
	    {
	        var this$1 = this;
	        options = options || {};
	        var urls;
	        var length = source;
	        if (Array.isArray(source))
	        {
	            urls = source;
	            length = source.length;
	        }
	        Resource$$1.call(this, options.width, options.height);
	        this.items = [];
	        this.itemDirtyIds = [];
	        for (var i = 0; i < length; i++)
	        {
	            var partTexture = new BaseTexture();
	            this$1.items.push(partTexture);
	            this$1.itemDirtyIds.push(-1);
	        }
	        this.length = length;
	        this._load = null;
	        if (urls)
	        {
	            for (var i$1 = 0; i$1 < length; i$1++)
	            {
	                this$1.addResourceAt(autoDetectResource(urls[i$1], options), i$1);
	            }
	        }
	    }
	    if ( Resource$$1 ) ArrayResource.__proto__ = Resource$$1;
	    ArrayResource.prototype = Object.create( Resource$$1 && Resource$$1.prototype );
	    ArrayResource.prototype.constructor = ArrayResource;
	    ArrayResource.prototype.dispose = function dispose ()
	    {
	        var this$1 = this;
	        for (var i = 0, len = this.length; i < len; i++)
	        {
	            this$1.items[i].destroy();
	        }
	        this.items = null;
	        this.itemDirtyIds = null;
	        this._load = null;
	    };
	    ArrayResource.prototype.addResourceAt = function addResourceAt (resource, index)
	    {
	        var baseTexture = this.items[index];
	        if (!baseTexture)
	        {
	            throw new Error(("Index " + index + " is out of bounds"));
	        }
	        if (resource.valid && !this.valid)
	        {
	            this.resize(resource.width, resource.height);
	        }
	        this.items[index].setResource(resource);
	        return this;
	    };
	    ArrayResource.prototype.bind = function bind (baseTexture)
	    {
	        var this$1 = this;
	        Resource$$1.prototype.bind.call(this, baseTexture);
	        baseTexture.target = constants.TARGETS.TEXTURE_2D_ARRAY;
	        for (var i = 0; i < this.length; i++)
	        {
	            this$1.items[i].on('update', baseTexture.update, baseTexture);
	        }
	    };
	    ArrayResource.prototype.unbind = function unbind (baseTexture)
	    {
	        var this$1 = this;
	        Resource$$1.prototype.unbind.call(this, baseTexture);
	        for (var i = 0; i < this.length; i++)
	        {
	            this$1.items[i].off('update', baseTexture.update, baseTexture);
	        }
	    };
	    ArrayResource.prototype.load = function load ()
	    {
	        var this$1 = this;
	        if (this._load)
	        {
	            return this._load;
	        }
	        var resources = this.items.map(function (item) { return item.resource; });
	        var promises = resources.map(function (item) { return item.load(); });
	        this._load = Promise.all(promises)
	            .then(function () {
	                var ref = resources[0];
	                var width = ref.width;
	                var height = ref.height;
	                this$1.resize(width, height);
	                return Promise.resolve(this$1);
	            }
	            );
	        return this._load;
	    };
	    ArrayResource.prototype.upload = function upload (renderer, texture, glTexture)
	    {
	        var ref = this;
	        var length = ref.length;
	        var itemDirtyIds = ref.itemDirtyIds;
	        var items = ref.items;
	        var gl = renderer.gl;
	        if (glTexture.dirtyId < 0)
	        {
	            gl.texImage3D(
	                gl.TEXTURE_2D_ARRAY,
	                0,
	                texture.format,
	                this._width,
	                this._height,
	                length,
	                0,
	                texture.format,
	                texture.type,
	                null
	            );
	        }
	        for (var i = 0; i < length; i++)
	        {
	            var item = items[i];
	            if (itemDirtyIds[i] < item.dirtyId)
	            {
	                itemDirtyIds[i] = item.dirtyId;
	                if (item.valid)
	                {
	                    gl.texSubImage3D(
	                        gl.TEXTURE_2D_ARRAY,
	                        0,
	                        0,
	                        0,
	                        i,
	                        item.resource.width,
	                        item.resource.height,
	                        1,
	                        texture.format,
	                        texture.type,
	                        item.resource.source
	                    );
	                }
	            }
	        }
	        return true;
	    };
	    return ArrayResource;
	}(Resource));
	var CubeResource = (function (ArrayResource$$1) {
	    function CubeResource(source, options)
	    {
	        ArrayResource$$1.call(this, source, options);
	        if (this.length !== CubeResource.SIDES)
	        {
	            throw new Error(("Invalid length. Got " + (this.length) + ", expected 6"));
	        }
	    }
	    if ( ArrayResource$$1 ) CubeResource.__proto__ = ArrayResource$$1;
	    CubeResource.prototype = Object.create( ArrayResource$$1 && ArrayResource$$1.prototype );
	    CubeResource.prototype.constructor = CubeResource;
	    CubeResource.prototype.bind = function bind (baseTexture)
	    {
	        ArrayResource$$1.prototype.bind.call(this, baseTexture);
	        baseTexture.target = constants.TARGETS.TEXTURE_CUBE_MAP;
	    };
	    CubeResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
	    {
	        var this$1 = this;
	        var dirty = this.itemDirtyIds;
	        for (var i = 0; i < CubeResource.SIDES; i++)
	        {
	            var side = this$1.items[i];
	            if (dirty[i] < side.dirtyId)
	            {
	                dirty[i] = side.dirtyId;
	                if (side.valid)
	                {
	                    side.resource.upload(renderer, side, glTexture);
	                }
	            }
	        }
	        return true;
	    };
	    return CubeResource;
	}(ArrayResource));
	CubeResource.SIDES = 6;
	var INSTALLED = [
	    ImageResource,
	    CanvasResource,
	    VideoResource,
	    SVGResource,
	    BufferResource,
	    CubeResource,
	    ArrayResource ];
	function autoDetectResource(source, options)
	{
	    if (!source)
	    {
	        return null;
	    }
	    var extension = '';
	    if (typeof source === 'string')
	    {
	        var result = (/\.(\w{3,4})(?:$|\?|#)/i).exec(source);
	        if (result)
	        {
	            extension = result[1].toLowerCase();
	        }
	    }
	    for (var i = INSTALLED.length - 1; i >= 0; --i)
	    {
	        var ResourcePlugin = INSTALLED[i];
	        if (ResourcePlugin.test && ResourcePlugin.test(source, extension))
	        {
	            return new ResourcePlugin(source, options);
	        }
	    }
	    return new ImageResource(source, options);
	}
	var index = ({
		Resource: Resource,
		ArrayResource: ArrayResource,
		BaseImageResource: BaseImageResource,
		BufferResource: BufferResource,
		CanvasResource: CanvasResource,
		CubeResource: CubeResource,
		ImageResource: ImageResource,
		SVGResource: SVGResource,
		VideoResource: VideoResource,
		INSTALLED: INSTALLED,
		autoDetectResource: autoDetectResource
	});
	var System = function System(renderer)
	{
	    this.renderer = renderer;
	    this.renderer.runners.contextChange.add(this);
	};
	System.prototype.contextChange = function contextChange ()
	{
	};
	System.prototype.destroy = function destroy ()
	{
	    this.renderer.runners.contextChange.remove(this);
	    this.renderer = null;
	};
	var FrameBuffer = function FrameBuffer(width, height)
	{
	    this.width = Math.ceil(width || 100);
	    this.height = Math.ceil(height || 100);
	    this.stencil = false;
	    this.depth = false;
	    this.dirtyId = 0;
	    this.dirtyFormat = 0;
	    this.dirtySize = 0;
	    this.depthTexture = null;
	    this.colorTextures = [];
	    this.glFrameBuffers = {};
	};
	var prototypeAccessors$1 = { colorTexture: { configurable: true } };
	prototypeAccessors$1.colorTexture.get = function ()
	{
	    return this.colorTextures[0];
	};
	FrameBuffer.prototype.addColorTexture = function addColorTexture (index, texture)
	{
	    this.colorTextures[index || 0] = texture || new BaseTexture(null, { scaleMode: 0,
	        resolution: 1,
	        mipmap: false,
	        width: this.width,
	        height: this.height });
	    this.dirtyId++;
	    this.dirtyFormat++;
	    return this;
	};
	FrameBuffer.prototype.addDepthTexture = function addDepthTexture (texture)
	{
	    this.depthTexture = texture || new BaseTexture(null, { scaleMode: 0,
	        resolution: 1,
	        width: this.width,
	        height: this.height,
	        mipmap: false,
	        format: constants.FORMATS.DEPTH_COMPONENT,
	        type: constants.TYPES.UNSIGNED_SHORT });
	    this.dirtyId++;
	    this.dirtyFormat++;
	    return this;
	};
	FrameBuffer.prototype.enableDepth = function enableDepth ()
	{
	    this.depth = true;
	    this.dirtyId++;
	    this.dirtyFormat++;
	    return this;
	};
	FrameBuffer.prototype.enableStencil = function enableStencil ()
	{
	    this.stencil = true;
	    this.dirtyId++;
	    this.dirtyFormat++;
	    return this;
	};
	FrameBuffer.prototype.resize = function resize (width, height)
	{
	        var this$1 = this;
	    width = Math.ceil(width);
	    height = Math.ceil(height);
	    if (width === this.width && height === this.height) { return; }
	    this.width = width;
	    this.height = height;
	    this.dirtyId++;
	    this.dirtySize++;
	    for (var i = 0; i < this.colorTextures.length; i++)
	    {
	        this$1.colorTextures[i].setSize(width, height);
	    }
	    if (this.depthTexture)
	    {
	        this.depthTexture.setSize(width, height);
	    }
	};
	Object.defineProperties( FrameBuffer.prototype, prototypeAccessors$1 );
	var BaseRenderTexture = (function (BaseTexture$$1) {
	    function BaseRenderTexture(options)
	    {
	        if (typeof options === 'number')
	        {
	            var width$1 = arguments[0];
	            var height$1 = arguments[1];
	            var scaleMode = arguments[2];
	            var resolution = arguments[3];
	            options = { width: width$1, height: height$1, scaleMode: scaleMode, resolution: resolution };
	        }
	        BaseTexture$$1.call(this, null, options);
	        var ref = options || {};
	        var width = ref.width;
	        var height = ref.height;
	        this.mipmap = false;
	        this.width = Math.ceil(width) || 100;
	        this.height = Math.ceil(height) || 100;
	        this.valid = true;
	        this._canvasRenderTarget = null;
	        this.clearColor = [0, 0, 0, 0];
	        this.frameBuffer = new FrameBuffer(this.width * this.resolution, this.height * this.resolution)
	            .addColorTexture(0, this)
	            .enableStencil();
	        this.stencilMaskStack = [];
	        this.filterStack = [{}];
	    }
	    if ( BaseTexture$$1 ) BaseRenderTexture.__proto__ = BaseTexture$$1;
	    BaseRenderTexture.prototype = Object.create( BaseTexture$$1 && BaseTexture$$1.prototype );
	    BaseRenderTexture.prototype.constructor = BaseRenderTexture;
	    BaseRenderTexture.prototype.resize = function resize (width, height)
	    {
	        width = Math.ceil(width);
	        height = Math.ceil(height);
	        this.frameBuffer.resize(width * this.resolution, height * this.resolution);
	    };
	    BaseRenderTexture.prototype.destroy = function destroy ()
	    {
	        BaseTexture$$1.prototype.destroy.call(this, true);
	        this.renderer = null;
	    };
	    return BaseRenderTexture;
	}(BaseTexture));
	var TextureUvs = function TextureUvs()
	{
	    this.x0 = 0;
	    this.y0 = 0;
	    this.x1 = 1;
	    this.y1 = 0;
	    this.x2 = 1;
	    this.y2 = 1;
	    this.x3 = 0;
	    this.y3 = 1;
	    this.uvsUint32 = new Uint32Array(4);
	};
	TextureUvs.prototype.set = function set (frame, baseFrame, rotate)
	{
	    var tw = baseFrame.width;
	    var th = baseFrame.height;
	    if (rotate)
	    {
	        var w2 = frame.width / 2 / tw;
	        var h2 = frame.height / 2 / th;
	        var cX = (frame.x / tw) + w2;
	        var cY = (frame.y / th) + h2;
	        rotate = math.GroupD8.add(rotate, math.GroupD8.NW);
	        this.x0 = cX + (w2 * math.GroupD8.uX(rotate));
	        this.y0 = cY + (h2 * math.GroupD8.uY(rotate));
	        rotate = math.GroupD8.add(rotate, 2);
	        this.x1 = cX + (w2 * math.GroupD8.uX(rotate));
	        this.y1 = cY + (h2 * math.GroupD8.uY(rotate));
	        rotate = math.GroupD8.add(rotate, 2);
	        this.x2 = cX + (w2 * math.GroupD8.uX(rotate));
	        this.y2 = cY + (h2 * math.GroupD8.uY(rotate));
	        rotate = math.GroupD8.add(rotate, 2);
	        this.x3 = cX + (w2 * math.GroupD8.uX(rotate));
	        this.y3 = cY + (h2 * math.GroupD8.uY(rotate));
	    }
	    else
	    {
	        this.x0 = frame.x / tw;
	        this.y0 = frame.y / th;
	        this.x1 = (frame.x + frame.width) / tw;
	        this.y1 = frame.y / th;
	        this.x2 = (frame.x + frame.width) / tw;
	        this.y2 = (frame.y + frame.height) / th;
	        this.x3 = frame.x / tw;
	        this.y3 = (frame.y + frame.height) / th;
	    }
	    this.uvsUint32[0] = (((this.y0 * 65535) & 0xFFFF) << 16) | ((this.x0 * 65535) & 0xFFFF);
	    this.uvsUint32[1] = (((this.y1 * 65535) & 0xFFFF) << 16) | ((this.x1 * 65535) & 0xFFFF);
	    this.uvsUint32[2] = (((this.y2 * 65535) & 0xFFFF) << 16) | ((this.x2 * 65535) & 0xFFFF);
	    this.uvsUint32[3] = (((this.y3 * 65535) & 0xFFFF) << 16) | ((this.x3 * 65535) & 0xFFFF);
	};
	var Texture = (function (EventEmitter$$1) {
	    function Texture(baseTexture, frame, orig, trim, rotate)
	    {
	        EventEmitter$$1.call(this);
	        this.noFrame = false;
	        if (!frame)
	        {
	            this.noFrame = true;
	            frame = new math.Rectangle(0, 0, 1, 1);
	        }
	        if (baseTexture instanceof Texture)
	        {
	            baseTexture = baseTexture.baseTexture;
	        }
	        this.baseTexture = baseTexture;
	        this._frame = frame;
	        this.trim = trim;
	        this.valid = false;
	        this.requiresUpdate = false;
	        this._uvs = null;
	        this.uvMatrix = null;
	        this.orig = orig || frame;
	        this._rotate = Number(rotate || 0);
	        if (rotate === true)
	        {
	            this._rotate = 2;
	        }
	        else if (this._rotate % 2 !== 0)
	        {
	            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
	        }
	        if (baseTexture.valid)
	        {
	            if (this.noFrame)
	            {
	                frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
	                baseTexture.on('update', this.onBaseTextureUpdated, this);
	            }
	            this.frame = frame;
	        }
	        else
	        {
	            baseTexture.once('loaded', this.onBaseTextureUpdated, this);
	        }
	        this._updateID = 0;
	        this.textureCacheIds = [];
	    }
	    if ( EventEmitter$$1 ) Texture.__proto__ = EventEmitter$$1;
	    Texture.prototype = Object.create( EventEmitter$$1 && EventEmitter$$1.prototype );
	    Texture.prototype.constructor = Texture;
	    var prototypeAccessors = { frame: { configurable: true },rotate: { configurable: true },width: { configurable: true },height: { configurable: true } };
	    Texture.prototype.update = function update ()
	    {
	        this.baseTexture.update();
	    };
	    Texture.prototype.onBaseTextureUpdated = function onBaseTextureUpdated (baseTexture)
	    {
	        this._updateID++;
	        if (this.noFrame)
	        {
	            this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
	        }
	        else
	        {
	            this.frame = this._frame;
	        }
	        this.emit('update', this);
	    };
	    Texture.prototype.destroy = function destroy (destroyBase)
	    {
	        if (this.baseTexture)
	        {
	            if (destroyBase)
	            {
	                if (utils.TextureCache[this.baseTexture.imageUrl])
	                {
	                    Texture.removeFromCache(this.baseTexture.imageUrl);
	                }
	                this.baseTexture.destroy();
	            }
	            this.baseTexture.off('update', this.onBaseTextureUpdated, this);
	            this.baseTexture = null;
	        }
	        this._frame = null;
	        this._uvs = null;
	        this.trim = null;
	        this.orig = null;
	        this.valid = false;
	        Texture.removeFromCache(this);
	        this.textureCacheIds = null;
	    };
	    Texture.prototype.clone = function clone ()
	    {
	        return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
	    };
	    Texture.prototype.updateUvs = function updateUvs ()
	    {
	        if (!this._uvs)
	        {
	            this._uvs = new TextureUvs();
	        }
	        this._uvs.set(this._frame, this.baseTexture, this.rotate);
	        this._updateID++;
	    };
	    Texture.from = function from (source, options)
	    {
	        if ( options === void 0 ) options = {};
	        var cacheId = null;
	        if (typeof source === 'string')
	        {
	            cacheId = source;
	            if (!options.resolution)
	            {
	                options.resolution = utils.getResolutionOfUrl(source);
	            }
	        }
	        else
	        {
	            if (!source._pixiId)
	            {
	                source._pixiId = "pixiid_" + (utils.uid());
	            }
	            cacheId = source._pixiId;
	        }
	        var texture = utils.TextureCache[cacheId];
	        if (!texture)
	        {
	            texture = new Texture(new BaseTexture(source, options));
	            texture.baseTexture.cacheId = cacheId;
	            BaseTexture.addToCache(texture.baseTexture, cacheId);
	            Texture.addToCache(texture, cacheId);
	        }
	        return texture;
	    };
	    Texture.fromBuffer = function fromBuffer (buffer, width, height, options)
	    {
	        return new Texture(BaseTexture.fromBuffer(buffer, width, height, options));
	    };
	    Texture.fromLoader = function fromLoader (source, imageUrl, name)
	    {
	        var resource = new ImageResource(source);
	        resource.url = imageUrl;
	        var baseTexture = new BaseTexture(resource, {
	            scaleMode: settings_1.settings.SCALE_MODE,
	            resolution: utils.getResolutionOfUrl(imageUrl),
	        });
	        var texture = new Texture(baseTexture);
	        if (!name)
	        {
	            name = imageUrl;
	        }
	        BaseTexture.addToCache(texture.baseTexture, name);
	        Texture.addToCache(texture, name);
	        if (name !== imageUrl)
	        {
	            BaseTexture.addToCache(texture.baseTexture, imageUrl);
	            Texture.addToCache(texture, imageUrl);
	        }
	        return texture;
	    };
	    Texture.addToCache = function addToCache (texture, id)
	    {
	        if (id)
	        {
	            if (texture.textureCacheIds.indexOf(id) === -1)
	            {
	                texture.textureCacheIds.push(id);
	            }
	            if (utils.TextureCache[id])
	            {
	                console.warn(("Texture added to the cache with an id [" + id + "] that already had an entry"));
	            }
	            utils.TextureCache[id] = texture;
	        }
	    };
	    Texture.removeFromCache = function removeFromCache (texture)
	    {
	        if (typeof texture === 'string')
	        {
	            var textureFromCache = utils.TextureCache[texture];
	            if (textureFromCache)
	            {
	                var index = textureFromCache.textureCacheIds.indexOf(texture);
	                if (index > -1)
	                {
	                    textureFromCache.textureCacheIds.splice(index, 1);
	                }
	                delete utils.TextureCache[texture];
	                return textureFromCache;
	            }
	        }
	        else if (texture && texture.textureCacheIds)
	        {
	            for (var i = 0; i < texture.textureCacheIds.length; ++i)
	            {
	                if (utils.TextureCache[texture.textureCacheIds[i]] === texture)
	                {
	                    delete utils.TextureCache[texture.textureCacheIds[i]];
	                }
	            }
	            texture.textureCacheIds.length = 0;
	            return texture;
	        }
	        return null;
	    };
	    prototypeAccessors.frame.get = function ()
	    {
	        return this._frame;
	    };
	    prototypeAccessors.frame.set = function (frame)
	    {
	        this._frame = frame;
	        this.noFrame = false;
	        var x = frame.x;
	        var y = frame.y;
	        var width = frame.width;
	        var height = frame.height;
	        var xNotFit = x + width > this.baseTexture.width;
	        var yNotFit = y + height > this.baseTexture.height;
	        if (xNotFit || yNotFit)
	        {
	            var relationship = xNotFit && yNotFit ? 'and' : 'or';
	            var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + (this.baseTexture.width);
	            var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + (this.baseTexture.height);
	            throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: '
	                + errorX + " " + relationship + " " + errorY);
	        }
	        this.valid = width && height && this.baseTexture.valid;
	        if (!this.trim && !this.rotate)
	        {
	            this.orig = frame;
	        }
	        if (this.valid)
	        {
	            this.updateUvs();
	        }
	    };
	    prototypeAccessors.rotate.get = function ()
	    {
	        return this._rotate;
	    };
	    prototypeAccessors.rotate.set = function (rotate)
	    {
	        this._rotate = rotate;
	        if (this.valid)
	        {
	            this.updateUvs();
	        }
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return this.orig.width;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return this.orig.height;
	    };
	    Object.defineProperties( Texture.prototype, prototypeAccessors );
	    return Texture;
	}(EventEmitter));
	function createWhiteTexture()
	{
	    var canvas = document.createElement('canvas');
	    canvas.width = 10;
	    canvas.height = 10;
	    var context = canvas.getContext('2d');
	    context.fillStyle = 'white';
	    context.fillRect(0, 0, 10, 10);
	    return new Texture(new BaseTexture(new CanvasResource(canvas)));
	}
	function removeAllHandlers(tex)
	{
	    tex.destroy = function _emptyDestroy() {  };
	    tex.on = function _emptyOn() {  };
	    tex.once = function _emptyOnce() {  };
	    tex.emit = function _emptyEmit() {  };
	}
	Texture.EMPTY = new Texture(new BaseTexture());
	removeAllHandlers(Texture.EMPTY);
	removeAllHandlers(Texture.EMPTY.baseTexture);
	Texture.WHITE = createWhiteTexture();
	removeAllHandlers(Texture.WHITE);
	removeAllHandlers(Texture.WHITE.baseTexture);
	var RenderTexture = (function (Texture$$1) {
	    function RenderTexture(baseRenderTexture, frame)
	    {
	        var _legacyRenderer = null;
	        if (!(baseRenderTexture instanceof BaseRenderTexture))
	        {
	            var width = arguments[1];
	            var height = arguments[2];
	            var scaleMode = arguments[3];
	            var resolution = arguments[4];
	            console.warn(("Please use RenderTexture.create(" + width + ", " + height + ") instead of the ctor directly."));
	            _legacyRenderer = arguments[0];
	            frame = null;
	            baseRenderTexture = new BaseRenderTexture({
	                width: width,
	                height: height,
	                scaleMode: scaleMode,
	                resolution: resolution,
	            });
	        }
	        Texture$$1.call(this, baseRenderTexture, frame);
	        this.legacyRenderer = _legacyRenderer;
	        this.valid = true;
	        this.filterFrame = null;
	        this.filterPoolKey = null;
	        this.updateUvs();
	    }
	    if ( Texture$$1 ) RenderTexture.__proto__ = Texture$$1;
	    RenderTexture.prototype = Object.create( Texture$$1 && Texture$$1.prototype );
	    RenderTexture.prototype.constructor = RenderTexture;
	    RenderTexture.prototype.resize = function resize (width, height, resizeBaseTexture)
	    {
	        if ( resizeBaseTexture === void 0 ) resizeBaseTexture = true;
	        width = Math.ceil(width);
	        height = Math.ceil(height);
	        this.valid = (width > 0 && height > 0);
	        this._frame.width = this.orig.width = width;
	        this._frame.height = this.orig.height = height;
	        if (resizeBaseTexture)
	        {
	            this.baseTexture.resize(width, height);
	        }
	        this.updateUvs();
	    };
	    RenderTexture.create = function create (options)
	    {
	        if (typeof options === 'number')
	        {
	            options = {
	                width: options,
	                height: arguments[1],
	                scaleMode: arguments[2],
	                resolution: arguments[3],
	            };
	        }
	        return new RenderTexture(new BaseRenderTexture(options));
	    };
	    return RenderTexture;
	}(Texture));
	var Attribute = function Attribute(buffer, size, normalized, type, stride, start, instance)
	{
	    if ( normalized === void 0 ) normalized = false;
	    if ( type === void 0 ) type = 5126;
	    this.buffer = buffer;
	    this.size = size;
	    this.normalized = normalized;
	    this.type = type;
	    this.stride = stride;
	    this.start = start;
	    this.instance = instance;
	};
	Attribute.prototype.destroy = function destroy ()
	{
	    this.buffer = null;
	};
	Attribute.from = function from (buffer, size, stride, start, normalized)
	{
	    return new Attribute(buffer, size, stride, start, normalized);
	};
	var Attribute_1 = Attribute;
	var UID$1 = 0;
	var Buffer = function Buffer(data, _static, index)
	{
	    if ( _static === void 0 ) _static = true;
	    if ( index === void 0 ) index = false;
	    this.data = data || new Float32Array(1);
	    this._glBuffers = {};
	    this._updateID = 0;
	    this.index = index;
	    this.static = _static;
	    this.id = UID$1++;
	};
	Buffer.prototype.update = function update (data)
	{
	    this.data = data || this.data;
	    this._updateID++;
	};
	Buffer.prototype.destroy = function destroy ()
	{
	        var this$1 = this;
	    for (var i = 0; i < this._glBuffers.length; i++)
	    {
	        this$1._glBuffers[i].destroy();
	    }
	    this.data = null;
	};
	Buffer.from = function from (data)
	{
	    if (data instanceof Array)
	    {
	        data = new Float32Array(data);
	    }
	    return new Buffer(data);
	};
	function getBufferType(array)
	{
	    if (array.BYTES_PER_ELEMENT === 4)
	    {
	        if (array instanceof Float32Array)
	        {
	            return 'Float32Array';
	        }
	        else if (array instanceof Uint32Array)
	        {
	            return 'Uint32Array';
	        }
	        return 'Int32Array';
	    }
	    else if (array.BYTES_PER_ELEMENT === 2)
	    {
	        if (array instanceof Uint16Array)
	        {
	            return 'Uint16Array';
	        }
	    }
	    else if (array.BYTES_PER_ELEMENT === 1)
	    {
	        if (array instanceof Uint8Array)
	        {
	            return 'Uint8Array';
	        }
	    }
	    return null;
	}
	var map$1 = {
	    Float32Array: Float32Array,
	    Uint32Array: Uint32Array,
	    Int32Array: Int32Array,
	    Uint8Array: Uint8Array,
	};
	function interleaveTypedArrays(arrays, sizes)
	{
	    var outSize = 0;
	    var stride = 0;
	    var views = {};
	    for (var i = 0; i < arrays.length; i++)
	    {
	        stride += sizes[i];
	        outSize += arrays[i].length;
	    }
	    var buffer = new ArrayBuffer(outSize * 4);
	    var out = null;
	    var littleOffset = 0;
	    for (var i$1 = 0; i$1 < arrays.length; i$1++)
	    {
	        var size = sizes[i$1];
	        var array = arrays[i$1];
	        var type = getBufferType(array);
	        if (!views[type])
	        {
	            views[type] = new map$1[type](buffer);
	        }
	        out = views[type];
	        for (var j = 0; j < array.length; j++)
	        {
	            var indexStart = ((j / size | 0) * stride) + littleOffset;
	            var index = j % size;
	            out[indexStart + index] = array[j];
	        }
	        littleOffset += size;
	    }
	    return new Float32Array(buffer);
	}
	var byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
	var UID = 0;
	var map = {
	    Float32Array: Float32Array,
	    Uint32Array: Uint32Array,
	    Int32Array: Int32Array,
	    Uint8Array: Uint8Array,
	    Uint16Array: Uint16Array,
	};
	var Geometry = function Geometry(buffers, attributes)
	{
	    if ( buffers === void 0 ) buffers = [];
	    if ( attributes === void 0 ) attributes = {};
	    this.buffers = buffers;
	    this.indexBuffer = null;
	    this.attributes = attributes;
	    this.glVertexArrayObjects = {};
	    this.id = UID++;
	    this.instanced = false;
	    this.instanceCount = 1;
	    this._size = null;
	};
	Geometry.prototype.addAttribute = function addAttribute (id, buffer, size, normalized, type, stride, start, instance)
	{
	        var this$1 = this;
	        if ( normalized === void 0 ) normalized = false;
	        if ( instance === void 0 ) instance = false;
	    if (!buffer)
	    {
	        throw new Error('You must pass a buffer when creating an attribute');
	    }
	    if (!buffer.data)
	    {
	        if (buffer instanceof Array)
	        {
	            buffer = new Float32Array(buffer);
	        }
	        buffer = new Buffer(buffer);
	    }
	    var ids = id.split('|');
	    if (ids.length > 1)
	    {
	        for (var i = 0; i < ids.length; i++)
	        {
	            this$1.addAttribute(ids[i], buffer, size, normalized, type);
	        }
	        return this;
	    }
	    var bufferIndex = this.buffers.indexOf(buffer);
	    if (bufferIndex === -1)
	    {
	        this.buffers.push(buffer);
	        bufferIndex = this.buffers.length - 1;
	    }
	    this.attributes[id] = new Attribute_1(bufferIndex, size, normalized, type, stride, start, instance);
	    this.instanced = this.instanced || instance;
	    return this;
	};
	Geometry.prototype.getAttribute = function getAttribute (id)
	{
	    return this.buffers[this.attributes[id].buffer];
	};
	Geometry.prototype.addIndex = function addIndex (buffer)
	{
	    if (!buffer.data)
	    {
	        if (buffer instanceof Array)
	        {
	            buffer = new Uint16Array(buffer);
	        }
	        buffer = new Buffer(buffer);
	    }
	    buffer.index = true;
	    this.indexBuffer = buffer;
	    if (this.buffers.indexOf(buffer) === -1)
	    {
	        this.buffers.push(buffer);
	    }
	    return this;
	};
	Geometry.prototype.getIndex = function getIndex ()
	{
	    return this.indexBuffer;
	};
	Geometry.prototype.interleave = function interleave ()
	{
	        var this$1 = this;
	    if (this.buffers.length === 1 || (this.buffers.length === 2 && this.indexBuffer)) { return this; }
	    var arrays = [];
	    var sizes = [];
	    var interleavedBuffer = new Buffer();
	    var i;
	    for (i in this$1.attributes)
	    {
	        var attribute = this$1.attributes[i];
	        var buffer = this$1.buffers[attribute.buffer];
	        arrays.push(buffer.data);
	        sizes.push((attribute.size * byteSizeMap[attribute.type]) / 4);
	        attribute.buffer = 0;
	    }
	    interleavedBuffer.data = interleaveTypedArrays(arrays, sizes);
	    for (i = 0; i < this.buffers.length; i++)
	    {
	        if (this$1.buffers[i] !== this$1.indexBuffer)
	        {
	            this$1.buffers[i].destroy();
	        }
	    }
	    this.buffers = [interleavedBuffer];
	    if (this.indexBuffer)
	    {
	        this.buffers.push(this.indexBuffer);
	    }
	    return this;
	};
	Geometry.prototype.getSize = function getSize ()
	{
	        var this$1 = this;
	    for (var i in this$1.attributes)
	    {
	        var attribute = this$1.attributes[i];
	        var buffer = this$1.buffers[attribute.buffer];
	        return buffer.data.length / ((attribute.stride / 4) || attribute.size);
	    }
	    return 0;
	};
	Geometry.prototype.destroy = function destroy ()
	{
	        var this$1 = this;
	    for (var i = 0; i < this.glVertexArrayObjects.length; i++)
	    {
	        this$1.glVertexArrayObjects[i].destroy();
	    }
	    this.glVertexArrayObjects = null;
	    for (var i$1 = 0; i$1 < this.buffers.length; i$1++)
	    {
	        this$1.buffers[i$1].destroy();
	    }
	    this.buffers = null;
	    this.indexBuffer.destroy();
	    this.attributes = null;
	};
	Geometry.prototype.clone = function clone ()
	{
	        var this$1 = this;
	    var geometry = new Geometry();
	    for (var i = 0; i < this.buffers.length; i++)
	    {
	        geometry.buffers[i] = new Buffer(this$1.buffers[i].data.slice());
	    }
	    for (var i$1 in this$1.attributes)
	    {
	        var attrib = this$1.attributes[i$1];
	        geometry.attributes[i$1] = new Attribute_1(
	            attrib.buffer,
	            attrib.size,
	            attrib.normalized,
	            attrib.type,
	            attrib.stride,
	            attrib.start,
	            attrib.instance
	        );
	    }
	    if (this.indexBuffer)
	    {
	        geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
	        geometry.indexBuffer.index = true;
	    }
	    return geometry;
	};
	Geometry.merge = function merge (geometries)
	{
	    var geometryOut = new Geometry();
	    var arrays = [];
	    var sizes = [];
	    var offsets = [];
	    var geometry;
	    for (var i = 0; i < geometries.length; i++)
	    {
	        geometry = geometries[i];
	        for (var j = 0; j < geometry.buffers.length; j++)
	        {
	            sizes[j] = sizes[j] || 0;
	            sizes[j] += geometry.buffers[j].data.length;
	            offsets[j] = 0;
	        }
	    }
	    for (var i$1 = 0; i$1 < geometry.buffers.length; i$1++)
	    {
	        arrays[i$1] = new map[getBufferType(geometry.buffers[i$1].data)](sizes[i$1]);
	        geometryOut.buffers[i$1] = new Buffer(arrays[i$1]);
	    }
	    for (var i$2 = 0; i$2 < geometries.length; i$2++)
	    {
	        geometry = geometries[i$2];
	        for (var j$1 = 0; j$1 < geometry.buffers.length; j$1++)
	        {
	            arrays[j$1].set(geometry.buffers[j$1].data, offsets[j$1]);
	            offsets[j$1] += geometry.buffers[j$1].data.length;
	        }
	    }
	    geometryOut.attributes = geometry.attributes;
	    if (geometry.indexBuffer)
	    {
	        geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
	        geometryOut.indexBuffer.index = true;
	        var offset = 0;
	        var stride = 0;
	        var offset2 = 0;
	        var bufferIndexToCount = 0;
	        for (var i$3 = 0; i$3 < geometry.buffers.length; i$3++)
	        {
	            if (geometry.buffers[i$3] !== geometry.indexBuffer)
	            {
	                bufferIndexToCount = i$3;
	                break;
	            }
	        }
	        for (var i$4 in geometry.attributes)
	        {
	            var attribute = geometry.attributes[i$4];
	            if ((attribute.buffer | 0) === bufferIndexToCount)
	            {
	                stride += ((attribute.size * byteSizeMap[attribute.type]) / 4);
	            }
	        }
	        for (var i$5 = 0; i$5 < geometries.length; i$5++)
	        {
	            var indexBufferData = geometries[i$5].indexBuffer.data;
	            for (var j$2 = 0; j$2 < indexBufferData.length; j$2++)
	            {
	                geometryOut.indexBuffer.data[j$2 + offset2] += offset;
	            }
	            offset += geometry.buffers[bufferIndexToCount].data.length / (stride);
	            offset2 += indexBufferData.length;
	        }
	    }
	    return geometryOut;
	};
	var Quad = (function (Geometry$$1) {
	    function Quad()
	    {
	        Geometry$$1.call(this);
	        this.addAttribute('aVertexPosition', [
	            0, 0,
	            1, 0,
	            1, 1,
	            0, 1 ])
	            .addIndex([0, 1, 3, 2]);
	    }
	    if ( Geometry$$1 ) Quad.__proto__ = Geometry$$1;
	    Quad.prototype = Object.create( Geometry$$1 && Geometry$$1.prototype );
	    Quad.prototype.constructor = Quad;
	    return Quad;
	}(Geometry));
	var QuadUv = (function (Geometry$$1) {
	    function QuadUv()
	    {
	        Geometry$$1.call(this);
	        this.vertices = new Float32Array([
	            -1, -1,
	            1, -1,
	            1, 1,
	            -1, 1 ]);
	        this.uvs = new Float32Array([
	            0, 0,
	            1, 0,
	            1, 1,
	            0, 1 ]);
	        this.vertexBuffer = new Buffer(this.vertices);
	        this.uvBuffer = new Buffer(this.uvs);
	        this.addAttribute('aVertexPosition', this.vertexBuffer)
	            .addAttribute('aTextureCoord', this.uvBuffer)
	            .addIndex([0, 1, 2, 0, 2, 3]);
	    }
	    if ( Geometry$$1 ) QuadUv.__proto__ = Geometry$$1;
	    QuadUv.prototype = Object.create( Geometry$$1 && Geometry$$1.prototype );
	    QuadUv.prototype.constructor = QuadUv;
	    QuadUv.prototype.map = function map (targetTextureFrame, destinationFrame)
	    {
	        var x = 0;
	        var y = 0;
	        this.uvs[0] = x;
	        this.uvs[1] = y;
	        this.uvs[2] = x + (destinationFrame.width / targetTextureFrame.width);
	        this.uvs[3] = y;
	        this.uvs[4] = x + (destinationFrame.width / targetTextureFrame.width);
	        this.uvs[5] = y + (destinationFrame.height / targetTextureFrame.height);
	        this.uvs[6] = x;
	        this.uvs[7] = y + (destinationFrame.height / targetTextureFrame.height);
	        x = destinationFrame.x;
	        y = destinationFrame.y;
	        this.vertices[0] = x;
	        this.vertices[1] = y;
	        this.vertices[2] = x + destinationFrame.width;
	        this.vertices[3] = y;
	        this.vertices[4] = x + destinationFrame.width;
	        this.vertices[5] = y + destinationFrame.height;
	        this.vertices[6] = x;
	        this.vertices[7] = y + destinationFrame.height;
	        this.invalidate();
	        return this;
	    };
	    QuadUv.prototype.invalidate = function invalidate ()
	    {
	        this.vertexBuffer._updateID++;
	        this.uvBuffer._updateID++;
	        return this;
	    };
	    return QuadUv;
	}(Geometry));
	function calculateScreenSpaceMatrix(outputMatrix, filterArea, textureSize)
	{
	    var mappedMatrix = outputMatrix.identity();
	    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);
	    mappedMatrix.scale(textureSize.width, textureSize.height);
	    return mappedMatrix;
	}
	function calculateSpriteMatrix(outputMatrix, filterArea, textureSize, sprite)
	{
	    var orig = sprite._texture.orig;
	    var mappedMatrix = outputMatrix.set(textureSize.width, 0, 0, textureSize.height, filterArea.x, filterArea.y);
	    var worldTransform = sprite.worldTransform.copyTo(math.Matrix.TEMP_MATRIX);
	    worldTransform.invert();
	    mappedMatrix.prepend(worldTransform);
	    mappedMatrix.scale(1.0 / orig.width, 1.0 / orig.height);
	    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
	    return mappedMatrix;
	}
	var UID$2 = 0;
	var UniformGroup = function UniformGroup(uniforms, _static)
	{
	    this.uniforms = uniforms;
	    this.group = true;
	    this.syncUniforms = {};
	    this.dirtyId = 0;
	    this.id = UID$2++;
	    this.static = !!_static;
	};
	UniformGroup.prototype.update = function update ()
	{
	    this.dirtyId++;
	};
	UniformGroup.prototype.add = function add (name, uniforms, _static)
	{
	    this.uniforms[name] = new UniformGroup(uniforms, _static);
	};
	UniformGroup.from = function from (uniforms, _static)
	{
	    return new UniformGroup(uniforms, _static);
	};
	var FilterState = function FilterState()
	{
	    this.renderTexture = null;
	    this.target = null;
	    this.legacy = false;
	    this.resolution = 1;
	    this.sourceFrame = new math.Rectangle();
	    this.destinationFrame = new math.Rectangle();
	    this.filters = [];
	};
	FilterState.prototype.clear = function clear ()
	{
	    this.target = null;
	    this.filters = null;
	    this.renderTexture = null;
	};
	var screenKey = 'screen';
	var FilterSystem = (function (System$$1) {
	    function FilterSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.texturePool = {};
	        this.statePool = [];
	        this.quad = new Quad();
	        this.quadUv = new QuadUv();
	        this.tempRect = new math.Rectangle();
	        this.activeState = {};
	        this.globalUniforms = new UniformGroup({
	            outputFrame: this.tempRect,
	            inputSize: new Float32Array(4),
	            inputPixel: new Float32Array(4),
	            inputClamp: new Float32Array(4),
	            resolution: 1,
	            filterArea: new Float32Array(4),
	            filterClamp: new Float32Array(4),
	        }, true);
	        this._pixelsWidth = renderer.view.width;
	        this._pixelsHeight = renderer.view.height;
	    }
	    if ( System$$1 ) FilterSystem.__proto__ = System$$1;
	    FilterSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    FilterSystem.prototype.constructor = FilterSystem;
	    FilterSystem.prototype.push = function push (target, filters)
	    {
	        var renderer = this.renderer;
	        var filterStack = this.renderer.renderTexture.defaultFilterStack;
	        var state = this.statePool.pop() || new FilterState();
	        var resolution = filters[0].resolution;
	        var padding = filters[0].padding;
	        var autoFit = filters[0].autoFit;
	        var legacy = filters[0].legacy;
	        for (var i = 1; i < filters.length; i++)
	        {
	            var filter =  filters[i];
	            resolution = Math.min(resolution, filter.resolution);
	            padding = Math.max(padding, filter.padding);
	            autoFit = autoFit || filter.autoFit;
	            legacy = legacy || filter.legacy;
	        }
	        filterStack.push(state);
	        state.resolution = resolution;
	        state.legacy = legacy;
	        state.target = target;
	        state.sourceFrame = target.filterArea || target.getBounds(true);
	        state.sourceFrame.pad(padding);
	        if (autoFit)
	        {
	            state.sourceFrame.fit(this.renderer.renderTexture.destinationFrame);
	        }
	        state.sourceFrame.ceil(resolution);
	        state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution);
	        state.filters = filters;
	        state.destinationFrame.width = state.renderTexture.width;
	        state.destinationFrame.height = state.renderTexture.height;
	        state.renderTexture.filterFrame = state.sourceFrame;
	        renderer.renderTexture.bind(state.renderTexture, state.sourceFrame);
	        renderer.renderTexture.clear();
	    };
	    FilterSystem.prototype.pop = function pop ()
	    {
	        var this$1 = this;
	        var renderer = this.renderer;
	        var filterStack = renderer.renderTexture.defaultFilterStack;
	        var state = filterStack.pop();
	        var filters = state.filters;
	        this.activeState = state;
	        var globalUniforms = this.globalUniforms.uniforms;
	        globalUniforms.outputFrame = state.sourceFrame;
	        globalUniforms.resolution = state.resolution;
	        var inputSize = globalUniforms.inputSize;
	        var inputPixel = globalUniforms.inputPixel;
	        var inputClamp = globalUniforms.inputClamp;
	        inputSize[0] = state.destinationFrame.width;
	        inputSize[1] = state.destinationFrame.height;
	        inputSize[2] = 1.0 / inputSize[0];
	        inputSize[3] = 1.0 / inputSize[1];
	        inputPixel[0] = inputSize[0] * state.resolution;
	        inputPixel[1] = inputSize[1] * state.resolution;
	        inputPixel[2] = 1.0 / inputPixel[0];
	        inputPixel[3] = 1.0 / inputPixel[1];
	        inputClamp[0] = 0.5 * inputPixel[2];
	        inputClamp[1] = 0.5 * inputPixel[3];
	        inputClamp[2] = (state.sourceFrame.width * inputSize[2]) - (0.5 * inputPixel[2]);
	        inputClamp[3] = (state.sourceFrame.height * inputSize[3]) - (0.5 * inputPixel[3]);
	        if (state.legacy)
	        {
	            var filterArea = globalUniforms.filterArea;
	            filterArea[0] = state.destinationFrame.width;
	            filterArea[1] = state.destinationFrame.height;
	            filterArea[2] = state.sourceFrame.x;
	            filterArea[3] = state.sourceFrame.y;
	            globalUniforms.filterClamp = globalUniforms.inputClamp;
	        }
	        this.globalUniforms.update();
	        var lastState = filterStack[filterStack.length - 1];
	        if (filters.length === 1)
	        {
	            filters[0].apply(this, state.renderTexture, lastState.renderTexture, false, state);
	            this.returnFilterTexture(state.renderTexture);
	        }
	        else
	        {
	            var flip = state.renderTexture;
	            var flop = this.getOptimalFilterTexture(
	                flip.width,
	                flip.height,
	                state.resolution
	            );
	            flop.filterFrame = flip.filterFrame;
	            var i = 0;
	            for (i = 0; i < filters.length - 1; ++i)
	            {
	                filters[i].apply(this$1, flip, flop, true, state);
	                var t = flip;
	                flip = flop;
	                flop = t;
	            }
	            filters[i].apply(this, flip, lastState.renderTexture, false, state);
	            this.returnFilterTexture(flip);
	            this.returnFilterTexture(flop);
	        }
	        state.clear();
	        this.statePool.push(state);
	    };
	    FilterSystem.prototype.applyFilter = function applyFilter (filter, input, output, clear)
	    {
	        var renderer = this.renderer;
	        renderer.renderTexture.bind(output, output ? output.filterFrame : null);
	        if (clear)
	        {
	            renderer.renderTexture.clear();
	        }
	        filter.uniforms.uSampler = input;
	        filter.uniforms.filterGlobals = this.globalUniforms;
	        renderer.state.setState(filter.state);
	        renderer.shader.bind(filter);
	        if (filter.legacy)
	        {
	            this.quadUv.map(input._frame, input.filterFrame);
	            renderer.geometry.bind(this.quadUv);
	            renderer.geometry.draw(constants.DRAW_MODES.TRIANGLES);
	        }
	        else
	        {
	            renderer.geometry.bind(this.quad);
	            renderer.geometry.draw(constants.DRAW_MODES.TRIANGLE_STRIP);
	        }
	    };
	    FilterSystem.prototype.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix$$1 (outputMatrix)
	    {
	        var currentState = this.activeState;
	        return calculateScreenSpaceMatrix(
	            outputMatrix,
	            currentState.sourceFrame,
	            currentState.destinationFrame
	        );
	    };
	    FilterSystem.prototype.calculateSpriteMatrix = function calculateSpriteMatrix$$1 (outputMatrix, sprite)
	    {
	        var currentState = this.activeState;
	        return calculateSpriteMatrix(
	            outputMatrix,
	            currentState.sourceFrame,
	            currentState.destinationFrame,
	            sprite
	        );
	    };
	    FilterSystem.prototype.destroy = function destroy (contextLost)
	    {
	        if ( contextLost === void 0 ) contextLost = false;
	        if (!contextLost)
	        {
	            this.emptyPool();
	        }
	        else
	        {
	            this.texturePool = {};
	        }
	    };
	    FilterSystem.prototype.getOptimalFilterTexture = function getOptimalFilterTexture (minWidth, minHeight, resolution)
	    {
	        if ( resolution === void 0 ) resolution = 1;
	        var key = screenKey;
	        minWidth *= resolution;
	        minHeight *= resolution;
	        if (minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight)
	        {
	            minWidth = bitTwiddle.nextPow2(minWidth);
	            minHeight = bitTwiddle.nextPow2(minHeight);
	            key = ((minWidth & 0xFFFF) << 16) | (minHeight & 0xFFFF);
	        }
	        if (!this.texturePool[key])
	        {
	            this.texturePool[key] = [];
	        }
	        var renderTexture = this.texturePool[key].pop();
	        if (!renderTexture)
	        {
	            renderTexture = RenderTexture.create({
	                width: minWidth / resolution,
	                height: minHeight / resolution,
	                resolution: resolution,
	            });
	        }
	        renderTexture.filterPoolKey = key;
	        return renderTexture;
	    };
	    FilterSystem.prototype.getFilterTexture = function getFilterTexture (resolution)
	    {
	        var rt = this.activeState.renderTexture;
	        var filterTexture = this.getOptimalFilterTexture(rt.width, rt.height, resolution || rt.baseTexture.resolution);
	        filterTexture.filterFrame = rt.filterFrame;
	        return filterTexture;
	    };
	    FilterSystem.prototype.returnFilterTexture = function returnFilterTexture (renderTexture)
	    {
	        var key = renderTexture.filterPoolKey;
	        renderTexture.filterFrame = null;
	        this.texturePool[key].push(renderTexture);
	    };
	    FilterSystem.prototype.emptyPool = function emptyPool ()
	    {
	        var this$1 = this;
	        for (var i in this$1.texturePool)
	        {
	            var textures = this$1.texturePool[i];
	            if (textures)
	            {
	                for (var j = 0; j < textures.length; j++)
	                {
	                    textures[j].destroy(true);
	                }
	            }
	        }
	        this.texturePool = {};
	    };
	    FilterSystem.prototype.resize = function resize ()
	    {
	        var textures = this.texturePool[screenKey];
	        if (textures)
	        {
	            for (var j = 0; j < textures.length; j++)
	            {
	                textures[j].destroy(true);
	            }
	        }
	        this.texturePool[screenKey] = [];
	        this._pixelsWidth = this.renderer.view.width;
	        this._pixelsHeight = this.renderer.view.height;
	    };
	    return FilterSystem;
	}(System));
	var ObjectRenderer = (function (System$$1) {
	    function ObjectRenderer () {
	        System$$1.apply(this, arguments);
	    }
	    if ( System$$1 ) ObjectRenderer.__proto__ = System$$1;
	    ObjectRenderer.prototype = Object.create( System$$1 && System$$1.prototype );
	    ObjectRenderer.prototype.constructor = ObjectRenderer;
	    ObjectRenderer.prototype.start = function start ()
	    {
	    };
	    ObjectRenderer.prototype.stop = function stop ()
	    {
	        this.flush();
	    };
	    ObjectRenderer.prototype.flush = function flush ()
	    {
	    };
	    ObjectRenderer.prototype.render = function render (object)
	    {
	    };
	    return ObjectRenderer;
	}(System));
	var BatchSystem = (function (System$$1) {
	    function BatchSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.emptyRenderer = new ObjectRenderer(renderer);
	        this.currentRenderer = this.emptyRenderer;
	    }
	    if ( System$$1 ) BatchSystem.__proto__ = System$$1;
	    BatchSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    BatchSystem.prototype.constructor = BatchSystem;
	    BatchSystem.prototype.setObjectRenderer = function setObjectRenderer (objectRenderer)
	    {
	        if (this.currentRenderer === objectRenderer)
	        {
	            return;
	        }
	        this.currentRenderer.stop();
	        this.currentRenderer = objectRenderer;
	        this.renderer.state.setState(objectRenderer.state);
	        this.currentRenderer.start();
	    };
	    BatchSystem.prototype.flush = function flush ()
	    {
	        this.setObjectRenderer(this.emptyRenderer);
	    };
	    BatchSystem.prototype.reset = function reset ()
	    {
	        this.setObjectRenderer(this.emptyRenderer);
	    };
	    return BatchSystem;
	}(System));
	settings_1.settings.PREFER_ENV = constants.ENV.WEBGL2;
	var CONTEXT_UID = 0;
	var ContextSystem = (function (System$$1) {
	    function ContextSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.webGLVersion = 1;
	        this.extensions = {};
	        this.handleContextLost = this.handleContextLost.bind(this);
	        this.handleContextRestored = this.handleContextRestored.bind(this);
	        renderer.view.addEventListener('webglcontextlost', this.handleContextLost, false);
	        renderer.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);
	    }
	    if ( System$$1 ) ContextSystem.__proto__ = System$$1;
	    ContextSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    ContextSystem.prototype.constructor = ContextSystem;
	    var prototypeAccessors = { isLost: { configurable: true } };
	    prototypeAccessors.isLost.get = function ()
	    {
	        return (!this.gl || this.gl.isContextLost());
	    };
	    ContextSystem.prototype.contextChange = function contextChange (gl)
	    {
	        this.gl = gl;
	        if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context'))
	        {
	            gl.getExtension('WEBGL_lose_context').restoreContext();
	        }
	    };
	    ContextSystem.prototype.initFromContext = function initFromContext (gl)
	    {
	        this.gl = gl;
	        this.validateContext(gl);
	        this.renderer.gl = gl;
	        this.renderer.CONTEXT_UID = CONTEXT_UID++;
	        this.renderer.runners.contextChange.run(gl);
	    };
	    ContextSystem.prototype.initFromOptions = function initFromOptions (options)
	    {
	        var gl = this.createContext(this.renderer.view, options);
	        this.initFromContext(gl);
	    };
	    ContextSystem.prototype.createContext = function createContext (canvas, options)
	    {
	        var gl;
	        if (settings_1.settings.PREFER_ENV >= constants.ENV.WEBGL2)
	        {
	            gl = canvas.getContext('webgl2', options);
	        }
	        if (gl)
	        {
	            this.webGLVersion = 2;
	        }
	        else
	        {
	            this.webGLVersion = 1;
	            gl = canvas.getContext('webgl', options)
	            || canvas.getContext('experimental-webgl', options);
	            if (!gl)
	            {
	                throw new Error('This browser does not support webGL. Try using the canvas renderer');
	            }
	        }
	        this.gl = gl;
	        this.getExtensions();
	        return gl;
	    };
	    ContextSystem.prototype.getExtensions = function getExtensions ()
	    {
	        var ref = this;
	        var gl = ref.gl;
	        if (this.webGLVersion === 1)
	        {
	            Object.assign(this.extensions, {
	                drawBuffers: gl.getExtension('WEBGL_draw_buffers'),
	                depthTexture: gl.getExtension('WEBKIT_WEBGL_depth_texture'),
	                floatTexture: gl.getExtension('OES_texture_float'),
	                loseContext: gl.getExtension('WEBGL_lose_context'),
	                vertexArrayObject: gl.getExtension('OES_vertex_array_object')
	                    || gl.getExtension('MOZ_OES_vertex_array_object')
	                    || gl.getExtension('WEBKIT_OES_vertex_array_object'),
	            });
	        }
	    };
	    ContextSystem.prototype.handleContextLost = function handleContextLost (event)
	    {
	        event.preventDefault();
	    };
	    ContextSystem.prototype.handleContextRestored = function handleContextRestored ()
	    {
	        this.renderer.runners.contextChange.run(this.gl);
	    };
	    ContextSystem.prototype.destroy = function destroy ()
	    {
	        var view = this.renderer.view;
	        view.removeEventListener('webglcontextlost', this.handleContextLost);
	        view.removeEventListener('webglcontextrestored', this.handleContextRestored);
	        this.gl.useProgram(null);
	        if (this.extensions.loseContext)
	        {
	            this.extensions.loseContext.loseContext();
	        }
	    };
	    ContextSystem.prototype.postrender = function postrender ()
	    {
	        this.gl.flush();
	    };
	    ContextSystem.prototype.validateContext = function validateContext (gl)
	    {
	        var attributes = gl.getContextAttributes();
	        if (!attributes.stencil)
	        {
	            console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
	        }
	    };
	    Object.defineProperties( ContextSystem.prototype, prototypeAccessors );
	    return ContextSystem;
	}(System));
	var FramebufferSystem = (function (System$$1) {
	    function FramebufferSystem () {
	        System$$1.apply(this, arguments);
	    }
	    if ( System$$1 ) FramebufferSystem.__proto__ = System$$1;
	    FramebufferSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    FramebufferSystem.prototype.constructor = FramebufferSystem;
	    var prototypeAccessors = { size: { configurable: true } };
	    FramebufferSystem.prototype.contextChange = function contextChange ()
	    {
	        this.gl = this.renderer.gl;
	        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	        this.current = null;
	        this.viewport = new math.Rectangle();
	        this.drawBufferExtension = this.renderer.context.extensions.drawBuffers;
	    };
	    FramebufferSystem.prototype.bind = function bind (framebuffer, frame)
	    {
	        var this$1 = this;
	        var ref = this;
	        var gl = ref.gl;
	        this.current = framebuffer;
	        if (framebuffer)
	        {
	            var fbo = framebuffer.glFrameBuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);
	            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
	            if (fbo.dirtyId !== framebuffer.dirtyId)
	            {
	                fbo.dirtyId = framebuffer.dirtyId;
	                if (fbo.dirtyFormat !== framebuffer.dirtyFormat)
	                {
	                    fbo.dirtyFormat = framebuffer.dirtyFormat;
	                    this.updateFramebuffer(framebuffer);
	                }
	                else if (fbo.dirtySize !== framebuffer.dirtySize)
	                {
	                    fbo.dirtySize = framebuffer.dirtySize;
	                    this.resizeFramebuffer(framebuffer);
	                }
	            }
	            for (var i = 0; i < framebuffer.colorTextures.length; i++)
	            {
	                if (framebuffer.colorTextures[i].texturePart)
	                {
	                    this$1.renderer.texture.unbind(framebuffer.colorTextures[i].texture);
	                }
	                else
	                {
	                    this$1.renderer.texture.unbind(framebuffer.colorTextures[i]);
	                }
	            }
	            if (framebuffer.depthTexture)
	            {
	                this.renderer.texture.unbind(framebuffer.depthTexture);
	            }
	            if (frame)
	            {
	                this.setViewport(frame.x, frame.y, frame.width, frame.height);
	            }
	            else
	            {
	                this.setViewport(0, 0, framebuffer.width, framebuffer.height);
	            }
	        }
	        else
	        {
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	            if (frame)
	            {
	                this.setViewport(frame.x, frame.y, frame.width, frame.height);
	            }
	            else
	            {
	                this.setViewport(0, 0, this.renderer.width, this.renderer.height);
	            }
	        }
	    };
	    FramebufferSystem.prototype.setViewport = function setViewport (x, y, width, height)
	    {
	        var v = this.viewport;
	        if (v.width !== width || v.height !== height || v.x !== x || v.y !== y)
	        {
	            v.x = x;
	            v.y = y;
	            v.width = width;
	            v.height = height;
	            this.gl.viewport(x, y, width, height);
	        }
	    };
	    prototypeAccessors.size.get = function ()
	    {
	        if (this.current)
	        {
	            return { x: 0, y: 0, width: this.current.width, height: this.current.height };
	        }
	        return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
	    };
	    FramebufferSystem.prototype.clear = function clear (r, g, b, a)
	    {
	        var ref = this;
	        var gl = ref.gl;
	        gl.clearColor(r, g, b, a);
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	    };
	    FramebufferSystem.prototype.initFramebuffer = function initFramebuffer (framebuffer)
	    {
	        var ref = this;
	        var gl = ref.gl;
	        var fbo = {
	            framebuffer: gl.createFramebuffer(),
	            stencil: null,
	            dirtyId: 0,
	            dirtyFormat: 0,
	            dirtySize: 0,
	        };
	        framebuffer.glFrameBuffers[this.CONTEXT_UID] = fbo;
	        return fbo;
	    };
	    FramebufferSystem.prototype.resizeFramebuffer = function resizeFramebuffer (framebuffer)
	    {
	        var ref = this;
	        var gl = ref.gl;
	        if (framebuffer.stencil || framebuffer.depth)
	        {
	            gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
	        }
	    };
	    FramebufferSystem.prototype.updateFramebuffer = function updateFramebuffer (framebuffer)
	    {
	        var this$1 = this;
	        var ref = this;
	        var gl = ref.gl;
	        var fbo = framebuffer.glFrameBuffers[this.CONTEXT_UID];
	        var colorTextures = framebuffer.colorTextures;
	        var count = colorTextures.length;
	        if (!this.drawBufferExtension)
	        {
	            count = Math.min(count, 1);
	        }
	        var activeTextures = [];
	        for (var i = 0; i < count; i++)
	        {
	            var texture = framebuffer.colorTextures[i];
	            if (texture.texturePart)
	            {
	                this$1.renderer.texture.bind(texture.texture, 0);
	                gl.framebufferTexture2D(gl.FRAMEBUFFER,
	                    gl.COLOR_ATTACHMENT0 + i,
	                    gl.TEXTURE_CUBE_MAP_NEGATIVE_X + texture.side,
	                    texture.texture._glTextures[this$1.CONTEXT_UID].texture,
	                    0);
	            }
	            else
	            {
	                this$1.renderer.texture.bind(texture, 0);
	                gl.framebufferTexture2D(gl.FRAMEBUFFER,
	                    gl.COLOR_ATTACHMENT0 + i,
	                    gl.TEXTURE_2D,
	                    texture._glTextures[this$1.CONTEXT_UID].texture,
	                    0);
	            }
	            activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
	        }
	        if (this.drawBufferExtension && activeTextures.length > 1)
	        {
	            this.drawBufferExtension.drawBuffersWEBGL(activeTextures);
	        }
	        if (framebuffer.depthTexture)
	        {
	            var depthTextureExt = this.renderer.context.extensions.depthTexture;
	            if (depthTextureExt)
	            {
	                var depthTexture = framebuffer.depthTexture;
	                this.renderer.texture.bind(depthTexture, 0);
	                gl.framebufferTexture2D(gl.FRAMEBUFFER,
	                    gl.DEPTH_ATTACHMENT,
	                    gl.TEXTURE_2D,
	                    depthTexture._glTextures[this.CONTEXT_UID].texture,
	                    0);
	            }
	        }
	        if (framebuffer.stencil || framebuffer.depth)
	        {
	            fbo.stencil = gl.createRenderbuffer();
	            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
	            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
	            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
	        }
	    };
	    Object.defineProperties( FramebufferSystem.prototype, prototypeAccessors );
	    return FramebufferSystem;
	}(System));
	var GLBuffer = function GLBuffer(buffer)
	{
	    this.buffer = buffer;
	    this.updateID = -1;
	    this.byteLength = -1;
	};
	var byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };
	var GeometrySystem = (function (System$$1) {
	    function GeometrySystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this._activeGeometry = null;
	        this._activeVao = null;
	        this.hasVao = true;
	        this.hasInstance = true;
	        this.cache = {};
	    }
	    if ( System$$1 ) GeometrySystem.__proto__ = System$$1;
	    GeometrySystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    GeometrySystem.prototype.constructor = GeometrySystem;
	    GeometrySystem.prototype.contextChange = function contextChange ()
	    {
	        var gl = this.gl = this.renderer.gl;
	        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	        if (!gl.createVertexArray)
	        {
	            var nativeVaoExtension = this.renderer.context.extensions.vertexArrayObject;
	            if (settings_1.settings.PREFER_ENV === constants.ENV.WEBGL_LEGACY)
	            {
	                nativeVaoExtension = null;
	            }
	            if (nativeVaoExtension)
	            {
	                gl.createVertexArray = function () { return nativeVaoExtension.createVertexArrayOES(); };
	                gl.bindVertexArray = function (vao) { return nativeVaoExtension.bindVertexArrayOES(vao); };
	                gl.deleteVertexArray = function (vao) { return nativeVaoExtension.deleteVertexArrayOES(vao); };
	            }
	            else
	            {
	                this.hasVao = false;
	                gl.createVertexArray = function () {
	                };
	                gl.bindVertexArray = function () {
	                };
	                gl.deleteVertexArray = function () {
	                };
	            }
	        }
	        if (!gl.vertexAttribDivisor)
	        {
	            var instanceExt = gl.getExtension('ANGLE_instanced_arrays');
	            if (instanceExt)
	            {
	                gl.vertexAttribDivisor = function (a, b) { return instanceExt.vertexAttribDivisorANGLE(a, b); };
	                gl.drawElementsInstanced = function (a, b, c, d, e) { return instanceExt.drawElementsInstancedANGLE(a, b, c, d, e); };
	                gl.drawArraysInstanced = function (a, b, c, d) { return instanceExt.drawArraysInstancedANGLE(a, b, c, d); };
	            }
	            else
	            {
	                this.hasInstance = false;
	            }
	        }
	    };
	    GeometrySystem.prototype.bind = function bind (geometry, shader)
	    {
	        shader = shader || this.renderer.shader.shader;
	        var ref = this;
	        var gl = ref.gl;
	        var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
	        if (!vaos)
	        {
	            geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
	        }
	        var vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader.program);
	        this._activeGeometry = geometry;
	        if (this._activeVao !== vao)
	        {
	            this._activeVao = vao;
	            if (this.hasVao)
	            {
	                gl.bindVertexArray(vao);
	            }
	            else
	            {
	                this.activateVao(geometry, shader.program);
	            }
	        }
	        this.updateBuffers();
	    };
	    GeometrySystem.prototype.reset = function reset ()
	    {
	        this.unbind();
	    };
	    GeometrySystem.prototype.updateBuffers = function updateBuffers ()
	    {
	        var this$1 = this;
	        var geometry = this._activeGeometry;
	        var ref = this;
	        var gl = ref.gl;
	        for (var i = 0; i < geometry.buffers.length; i++)
	        {
	            var buffer = geometry.buffers[i];
	            var glBuffer = buffer._glBuffers[this$1.CONTEXT_UID];
	            if (buffer._updateID !== glBuffer.updateID)
	            {
	                glBuffer.updateID = buffer._updateID;
	                var type = buffer.index ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
	                var drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;
	                gl.bindBuffer(type, glBuffer.buffer);
	                if (glBuffer.byteLength >= buffer.data.byteLength)
	                {
	                    gl.bufferSubData(type, 0, buffer.data);
	                }
	                else
	                {
	                    glBuffer.byteLength = buffer.data.byteLength;
	                    gl.bufferData(type, buffer.data, drawType);
	                }
	            }
	        }
	    };
	    GeometrySystem.prototype.checkCompatibility = function checkCompatibility (geometry, program)
	    {
	        var geometryAttributes = geometry.attributes;
	        var shaderAttributes = program.attributeData;
	        for (var j in shaderAttributes)
	        {
	            if (!geometryAttributes[j])
	            {
	                throw new Error(("shader and geometry incompatible, geometry missing the \"" + j + "\" attribute"));
	            }
	        }
	    };
	    GeometrySystem.prototype.getSignature = function getSignature (geometry, program)
	    {
	        var attribs = geometry.attributes;
	        var shaderAttributes = program.attributeData;
	        var strings = [geometry.id];
	        for (var i in attribs)
	        {
	            if (shaderAttributes[i])
	            {
	                strings.push(i);
	            }
	        }
	        return strings.join('-');
	    };
	    GeometrySystem.prototype.initGeometryVao = function initGeometryVao (geometry, program)
	    {
	        this.checkCompatibility(geometry, program);
	        var gl = this.gl;
	        var CONTEXT_UID = this.CONTEXT_UID;
	        var signature = this.getSignature(geometry, program);
	        if (this.cache[signature])
	        {
	            var vao$1 = this.cache[signature];
	            geometry.glVertexArrayObjects[this.CONTEXT_UID][program.id] = vao$1;
	            return vao$1;
	        }
	        var buffers = geometry.buffers;
	        var attributes = geometry.attributes;
	        var tempStride = {};
	        var tempStart = {};
	        for (var j in buffers)
	        {
	            tempStride[j] = 0;
	            tempStart[j] = 0;
	        }
	        for (var j$1 in attributes)
	        {
	            if (!attributes[j$1].size && program.attributeData[j$1])
	            {
	                attributes[j$1].size = program.attributeData[j$1].size;
	            }
	            tempStride[attributes[j$1].buffer] += attributes[j$1].size * byteSizeMap$1[attributes[j$1].type];
	        }
	        for (var j$2 in attributes)
	        {
	            var attribute = attributes[j$2];
	            var attribSize = attribute.size;
	            if (attribute.stride === undefined)
	            {
	                if (tempStride[attribute.buffer] === attribSize * byteSizeMap$1[attribute.type])
	                {
	                    attribute.stride = 0;
	                }
	                else
	                {
	                    attribute.stride = tempStride[attribute.buffer];
	                }
	            }
	            if (attribute.start === undefined)
	            {
	                attribute.start = tempStart[attribute.buffer];
	                tempStart[attribute.buffer] += attribSize * byteSizeMap$1[attribute.type];
	            }
	        }
	        for (var i = 0; i < buffers.length; i++)
	        {
	            var buffer = buffers[i];
	            if (!buffer._glBuffers[CONTEXT_UID])
	            {
	                buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
	            }
	        }
	        var vao = gl.createVertexArray();
	        gl.bindVertexArray(vao);
	        this.activateVao(geometry, program);
	        gl.bindVertexArray(null);
	        geometry.glVertexArrayObjects[this.CONTEXT_UID][program.id] = vao;
	        return vao;
	    };
	    GeometrySystem.prototype.activateVao = function activateVao (geometry, program)
	    {
	        var this$1 = this;
	        var gl = this.gl;
	        var CONTEXT_UID = this.CONTEXT_UID;
	        var buffers = geometry.buffers;
	        var attributes = geometry.attributes;
	        if (geometry.indexBuffer)
	        {
	            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indexBuffer._glBuffers[CONTEXT_UID].buffer);
	        }
	        var lastBuffer = null;
	        for (var j in attributes)
	        {
	            var attribute = attributes[j];
	            var buffer = buffers[attribute.buffer];
	            var glBuffer = buffer._glBuffers[CONTEXT_UID];
	            if (program.attributeData[j])
	            {
	                if (lastBuffer !== glBuffer)
	                {
	                    gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer.buffer);
	                    lastBuffer = glBuffer;
	                }
	                var location = program.attributeData[j].location;
	                gl.enableVertexAttribArray(location);
	                gl.vertexAttribPointer(location,
	                    attribute.size,
	                    attribute.type || gl.FLOAT,
	                    attribute.normalized,
	                    attribute.stride,
	                    attribute.start);
	                if (attribute.instance)
	                {
	                    if (this$1.hasInstance)
	                    {
	                        gl.vertexAttribDivisor(location, 1);
	                    }
	                    else
	                    {
	                        throw new Error('geometry error, GPU Instancing is not supported on this device');
	                    }
	                }
	            }
	        }
	    };
	    GeometrySystem.prototype.draw = function draw (type, size, start, instanceCount)
	    {
	        var ref = this;
	        var gl = ref.gl;
	        var geometry = this._activeGeometry;
	        if (geometry.indexBuffer)
	        {
	            if (geometry.instanced)
	            {
	                gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2, instanceCount || 1);
	            }
	            else
	            {
	                gl.drawElements(type, size || geometry.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2);
	            }
	        }
	        else if (geometry.instanced)
	        {
	            gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
	        }
	        else
	        {
	            gl.drawArrays(type, start, size || geometry.getSize());
	        }
	        return this;
	    };
	    GeometrySystem.prototype.unbind = function unbind ()
	    {
	        this.gl.bindVertexArray(null);
	        this._activeVao = null;
	        this._activeGeometry = null;
	    };
	    return GeometrySystem;
	}(System));
	function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations)
	{
	    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
	    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
	    var program = gl.createProgram();
	    gl.attachShader(program, glVertShader);
	    gl.attachShader(program, glFragShader);
	    if (attributeLocations)
	    {
	        for (var i in attributeLocations)
	        {
	            gl.bindAttribLocation(program, attributeLocations[i], i);
	        }
	    }
	    gl.linkProgram(program);
	    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
	    {
	        console.error('Pixi.js Error: Could not initialize shader.');
	        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
	        console.error('gl.getError()', gl.getError());
	        if (gl.getProgramInfoLog(program) !== '')
	        {
	            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
	        }
	        gl.deleteProgram(program);
	        program = null;
	    }
	    gl.deleteShader(glVertShader);
	    gl.deleteShader(glFragShader);
	    return program;
	}
	function compileShader(gl, type, src)
	{
	    var shader = gl.createShader(type);
	    gl.shaderSource(shader, src);
	    gl.compileShader(shader);
	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	    {
	        console.warn(src);
	        console.error(gl.getShaderInfoLog(shader));
	        return null;
	    }
	    return shader;
	}
	function defaultValue(type, size)
	{
	    switch (type)
	    {
	        case 'float':
	            return 0;
	        case 'vec2':
	            return new Float32Array(2 * size);
	        case 'vec3':
	            return new Float32Array(3 * size);
	        case 'vec4':
	            return new Float32Array(4 * size);
	        case 'int':
	        case 'sampler2D':
	        case 'sampler2DArray':
	            return 0;
	        case 'ivec2':
	            return new Int32Array(2 * size);
	        case 'ivec3':
	            return new Int32Array(3 * size);
	        case 'ivec4':
	            return new Int32Array(4 * size);
	        case 'bool':
	            return false;
	        case 'bvec2':
	            return booleanArray(2 * size);
	        case 'bvec3':
	            return booleanArray(3 * size);
	        case 'bvec4':
	            return booleanArray(4 * size);
	        case 'mat2':
	            return new Float32Array([1, 0,
	                0, 1]);
	        case 'mat3':
	            return new Float32Array([1, 0, 0,
	                0, 1, 0,
	                0, 0, 1]);
	        case 'mat4':
	            return new Float32Array([1, 0, 0, 0,
	                0, 1, 0, 0,
	                0, 0, 1, 0,
	                0, 0, 0, 1]);
	    }
	    return null;
	}
	function booleanArray(size)
	{
	    var array = new Array(size);
	    for (var i = 0; i < array.length; i++)
	    {
	        array[i] = false;
	    }
	    return array;
	}
	function setPrecision(src, precision)
	{
	    src = src.trim();
	    if (src.substring(0, 9) !== 'precision' && src.substring(0, 1) !== '#')
	    {
	        return ("precision " + precision + " float;\n" + src);
	    }
	    return src;
	}
	var GLSL_TO_SIZE = {
	    float:    1,
	    vec2:     2,
	    vec3:     3,
	    vec4:     4,
	    int:      1,
	    ivec2:    2,
	    ivec3:    3,
	    ivec4:    4,
	    bool:     1,
	    bvec2:    2,
	    bvec3:    3,
	    bvec4:    4,
	    mat2:     4,
	    mat3:     9,
	    mat4:     16,
	    sampler2D:  1,
	};
	function mapSize(type)
	{
	    return GLSL_TO_SIZE[type];
	}
	var GL_TABLE = null;
	var GL_TO_GLSL_TYPES = {
	    FLOAT:       'float',
	    FLOAT_VEC2:  'vec2',
	    FLOAT_VEC3:  'vec3',
	    FLOAT_VEC4:  'vec4',
	    INT:         'int',
	    INT_VEC2:    'ivec2',
	    INT_VEC3:    'ivec3',
	    INT_VEC4:    'ivec4',
	    BOOL:        'bool',
	    BOOL_VEC2:   'bvec2',
	    BOOL_VEC3:   'bvec3',
	    BOOL_VEC4:   'bvec4',
	    FLOAT_MAT2:  'mat2',
	    FLOAT_MAT3:  'mat3',
	    FLOAT_MAT4:  'mat4',
	    SAMPLER_2D:  'sampler2D',
	    SAMPLER_CUBE:  'samplerCube',
	    SAMPLER_2D_ARRAY:  'sampler2DArray',
	};
	function mapType(gl, type)
	{
	    if (!GL_TABLE)
	    {
	        var typeNames = Object.keys(GL_TO_GLSL_TYPES);
	        GL_TABLE = {};
	        for (var i = 0; i < typeNames.length; ++i)
	        {
	            var tn = typeNames[i];
	            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
	        }
	    }
	    return GL_TABLE[type];
	}
	var GLSL_TO_SINGLE_SETTERS_CACHED = {
	    float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
	    vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
	    vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
	    vec4:     'gl.uniform4f(location, v[0], v[1], v[2], v[3])',
	    int:      'gl.uniform1i(location, v)',
	    ivec2:    'gl.uniform2i(location, v[0], v[1])',
	    ivec3:    'gl.uniform3i(location, v[0], v[1], v[2])',
	    ivec4:    'gl.uniform4i(location, v[0], v[1], v[2], v[3])',
	    bool:     'gl.uniform1i(location, v)',
	    bvec2:    'gl.uniform2i(location, v[0], v[1])',
	    bvec3:    'gl.uniform3i(location, v[0], v[1], v[2])',
	    bvec4:    'gl.uniform4i(location, v[0], v[1], v[2], v[3])',
	    mat2:     'gl.uniformMatrix2fv(location, false, v)',
	    mat3:     'gl.uniformMatrix3fv(location, false, v)',
	    mat4:     'gl.uniformMatrix4fv(location, false, v)',
	    sampler2D:      'gl.uniform1i(location, v)',
	    samplerCube:    'gl.uniform1i(location, v)',
	    sampler2DArray: 'gl.uniform1i(location, v)',
	};
	var GLSL_TO_ARRAY_SETTERS = {
	    float:    "gl.uniform1fv(location, v)",
	    vec2:     "gl.uniform2fv(location, v)",
	    vec3:     "gl.uniform3fv(location, v)",
	    vec4:     'gl.uniform4fv(location, v)',
	    mat4:     'gl.uniformMatrix4fv(location, false, v)',
	    mat3:     'gl.uniformMatrix3fv(location, false, v)',
	    mat2:     'gl.uniformMatrix2fv(location, false, v)',
	    int:      'gl.uniform1iv(location, v)',
	    ivec2:    'gl.uniform2iv(location, v)',
	    ivec3:    'gl.uniform3iv(location, v)',
	    ivec4:    'gl.uniform4iv(location, v)',
	    bool:     'gl.uniform1iv(location, v)',
	    bvec2:    'gl.uniform2iv(location, v)',
	    bvec3:    'gl.uniform3iv(location, v)',
	    bvec4:    'gl.uniform4iv(location, v)',
	    sampler2D:      'gl.uniform1iv(location, v)',
	    samplerCube:    'gl.uniform1iv(location, v)',
	    sampler2DArray: 'gl.uniform1iv(location, v)',
	};
	function generateUniformsSync(group, uniformData)
	{
	    var textureCount = 0;
	    var func = "var v = null;\n    var cv = null\n    var gl = renderer.gl";
	    for (var i in group.uniforms)
	    {
	        var data = uniformData[i];
	        if (!data)
	        {
	            if (group.uniforms[i].group)
	            {
	                func += "\n                    renderer.shader.syncUniformGroup(uv." + i + ");\n                ";
	            }
	            continue;
	        }
	        if (data.type === 'float' && data.size === 1)
	        {
	            func += "\n            if(uv." + i + " !== ud." + i + ".value)\n            {\n                ud." + i + ".value = uv." + i + "\n                gl.uniform1f(ud." + i + ".location, uv." + i + ")\n            }\n";
	        }
	        else if ((data.type === 'sampler2D' || data.type === 'samplerCube' || data.type === 'sampler2DArray') && data.size === 1 && !data.isArray)
	        {
	            func += "\n            renderer.texture.bind(uv." + i + ", " + textureCount + ");\n\n            if(ud." + i + ".value !== " + textureCount + ")\n            {\n                ud." + i + ".value = " + textureCount + ";\n                gl.uniform1i(ud." + i + ".location, " + textureCount + ");\n; // eslint-disable-line max-len\n            }\n";
	            textureCount++;
	        }
	        else if (data.type === 'mat3' && data.size === 1)
	        {
	            if (group.uniforms[i].a !== undefined)
	            {
	                func += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ".toArray(true));\n                \n";
	            }
	            else
	            {
	                func += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ");\n                \n";
	            }
	        }
	        else if (data.type === 'vec2' && data.size === 1)
	        {
	            if (group.uniforms[i].x !== undefined)
	            {
	                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + i + ".location, v.x, v.y);\n                }\n";
	            }
	            else
	            {
	                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + i + ".location, v[0], v[1]);\n                }\n                \n";
	            }
	        }
	        else if (data.type === 'vec4' && data.size === 1)
	        {
	            if (group.uniforms[i].width !== undefined)
	            {
	                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + i + ".location, v.x, v.y, v.width, v.height)\n                }\n";
	            }
	            else
	            {
	                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + i + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n";
	            }
	        }
	        else
	        {
	            var templateType = (data.size === 1) ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;
	            var template =  templateType[data.type].replace('location', ("ud." + i + ".location"));
	            func += "\n            cv = ud." + i + ".value;\n            v = uv." + i + ";\n            " + template + ";\n";
	        }
	    }
	    return new Function('ud', 'uv', 'renderer', func);
	}
	var context = null;
	function getTestContext()
	{
	    if (!context)
	    {
	        var canvas = document.createElement('canvas');
	        var gl;
	        if (settings_1.settings.PREFER_ENV >= constants.ENV.WEBGL2)
	        {
	            gl = canvas.getContext('webgl2', {});
	        }
	        if (!gl)
	        {
	            gl = canvas.getContext('webgl', {})
	            || canvas.getContext('experimental-webgl', {});
	            if (!gl)
	            {
	                throw new Error('This browser does not support webGL. Try using the canvas renderer');
	            }
	            else
	            {
	                gl.getExtension('WEBGL_draw_buffers');
	            }
	        }
	        context = gl;
	        return gl;
	    }
	    return context;
	}
	var fragTemplate = [
	    'precision mediump float;',
	    'void main(void){',
	    'float test = 0.1;',
	    '%forloop%',
	    'gl_FragColor = vec4(0.0);',
	    '}' ].join('\n');
	function checkMaxIfStatementsInShader(maxIfs, gl)
	{
	    if (maxIfs === 0)
	    {
	        throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
	    }
	    var shader = gl.createShader(gl.FRAGMENT_SHADER);
	    while (true)
	    {
	        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
	        gl.shaderSource(shader, fragmentSrc);
	        gl.compileShader(shader);
	        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	        {
	            maxIfs = (maxIfs / 2) | 0;
	        }
	        else
	        {
	            break;
	        }
	    }
	    return maxIfs;
	}
	function generateIfTestSrc(maxIfs)
	{
	    var src = '';
	    for (var i = 0; i < maxIfs; ++i)
	    {
	        if (i > 0)
	        {
	            src += '\nelse ';
	        }
	        if (i < maxIfs - 1)
	        {
	            src += "if(test == " + i + ".0){}";
	        }
	    }
	    return src;
	}
	var defaultFragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
	var defaultVertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
	var UID$3 = 0;
	var Program = function Program(vertexSrc, fragmentSrc)
	{
	    this.vertexSrc = vertexSrc || Program.defaultVertexSrc;
	    this.fragmentSrc = fragmentSrc || Program.defaultFragmentSrc;
	    this.vertexSrc = setPrecision(this.vertexSrc, settings_1.settings.PRECISION_VERTEX);
	    this.fragmentSrc = setPrecision(this.fragmentSrc, settings_1.settings.PRECISION_FRAGMENT);
	    this.extractData(this.vertexSrc, this.fragmentSrc);
	    this.glPrograms = {};
	    this.syncUniforms = null;
	    this.id = UID$3++;
	};
	var staticAccessors = { defaultVertexSrc: { configurable: true },defaultFragmentSrc: { configurable: true } };
	Program.prototype.extractData = function extractData (vertexSrc, fragmentSrc)
	{
	    var gl = getTestContext();
	    if (gl)
	    {
	        var program = compileProgram(gl, vertexSrc, fragmentSrc);
	        this.attributeData = this.getAttributeData(program, gl);
	        this.uniformData = this.getUniformData(program, gl);
	        gl.deleteProgram(program);
	    }
	    else
	    {
	        this.uniformData = {};
	        this.attributeData = {};
	    }
	};
	Program.prototype.getAttributeData = function getAttributeData (program, gl)
	{
	    var attributes = {};
	    var attributesArray = [];
	    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	    for (var i = 0; i < totalAttributes; i++)
	    {
	        var attribData = gl.getActiveAttrib(program, i);
	        var type = mapType(gl, attribData.type);
	        var data = {
	            type: type,
	            name: attribData.name,
	            size: mapSize(type),
	            location: 0,
	        };
	        attributes[attribData.name] = data;
	        attributesArray.push(data);
	    }
	    attributesArray.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
	    for (var i$1 = 0; i$1 < attributesArray.length; i$1++)
	    {
	        attributesArray[i$1].location = i$1;
	    }
	    return attributes;
	};
	Program.prototype.getUniformData = function getUniformData (program, gl)
	{
	    var uniforms = {};
	    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	    for (var i = 0; i < totalUniforms; i++)
	    {
	        var uniformData = gl.getActiveUniform(program, i);
	        var name = uniformData.name.replace(/\[.*?\]/, '');
	        var isArray = uniformData.name.match(/\[.*?\]/, '');
	        var type = mapType(gl, uniformData.type);
	        uniforms[name] = {
	            type: type,
	            size: uniformData.size,
	            isArray:isArray,
	            value: defaultValue(type, uniformData.size),
	        };
	    }
	    return uniforms;
	};
	staticAccessors.defaultVertexSrc.get = function ()
	{
	    return defaultVertex;
	};
	staticAccessors.defaultFragmentSrc.get = function ()
	{
	    return defaultFragment;
	};
	Program.from = function from (vertexSrc, fragmentSrc)
	{
	    var key = vertexSrc + fragmentSrc;
	    var program = utils.ProgramCache[key];
	    if (!program)
	    {
	        utils.ProgramCache[key] = program = new Program(vertexSrc, fragmentSrc);
	    }
	    return program;
	};
	Object.defineProperties( Program, staticAccessors );
	var Shader = function Shader(program, uniforms)
	{
	    var this$1 = this;
	    this.program = program;
	    if (uniforms)
	    {
	        if (uniforms instanceof UniformGroup)
	        {
	            this.uniformGroup = uniforms;
	        }
	        else
	        {
	            this.uniformGroup = new UniformGroup(uniforms);
	        }
	    }
	    else
	    {
	        this.uniformGroup = new UniformGroup({});
	    }
	    for (var i in program.uniformData)
	    {
	        if (this$1.uniformGroup.uniforms[i] instanceof Array)
	        {
	            this$1.uniformGroup.uniforms[i] = new Float32Array(this$1.uniformGroup.uniforms[i]);
	        }
	    }
	};
	var prototypeAccessors$2 = { uniforms: { configurable: true } };
	Shader.prototype.checkUniformExists = function checkUniformExists (name, group)
	{
	        var this$1 = this;
	    if (group.uniforms[name])
	    {
	        return true;
	    }
	    for (var i in group.uniforms)
	    {
	        var uniform = group.uniforms[i];
	        if (uniform.group)
	        {
	            if (this$1.checkUniformExists(name, uniform))
	            {
	                return true;
	            }
	        }
	    }
	    return false;
	};
	Shader.prototype.destroy = function destroy ()
	{
	    this.uniformGroup = null;
	};
	prototypeAccessors$2.uniforms.get = function ()
	{
	    return this.uniformGroup.uniforms;
	};
	Shader.from = function from (vertexSrc, fragmentSrc, uniforms)
	{
	    var program = Program.from(vertexSrc, fragmentSrc);
	    return new Shader(program, uniforms);
	};
	Object.defineProperties( Shader.prototype, prototypeAccessors$2 );
	var BLEND = 0;
	var OFFSET = 1;
	var CULLING = 2;
	var DEPTH_TEST = 3;
	var WINDING = 4;
	var State = function State()
	{
	    this.data = 0;
	    this.blendMode = 0;
	    this.polygonOffset = 0;
	    this.blend = true;
	};
	var prototypeAccessors$3 = { blend: { configurable: true },offsets: { configurable: true },culling: { configurable: true },depthTest: { configurable: true },clockwiseFrontFace: { configurable: true },blendMode: { configurable: true },polygonOffset: { configurable: true } };
	prototypeAccessors$3.blend.get = function ()
	{
	    return !!(this.data & (1 << BLEND));
	};
	prototypeAccessors$3.blend.set = function (value)
	{
	    if (!!(this.data & (1 << BLEND)) !== value)
	    {
	        this.data ^= (1 << BLEND);
	    }
	};
	prototypeAccessors$3.offsets.get = function ()
	{
	    return !!(this.data & (1 << OFFSET));
	};
	prototypeAccessors$3.offsets.set = function (value)
	{
	    if (!!(this.data & (1 << OFFSET)) !== value)
	    {
	        this.data ^= (1 << OFFSET);
	    }
	};
	prototypeAccessors$3.culling.get = function ()
	{
	    return !!(this.data & (1 << CULLING));
	};
	prototypeAccessors$3.culling.set = function (value)
	{
	    if (!!(this.data & (1 << CULLING)) !== value)
	    {
	        this.data ^= (1 << CULLING);
	    }
	};
	prototypeAccessors$3.depthTest.get = function ()
	{
	    return !!(this.data & (1 << DEPTH_TEST));
	};
	prototypeAccessors$3.depthTest.set = function (value)
	{
	    if (!!(this.data & (1 << DEPTH_TEST)) !== value)
	    {
	        this.data ^= (1 << DEPTH_TEST);
	    }
	};
	prototypeAccessors$3.clockwiseFrontFace.get = function ()
	{
	    return !!(this.data & (1 << WINDING));
	};
	prototypeAccessors$3.clockwiseFrontFace.set = function (value)
	{
	    if (!!(this.data & (1 << WINDING)) !== value)
	    {
	        this.data ^= (1 << WINDING);
	    }
	};
	prototypeAccessors$3.blendMode.get = function ()
	{
	    return this._blendMode;
	};
	prototypeAccessors$3.blendMode.set = function (value)
	{
	    this.blend = (value !== 17);
	    this._blendMode = value;
	};
	prototypeAccessors$3.polygonOffset.get = function ()
	{
	    return this._polygonOffset;
	};
	prototypeAccessors$3.polygonOffset.set = function (value)
	{
	    this.offsets = !!value;
	    this._polygonOffset = value;
	};
	Object.defineProperties( State.prototype, prototypeAccessors$3 );
	var defaultVertex$1 = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord ;\n}\n";
	var defaultFragment$1 = "varying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D filterSampler;\n\nvoid main(void){\n   vec4 masky = texture2D(filterSampler, vFilterCoord);\n   vec4 sample = texture2D(uSampler, vTextureCoord);\n   vec4 color;\n   if(mod(vFilterCoord.x, 1.0) > 0.5)\n   {\n     color = vec4(1.0, 0.0, 0.0, 1.0);\n   }\n   else\n   {\n     color = vec4(0.0, 1.0, 0.0, 1.0);\n   }\n   // gl_FragColor = vec4(mod(vFilterCoord.x, 1.5), vFilterCoord.y,0.0,1.0);\n   gl_FragColor = mix(sample, masky, 0.5);\n   gl_FragColor *= sample.a;\n}\n";
	var Filter = (function (Shader$$1) {
	    function Filter(vertexSrc, fragmentSrc, uniforms)
	    {
	        var program = Program.from(vertexSrc, fragmentSrc);
	        Shader$$1.call(this, program, uniforms);
	        this.padding = 0;
	        this.resolution = settings_1.settings.FILTER_RESOLUTION;
	        this.enabled = true;
	        this.autoFit = true;
	        this.legacy = !!this.program.attributeData.aTextureCoord;
	        this.state = new State();
	    }
	    if ( Shader$$1 ) Filter.__proto__ = Shader$$1;
	    Filter.prototype = Object.create( Shader$$1 && Shader$$1.prototype );
	    Filter.prototype.constructor = Filter;
	    var prototypeAccessors = { blendMode: { configurable: true } };
	    var staticAccessors = { defaultVertexSrc: { configurable: true },defaultFragmentSrc: { configurable: true } };
	    Filter.prototype.apply = function apply (filterManager, input, output, clear, currentState, derp)
	    {
	        filterManager.applyFilter(this, input, output, clear, currentState, derp);
	    };
	    prototypeAccessors.blendMode.get = function ()
	    {
	        return this.state.blendMode;
	    };
	    prototypeAccessors.blendMode.set = function (value)
	    {
	        this.state.blendMode = value;
	    };
	    staticAccessors.defaultVertexSrc.get = function ()
	    {
	        return defaultVertex$1;
	    };
	    staticAccessors.defaultFragmentSrc.get = function ()
	    {
	        return defaultFragment$1;
	    };
	    Object.defineProperties( Filter.prototype, prototypeAccessors );
	    Object.defineProperties( Filter, staticAccessors );
	    return Filter;
	}(Shader));
	Filter.SOURCE_KEY_MAP = {};
	var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";
	var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";
	var tempMat = new math.Matrix();
	var TextureMatrix = function TextureMatrix(texture, clampMargin)
	{
	    this._texture = texture;
	    this.mapCoord = new math.Matrix();
	    this.uClampFrame = new Float32Array(4);
	    this.uClampOffset = new Float32Array(2);
	    this._lastTextureID = -1;
	    this.clampOffset = 0;
	    this.clampMargin = (typeof clampMargin === 'undefined') ? 0.5 : clampMargin;
	};
	var prototypeAccessors$4 = { texture: { configurable: true } };
	prototypeAccessors$4.texture.get = function ()
	{
	    return this._texture;
	};
	prototypeAccessors$4.texture.set = function (value)
	{
	    this._texture = value;
	    this._lastTextureID = -1;
	};
	TextureMatrix.prototype.multiplyUvs = function multiplyUvs (uvs, out)
	{
	    if (out === undefined)
	    {
	        out = uvs;
	    }
	    var mat = this.mapCoord;
	    for (var i = 0; i < uvs.length; i += 2)
	    {
	        var x = uvs[i];
	        var y = uvs[i + 1];
	        out[i] = (x * mat.a) + (y * mat.c) + mat.tx;
	        out[i + 1] = (x * mat.b) + (y * mat.d) + mat.ty;
	    }
	    return out;
	};
	TextureMatrix.prototype.update = function update (forceUpdate)
	{
	    var tex = this._texture;
	    if (!tex || !tex.valid)
	    {
	        return false;
	    }
	    if (!forceUpdate
	        && this._lastTextureID === tex._updateID)
	    {
	        return false;
	    }
	    this._lastTextureID = tex._updateID;
	    var uvs = tex._uvs;
	    this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
	    var orig = tex.orig;
	    var trim = tex.trim;
	    if (trim)
	    {
	        tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height,
	            -trim.x / trim.width, -trim.y / trim.height);
	        this.mapCoord.append(tempMat);
	    }
	    var texBase = tex.baseTexture;
	    var frame = this.uClampFrame;
	    var margin = this.clampMargin / texBase.resolution;
	    var offset = this.clampOffset;
	    frame[0] = (tex._frame.x + margin + offset) / texBase.width;
	    frame[1] = (tex._frame.y + margin + offset) / texBase.height;
	    frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
	    frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
	    this.uClampOffset[0] = offset / texBase.realWidth;
	    this.uClampOffset[1] = offset / texBase.realHeight;
	    return true;
	};
	Object.defineProperties( TextureMatrix.prototype, prototypeAccessors$4 );
	var SpriteMaskFilter = (function (Filter$$1) {
	    function SpriteMaskFilter(sprite)
	    {
	        var maskMatrix = new math.Matrix();
	        Filter$$1.call(this, vertex, fragment);
	        sprite.renderable = false;
	        this.maskSprite = sprite;
	        this.maskMatrix = maskMatrix;
	    }
	    if ( Filter$$1 ) SpriteMaskFilter.__proto__ = Filter$$1;
	    SpriteMaskFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;
	    SpriteMaskFilter.prototype.apply = function apply (filterManager, input, output)
	    {
	        var maskSprite = this.maskSprite;
	        var tex = this.maskSprite.texture;
	        if (!tex.valid)
	        {
	            return;
	        }
	        if (!tex.transform)
	        {
	            tex.transform = new TextureMatrix(tex, 0.0);
	        }
	        tex.transform.update();
	        this.uniforms.npmAlpha = tex.baseTexture.premultiplyAlpha ? 0.0 : 1.0;
	        this.uniforms.mask = tex;
	        this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite)
	            .prepend(tex.transform.mapCoord);
	        this.uniforms.alpha = maskSprite.worldAlpha;
	        this.uniforms.maskClamp = tex.transform.uClampFrame;
	        filterManager.applyFilter(this, input, output);
	    };
	    return SpriteMaskFilter;
	}(Filter));
	var MaskSystem = (function (System$$1) {
	    function MaskSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.scissor = false;
	        this.scissorData = null;
	        this.scissorRenderTarget = null;
	        this.enableScissor = false;
	        this.alphaMaskPool = [];
	        this.alphaMaskIndex = 0;
	    }
	    if ( System$$1 ) MaskSystem.__proto__ = System$$1;
	    MaskSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    MaskSystem.prototype.constructor = MaskSystem;
	    MaskSystem.prototype.push = function push (target, maskData)
	    {
	        if (maskData.vertexData)
	        {
	            this.pushSpriteMask(target, maskData);
	        }
	        else if (this.enableScissor
	            && !this.scissor
	            && this.renderer._activeRenderTarget.root
	            && !this.renderer.stencil.stencilMaskStack.length
	            && maskData.isFastRect())
	        {
	            var matrix = maskData.worldTransform;
	            var rot = Math.atan2(matrix.b, matrix.a);
	            rot = Math.round(rot * (180 / Math.PI));
	            if (rot % 90)
	            {
	                this.pushStencilMask(maskData);
	            }
	            else
	            {
	                this.pushScissorMask(target, maskData);
	            }
	        }
	        else
	        {
	            this.pushStencilMask(maskData);
	        }
	    };
	    MaskSystem.prototype.pop = function pop (target, maskData)
	    {
	        if (maskData.vertexData)
	        {
	            this.popSpriteMask(target, maskData);
	        }
	        else if (this.enableScissor && !this.renderer.stencil.stencilMaskStack.length)
	        {
	            this.popScissorMask(target, maskData);
	        }
	        else
	        {
	            this.popStencilMask(target, maskData);
	        }
	    };
	    MaskSystem.prototype.pushSpriteMask = function pushSpriteMask (target, maskData)
	    {
	        var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
	        if (!alphaMaskFilter)
	        {
	            alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter(maskData)];
	        }
	        alphaMaskFilter[0].resolution = this.renderer.resolution;
	        alphaMaskFilter[0].maskSprite = maskData;
	        target.filterArea = maskData.getBounds(true);
	        this.renderer.filter.push(target, alphaMaskFilter);
	        this.alphaMaskIndex++;
	    };
	    MaskSystem.prototype.popSpriteMask = function popSpriteMask ()
	    {
	        this.renderer.filter.pop();
	        this.alphaMaskIndex--;
	    };
	    MaskSystem.prototype.pushStencilMask = function pushStencilMask (maskData)
	    {
	        this.renderer.batch.flush();
	        this.renderer.stencil.pushStencil(maskData);
	    };
	    MaskSystem.prototype.popStencilMask = function popStencilMask ()
	    {
	        this.renderer.stencil.popStencil();
	    };
	    MaskSystem.prototype.pushScissorMask = function pushScissorMask (target, maskData)
	    {
	        maskData.renderable = true;
	        var renderTarget = this.renderer._activeRenderTarget;
	        var bounds = maskData.getBounds();
	        bounds.fit(renderTarget.size);
	        maskData.renderable = false;
	        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
	        var resolution = this.renderer.resolution;
	        this.renderer.gl.scissor(
	            bounds.x * resolution,
	            (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y) * resolution,
	            bounds.width * resolution,
	            bounds.height * resolution
	        );
	        this.scissorRenderTarget = renderTarget;
	        this.scissorData = maskData;
	        this.scissor = true;
	    };
	    MaskSystem.prototype.popScissorMask = function popScissorMask ()
	    {
	        this.scissorRenderTarget = null;
	        this.scissorData = null;
	        this.scissor = false;
	        var ref = this.renderer;
	        var gl = ref.gl;
	        gl.disable(gl.SCISSOR_TEST);
	    };
	    return MaskSystem;
	}(System));
	var StencilSystem = (function (System$$1) {
	    function StencilSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.stencilMaskStack = [];
	    }
	    if ( System$$1 ) StencilSystem.__proto__ = System$$1;
	    StencilSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    StencilSystem.prototype.constructor = StencilSystem;
	    StencilSystem.prototype.setMaskStack = function setMaskStack (stencilMaskStack)
	    {
	        var gl = this.renderer.gl;
	        if (stencilMaskStack.length !== this.stencilMaskStack.length)
	        {
	            if (stencilMaskStack.length === 0)
	            {
	                gl.disable(gl.STENCIL_TEST);
	            }
	            else
	            {
	                gl.enable(gl.STENCIL_TEST);
	            }
	        }
	        this.stencilMaskStack = stencilMaskStack;
	    };
	    StencilSystem.prototype.pushStencil = function pushStencil (graphics)
	    {
	        var gl = this.renderer.gl;
	        var prevMaskCount = this.stencilMaskStack.length;
	        if (prevMaskCount === 0)
	        {
	            gl.enable(gl.STENCIL_TEST);
	        }
	        this.stencilMaskStack.push(graphics);
	        gl.colorMask(false, false, false, false);
	        gl.stencilFunc(gl.EQUAL, prevMaskCount, this._getBitwiseMask());
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
	        graphics.renderable = true;
	        graphics.render(this.renderer);
	        this.renderer.batch.flush();
	        graphics.renderable = false;
	        this._useCurrent();
	    };
	    StencilSystem.prototype.popStencil = function popStencil ()
	    {
	        var gl = this.renderer.gl;
	        var graphics = this.stencilMaskStack.pop();
	        if (this.stencilMaskStack.length === 0)
	        {
	            gl.disable(gl.STENCIL_TEST);
	            gl.clear(gl.STENCIL_BUFFER_BIT);
	            gl.clearStencil(0);
	        }
	        else
	        {
	            gl.colorMask(false, false, false, false);
	            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
	            graphics.renderable = true;
	            graphics.render(this.renderer);
	            this.renderer.batch.flush();
	            graphics.renderable = false;
	            this._useCurrent();
	        }
	    };
	    StencilSystem.prototype._useCurrent = function _useCurrent ()
	    {
	        var gl = this.renderer.gl;
	        gl.colorMask(true, true, true, true);
	        gl.stencilFunc(gl.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask());
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
	    };
	    StencilSystem.prototype._getBitwiseMask = function _getBitwiseMask ()
	    {
	        return (1 << this.stencilMaskStack.length) - 1;
	    };
	    StencilSystem.prototype.destroy = function destroy ()
	    {
	        System$$1.prototype.destroy.call(this, this);
	        this.stencilMaskStack = null;
	    };
	    return StencilSystem;
	}(System));
	var ProjectionSystem = (function (System$$1) {
	    function ProjectionSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.destinationFrame = null;
	        this.sourceFrame = null;
	        this.defaultFrame = null;
	        this.projectionMatrix = new math.Matrix();
	    }
	    if ( System$$1 ) ProjectionSystem.__proto__ = System$$1;
	    ProjectionSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    ProjectionSystem.prototype.constructor = ProjectionSystem;
	    ProjectionSystem.prototype.update = function update (destinationFrame, sourceFrame, resolution, root)
	    {
	        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
	        this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
	        this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);
	        this.renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
	        this.renderer.globalUniforms.update();
	    };
	    ProjectionSystem.prototype.calculateProjection = function calculateProjection (destinationFrame, sourceFrame, resolution, root)
	    {
	        var pm = this.projectionMatrix;
	        if (!root)
	        {
	            pm.a = (1 / destinationFrame.width * 2) * resolution;
	            pm.d = (1 / destinationFrame.height * 2) * resolution;
	            pm.tx = -1 - (sourceFrame.x * pm.a);
	            pm.ty = -1 - (sourceFrame.y * pm.d);
	        }
	        else
	        {
	            pm.a = (1 / destinationFrame.width * 2) * resolution;
	            pm.d = (-1 / destinationFrame.height * 2) * resolution;
	            pm.tx = -1 - (sourceFrame.x * pm.a);
	            pm.ty = 1 - (sourceFrame.y * pm.d);
	        }
	    };
	    ProjectionSystem.prototype.setTransform = function setTransform ()
	    {
	    };
	    return ProjectionSystem;
	}(System));
	var tempRect = new math.Rectangle();
	var RenderTextureSystem = (function (System$$1) {
	    function RenderTextureSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.clearColor = renderer._backgroundColorRgba;
	        this.defaultMaskStack = [];
	        this.defaultFilterStack = [{}];
	        this.renderTexture = null;
	        this.destinationFrame = new math.Rectangle();
	    }
	    if ( System$$1 ) RenderTextureSystem.__proto__ = System$$1;
	    RenderTextureSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    RenderTextureSystem.prototype.constructor = RenderTextureSystem;
	    RenderTextureSystem.prototype.bind = function bind (renderTexture, sourceFrame, destinationFrame)
	    {
	        if (this.renderTexture === renderTexture) { return; }
	        this.renderTexture = renderTexture;
	        var renderer = this.renderer;
	        var resolution;
	        if (renderTexture)
	        {
	            var baseTexture = renderTexture.baseTexture;
	            resolution = baseTexture.resolution;
	            if (!destinationFrame)
	            {
	                tempRect.width = baseTexture.realWidth;
	                tempRect.height = baseTexture.realHeight;
	                destinationFrame = tempRect;
	            }
	            if (!sourceFrame)
	            {
	                sourceFrame = destinationFrame;
	            }
	            this.renderer.framebuffer.bind(baseTexture.frameBuffer, destinationFrame);
	            this.renderer.projection.update(destinationFrame, sourceFrame, resolution, false);
	            this.renderer.stencil.setMaskStack(baseTexture.stencilMaskStack);
	        }
	        else
	        {
	            resolution = this.renderer.resolution;
	            if (!destinationFrame)
	            {
	                tempRect.width = renderer.width;
	                tempRect.height = renderer.height;
	                destinationFrame = tempRect;
	            }
	            if (!sourceFrame)
	            {
	                sourceFrame = destinationFrame;
	            }
	            renderer.framebuffer.bind(null, destinationFrame);
	            this.renderer.projection.update(destinationFrame, sourceFrame, resolution, true);
	            this.renderer.stencil.setMaskStack(this.defaultMaskStack);
	        }
	        this.destinationFrame.x = destinationFrame.x / resolution;
	        this.destinationFrame.y = destinationFrame.y / resolution;
	        this.destinationFrame.width = destinationFrame.width / resolution;
	        this.destinationFrame.height = destinationFrame.height / resolution;
	    };
	    RenderTextureSystem.prototype.clear = function clear (clearColor)
	    {
	        if (this.renderTexture)
	        {
	            clearColor = clearColor || this.renderTexture.baseTexture.clearColor;
	        }
	        else
	        {
	            clearColor = clearColor || this.clearColor;
	        }
	        this.renderer.framebuffer.clear(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
	    };
	    RenderTextureSystem.prototype.resize = function resize ()
	    {
	        this.bind(null);
	    };
	    return RenderTextureSystem;
	}(System));
	var GLProgram = function GLProgram(program, uniformData)
	{
	    this.program = program;
	    this.uniformData = uniformData;
	    this.uniformGroups = {};
	};
	GLProgram.prototype.destroy = function destroy ()
	{
	    this.uniformData = null;
	    this.uniformGroups = null;
	    this.program = null;
	};
	var UID$4 = 0;
	var ShaderSystem = (function (System$$1) {
	    function ShaderSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.gl = null;
	        this.shader = null;
	        this.program = null;
	        this.cache = {};
	        this.id = UID$4++;
	    }
	    if ( System$$1 ) ShaderSystem.__proto__ = System$$1;
	    ShaderSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    ShaderSystem.prototype.constructor = ShaderSystem;
	    ShaderSystem.prototype.contextChange = function contextChange (gl)
	    {
	        this.gl = gl;
	    };
	    ShaderSystem.prototype.bind = function bind (shader, dontSync)
	    {
	        shader.uniforms.globals = this.renderer.globalUniforms;
	        var program = shader.program;
	        var glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(shader);
	        this.shader = shader;
	        if (this.program !== program)
	        {
	            this.program = program;
	            this.gl.useProgram(glProgram.program);
	        }
	        if (!dontSync)
	        {
	            this.syncUniformGroup(shader.uniformGroup);
	        }
	        return glProgram;
	    };
	    ShaderSystem.prototype.setUniforms = function setUniforms (uniforms)
	    {
	        var shader = this.shader.program;
	        var glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];
	        shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
	    };
	    ShaderSystem.prototype.syncUniformGroup = function syncUniformGroup (group)
	    {
	        var glProgram = this.getglProgram();
	        if (!group.static || group.dirtyId !== glProgram.uniformGroups[group.id])
	        {
	            glProgram.uniformGroups[group.id] = group.dirtyId;
	            var syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);
	            syncFunc(glProgram.uniformData, group.uniforms, this.renderer);
	        }
	    };
	    ShaderSystem.prototype.createSyncGroups = function createSyncGroups (group)
	    {
	        var id = this.getSignature(group, this.shader.program.uniformData);
	        if (!this.cache[id])
	        {
	            this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
	        }
	        group.syncUniforms[this.shader.program.id] = this.cache[id];
	        return group.syncUniforms[this.shader.program.id];
	    };
	    ShaderSystem.prototype.getSignature = function getSignature (group, uniformData)
	    {
	        var uniforms = group.uniforms;
	        var strings = [];
	        for (var i in uniforms)
	        {
	            strings.push(i);
	            if (uniformData[i])
	            {
	                strings.push(uniformData[i].type);
	            }
	        }
	        return strings.join('-');
	    };
	    ShaderSystem.prototype.getglProgram = function getglProgram ()
	    {
	        if (this.shader)
	        {
	            return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
	        }
	        return null;
	    };
	    ShaderSystem.prototype.generateShader = function generateShader (shader)
	    {
	        var gl = this.gl;
	        var program = shader.program;
	        var attribMap = {};
	        for (var i in program.attributeData)
	        {
	            attribMap[i] = program.attributeData[i].location;
	        }
	        var shaderProgram = compileProgram(gl, program.vertexSrc, program.fragmentSrc, attribMap);
	        var uniformData = {};
	        for (var i$1 in program.uniformData)
	        {
	            var data = program.uniformData[i$1];
	            uniformData[i$1] = {
	                location: gl.getUniformLocation(shaderProgram, i$1),
	                value: defaultValue(data.type, data.size),
	            };
	        }
	        var glProgram = new GLProgram(shaderProgram, uniformData);
	        program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;
	        return glProgram;
	    };
	    ShaderSystem.prototype.destroy = function destroy ()
	    {
	        this.destroyed = true;
	    };
	    return ShaderSystem;
	}(System));
	function mapWebGLBlendModesToPixi(gl, array)
	{
	    if ( array === void 0 ) array = [];
	    array[constants.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.ADD] = [gl.ONE, gl.DST_ALPHA];
	    array[constants.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    array[constants.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.NONE] = [0, 0];
	    array[constants.BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.DST_ALPHA, gl.ONE, gl.DST_ALPHA];
	    array[constants.BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    array[constants.BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[constants.BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.DST_ALPHA, gl.ONE, gl.DST_ALPHA];
	    array[constants.BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    return array;
	}
	var BLEND$1 = 0;
	var OFFSET$1 = 1;
	var CULLING$1 = 2;
	var DEPTH_TEST$1 = 3;
	var WINDING$1 = 4;
	var StateSystem = (function (System$$1) {
	    function StateSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.gl = null;
	        this.maxAttribs = null;
	        this.nativeVaoExtension = null;
	        this.attribState = null;
	        this.stateId = 0;
	        this.polygonOffset = 0;
	        this.blendMode = 17;
	        this.map = [];
	        this.map[BLEND$1] = this.setBlend;
	        this.map[OFFSET$1] = this.setOffset;
	        this.map[CULLING$1] = this.setCullFace;
	        this.map[DEPTH_TEST$1] = this.setDepthTest;
	        this.map[WINDING$1] = this.setFrontFace;
	        this.checks = [];
	        this.defaultState = new State();
	        this.defaultState.blend = true;
	        this.defaultState.depth = true;
	    }
	    if ( System$$1 ) StateSystem.__proto__ = System$$1;
	    StateSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    StateSystem.prototype.constructor = StateSystem;
	    StateSystem.prototype.contextChange = function contextChange (gl)
	    {
	        this.gl = gl;
	        this.maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	        this.nativeVaoExtension = (
	            gl.getExtension('OES_vertex_array_object')
	            || gl.getExtension('MOZ_OES_vertex_array_object')
	            || gl.getExtension('WEBKIT_OES_vertex_array_object')
	        );
	        this.attribState = {
	            tempAttribState: new Array(this.maxAttribs),
	            attribState: new Array(this.maxAttribs),
	        };
	        this.blendModes = mapWebGLBlendModesToPixi(gl);
	        this.setState(this.defaultState);
	        this.reset();
	    };
	    StateSystem.prototype.setState = function setState (state)
	    {
	        var this$1 = this;
	        state = state || this.defaultState;
	        if (this.stateId !== state.data)
	        {
	            var diff = this.stateId ^ state.data;
	            var i = 0;
	            while (diff)
	            {
	                if (diff & 1)
	                {
	                    this$1.map[i].call(this$1, !!(state.data & (1 << i)));
	                }
	                diff = diff >> 1;
	                i++;
	            }
	            this.stateId = state.data;
	        }
	        for (var i$1 = 0; i$1 < this.checks.length; i$1++)
	        {
	            this$1.checks[i$1](this$1, state);
	        }
	    };
	    StateSystem.prototype.setBlend = function setBlend (value)
	    {
	        this.updateCheck(StateSystem.checkBlendMode, value);
	        this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
	    };
	    StateSystem.prototype.setOffset = function setOffset (value)
	    {
	        this.gl[value ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
	    };
	    StateSystem.prototype.setDepthTest = function setDepthTest (value)
	    {
	        this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
	    };
	    StateSystem.prototype.setCullFace = function setCullFace (value)
	    {
	        this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
	    };
	    StateSystem.prototype.setFrontFace = function setFrontFace (value)
	    {
	        this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
	    };
	    StateSystem.prototype.setBlendMode = function setBlendMode (value)
	    {
	        if (value === this.blendMode)
	        {
	            return;
	        }
	        this.blendMode = value;
	        var mode = this.blendModes[value];
	        if (mode.length === 2)
	        {
	            this.gl.blendFunc(mode[0], mode[1]);
	        }
	        else
	        {
	            this.gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
	        }
	    };
	    StateSystem.prototype.setPolygonOffset = function setPolygonOffset (value, scale)
	    {
	        this.gl.polygonOffset(value, scale);
	    };
	    StateSystem.prototype.resetAttributes = function resetAttributes ()
	    {
	        var this$1 = this;
	        for (var i = 0; i < this.attribState.tempAttribState.length; i++)
	        {
	            this$1.attribState.tempAttribState[i] = 0;
	        }
	        for (var i$1 = 0; i$1 < this.attribState.attribState.length; i$1++)
	        {
	            this$1.attribState.attribState[i$1] = 0;
	        }
	        for (var i$2 = 1; i$2 < this.maxAttribs; i$2++)
	        {
	            this$1.gl.disableVertexAttribArray(i$2);
	        }
	    };
	    StateSystem.prototype.reset = function reset ()
	    {
	        if (this.nativeVaoExtension)
	        {
	            this.nativeVaoExtension.bindVertexArrayOES(null);
	        }
	        this.resetAttributes();
	        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
	        this.setBlendMode(0);
	    };
	    StateSystem.prototype.updateCheck = function updateCheck (func, value)
	    {
	        var index = this.checks.indexOf(func);
	        if (value && index === -1)
	        {
	            this.checks.push(func);
	        }
	        else if (!value && index !== -1)
	        {
	            this.checks.splice(index, 1);
	        }
	    };
	    StateSystem.checkBlendMode = function checkBlendMode (system, state)
	    {
	        system.setBlendMode(state.blendMode);
	    };
	    return StateSystem;
	}(System));
	var TextureGCSystem = (function (System$$1) {
	    function TextureGCSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.count = 0;
	        this.checkCount = 0;
	        this.maxIdle = settings_1.settings.GC_MAX_IDLE;
	        this.checkCountMax = settings_1.settings.GC_MAX_CHECK_COUNT;
	        this.mode = settings_1.settings.GC_MODE;
	    }
	    if ( System$$1 ) TextureGCSystem.__proto__ = System$$1;
	    TextureGCSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    TextureGCSystem.prototype.constructor = TextureGCSystem;
	    TextureGCSystem.prototype.postrender = function postrender ()
	    {
	        this.count++;
	        if (this.mode === constants.GC_MODES.MANUAL)
	        {
	            return;
	        }
	        this.checkCount++;
	        if (this.checkCount > this.checkCountMax)
	        {
	            this.checkCount = 0;
	            this.run();
	        }
	    };
	    TextureGCSystem.prototype.run = function run ()
	    {
	        var this$1 = this;
	        var tm = this.renderer.texture;
	        var managedTextures =  tm.managedTextures;
	        var wasRemoved = false;
	        for (var i = 0; i < managedTextures.length; i++)
	        {
	            var texture = managedTextures[i];
	            if (!texture.frameBuffer && this$1.count - texture.touched > this$1.maxIdle)
	            {
	                tm.destroyTexture(texture, true);
	                managedTextures[i] = null;
	                wasRemoved = true;
	            }
	        }
	        if (wasRemoved)
	        {
	            var j = 0;
	            for (var i$1 = 0; i$1 < managedTextures.length; i$1++)
	            {
	                if (managedTextures[i$1] !== null)
	                {
	                    managedTextures[j++] = managedTextures[i$1];
	                }
	            }
	            managedTextures.length = j;
	        }
	    };
	    TextureGCSystem.prototype.unload = function unload (displayObject)
	    {
	        var this$1 = this;
	        var tm = this.renderer.textureSystem;
	        if (displayObject._texture && displayObject._texture._glRenderTargets)
	        {
	            tm.destroyTexture(displayObject._texture);
	        }
	        for (var i = displayObject.children.length - 1; i >= 0; i--)
	        {
	            this$1.unload(displayObject.children[i]);
	        }
	    };
	    return TextureGCSystem;
	}(System));
	var GLTexture = function GLTexture(texture)
	{
	    this.texture = texture;
	    this.width = -1;
	    this.height = -1;
	    this.dirtyId = -1;
	    this.dirtyStyleId = -1;
	    this.mipmap = false;
	};
	var TextureSystem = (function (System$$1) {
	    function TextureSystem(renderer)
	    {
	        System$$1.call(this, renderer);
	        this.boundTextures = [];
	        this.currentLocation = -1;
	        this.managedTextures = [];
	    }
	    if ( System$$1 ) TextureSystem.__proto__ = System$$1;
	    TextureSystem.prototype = Object.create( System$$1 && System$$1.prototype );
	    TextureSystem.prototype.constructor = TextureSystem;
	    TextureSystem.prototype.contextChange = function contextChange ()
	    {
	        var this$1 = this;
	        var gl = this.gl = this.renderer.gl;
	        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	        var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
	        this.boundTextures.length = maxTextures;
	        for (var i = 0; i < maxTextures; i++)
	        {
	            this$1.boundTextures[i] = null;
	        }
	        this.emptyTextures = {};
	        var emptyTexture2D = new GLTexture(gl.createTexture());
	        gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
	        this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
	        this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());
	        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);
	        for (var i$1 = 0; i$1 < 6; i$1++)
	        {
	            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i$1, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	        }
	        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	        for (var i$2 = 0; i$2 < this.boundTextures.length; i$2++)
	        {
	            this$1.bind(null, i$2);
	        }
	    };
	    TextureSystem.prototype.bind = function bind (texture, location)
	    {
	        if ( location === void 0 ) location = 0;
	        var ref = this;
	        var gl = ref.gl;
	        if (this.currentLocation !== location)
	        {
	            this.currentLocation = location;
	            gl.activeTexture(gl.TEXTURE0 + location);
	        }
	        if (texture)
	        {
	            texture = texture.baseTexture || texture;
	            if (texture.valid)
	            {
	                texture.touched = this.renderer.textureGC.count;
	                var glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);
	                gl.bindTexture(texture.target, glTexture.texture);
	                if (glTexture.dirtyId !== texture.dirtyId)
	                {
	                    this.updateTexture(texture);
	                }
	                this.boundTextures[location] = texture;
	            }
	        }
	        else
	        {
	            gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
	            this.boundTextures[location] = null;
	        }
	    };
	    TextureSystem.prototype.unbind = function unbind (texture)
	    {
	        var this$1 = this;
	        var ref = this;
	        var gl = ref.gl;
	        for (var i = 0; i < this.boundTextures.length; i++)
	        {
	            if (this$1.boundTextures[i] === texture)
	            {
	                if (this$1.currentLocation !== i)
	                {
	                    gl.activeTexture(gl.TEXTURE0 + i);
	                    this$1.currentLocation = i;
	                }
	                gl.bindTexture(gl.TEXTURE_2D, this$1.emptyTextures[texture.target].texture);
	                this$1.boundTextures[i] = null;
	            }
	        }
	    };
	    TextureSystem.prototype.initTexture = function initTexture (texture)
	    {
	        var glTexture = new GLTexture(this.gl.createTexture());
	        glTexture.dirtyId = -1;
	        texture._glTextures[this.CONTEXT_UID] = glTexture;
	        this.managedTextures.push(texture);
	        texture.on('dispose', this.destroyTexture, this);
	        return glTexture;
	    };
	    TextureSystem.prototype.updateTexture = function updateTexture (texture)
	    {
	        var glTexture = texture._glTextures[this.CONTEXT_UID];
	        var renderer = this.renderer;
	        if (texture.resource && texture.resource.upload(renderer, texture, glTexture))
	        ;
	        else
	        {
	            var width = texture.realWidth;
	            var height = texture.realHeight;
	            var gl = renderer.gl;
	            if (glTexture.width !== width
	                || glTexture.height !== height
	                || glTexture.dirtyId < 0)
	            {
	                glTexture.width = width;
	                glTexture.height = height;
	                gl.texImage2D(texture.target, 0,
	                    texture.format,
	                    width,
	                    height,
	                    0,
	                    texture.format,
	                    texture.type,
	                    null);
	            }
	        }
	        if (texture.dirtyStyleId !== glTexture.dirtyStyleId)
	        {
	            this.updateTextureStyle(texture);
	        }
	        glTexture.dirtyId = texture.dirtyId;
	    };
	    TextureSystem.prototype.destroyTexture = function destroyTexture (texture, skipRemove)
	    {
	        var ref = this;
	        var gl = ref.gl;
	        texture = texture.baseTexture || texture;
	        if (texture._glTextures[this.renderer.CONTEXT_UID])
	        {
	            this.unbind(texture);
	            gl.deleteTexture(texture._glTextures[this.renderer.CONTEXT_UID].texture);
	            texture.off('dispose', this.destroyTexture, this);
	            delete texture._glTextures[this.renderer.CONTEXT_UID];
	            if (!skipRemove)
	            {
	                var i = this.managedTextures.indexOf(texture);
	                if (i !== -1)
	                {
	                    utils.removeItems(this.managedTextures, i, 1);
	                }
	            }
	        }
	    };
	    TextureSystem.prototype.updateTextureStyle = function updateTextureStyle (texture)
	    {
	        var glTexture = texture._glTextures[this.CONTEXT_UID];
	        glTexture.mipmap = texture.mipmap && texture.isPowerOfTwo;
	        if (!glTexture)
	        {
	            return;
	        }
	        if (texture.resource && texture.resource.style(this.renderer, texture, glTexture))
	        ;
	        else
	        {
	            this.setStyle(texture, glTexture);
	        }
	        glTexture.dirtyStyleId = texture.dirtyStyleId;
	    };
	    TextureSystem.prototype.setStyle = function setStyle (texture, glTexture)
	    {
	        var gl = this.gl;
	        if (glTexture.mipmap)
	        {
	            gl.generateMipmap(texture.target);
	        }
	        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, texture.wrapMode);
	        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, texture.wrapMode);
	        if (glTexture.mipmap)
	        {
	            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
	        }
	        else
	        {
	            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode ? gl.LINEAR : gl.NEAREST);
	        }
	        gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode ? gl.LINEAR : gl.NEAREST);
	    };
	    return TextureSystem;
	}(System));
	var systems = ({
		FilterSystem: FilterSystem,
		BatchSystem: BatchSystem,
		ContextSystem: ContextSystem,
		FramebufferSystem: FramebufferSystem,
		GeometrySystem: GeometrySystem,
		MaskSystem: MaskSystem,
		StencilSystem: StencilSystem,
		ProjectionSystem: ProjectionSystem,
		RenderTextureSystem: RenderTextureSystem,
		ShaderSystem: ShaderSystem,
		StateSystem: StateSystem,
		TextureGCSystem: TextureGCSystem,
		TextureSystem: TextureSystem
	});
	var tempMatrix = new math.Matrix();
	var AbstractRenderer = (function (EventEmitter$$1) {
	    function AbstractRenderer(system, options, arg2, arg3)
	    {
	        EventEmitter$$1.call(this);
	        if (typeof options === 'number')
	        {
	            options = Object.assign({
	                width: options,
	                height: arg2 || settings_1.settings.RENDER_OPTIONS.height,
	            }, arg3);
	        }
	        options = Object.assign({}, settings_1.settings.RENDER_OPTIONS, options);
	        this.options = options;
	        this.type = constants.RENDERER_TYPE.UNKNOWN;
	        this.screen = new math.Rectangle(0, 0, options.width, options.height);
	        this.view = options.view || document.createElement('canvas');
	        this.resolution = options.resolution || settings_1.settings.RESOLUTION;
	        this.transparent = options.transparent;
	        this.autoDensity = options.autoDensity || options.autoResize || false;
	        this.blendModes = null;
	        this.preserveDrawingBuffer = options.preserveDrawingBuffer;
	        this.clearBeforeRender = options.clearBeforeRender;
	        this.roundPixels = options.roundPixels;
	        this._backgroundColor = 0x000000;
	        this._backgroundColorRgba = [0, 0, 0, 0];
	        this._backgroundColorString = '#000000';
	        this.backgroundColor = options.backgroundColor || this._backgroundColor;
	        this._tempDisplayObjectParent = new display.Container();
	        this._lastObjectRendered = this._tempDisplayObjectParent;
	        this.plugins = {};
	    }
	    if ( EventEmitter$$1 ) AbstractRenderer.__proto__ = EventEmitter$$1;
	    AbstractRenderer.prototype = Object.create( EventEmitter$$1 && EventEmitter$$1.prototype );
	    AbstractRenderer.prototype.constructor = AbstractRenderer;
	    var prototypeAccessors = { width: { configurable: true },height: { configurable: true },backgroundColor: { configurable: true } };
	    AbstractRenderer.prototype.initPlugins = function initPlugins (staticMap)
	    {
	        var this$1 = this;
	        for (var o in staticMap)
	        {
	            this$1.plugins[o] = new (staticMap[o])(this$1);
	        }
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return this.view.width;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return this.view.height;
	    };
	    AbstractRenderer.prototype.resize = function resize (screenWidth, screenHeight)
	    {
	        this.screen.width = screenWidth;
	        this.screen.height = screenHeight;
	        this.view.width = screenWidth * this.resolution;
	        this.view.height = screenHeight * this.resolution;
	        if (this.autoDensity)
	        {
	            this.view.style.width = screenWidth + "px";
	            this.view.style.height = screenHeight + "px";
	        }
	    };
	    AbstractRenderer.prototype.generateTexture = function generateTexture (displayObject, scaleMode, resolution, region)
	    {
	        region = region || displayObject.getLocalBounds();
	        if (region.width === 0) { region.width = 1; }
	        if (region.height === 0) { region.height = 1; }
	        var renderTexture = RenderTexture.create(region.width | 0, region.height | 0, scaleMode, resolution);
	        tempMatrix.tx = -region.x;
	        tempMatrix.ty = -region.y;
	        this.render(displayObject, renderTexture, false, tempMatrix, true);
	        return renderTexture;
	    };
	    AbstractRenderer.prototype.destroy = function destroy (removeView)
	    {
	        var this$1 = this;
	        for (var o in this$1.plugins)
	        {
	            this$1.plugins[o].destroy();
	            this$1.plugins[o] = null;
	        }
	        if (removeView && this.view.parentNode)
	        {
	            this.view.parentNode.removeChild(this.view);
	        }
	        this.plugins = null;
	        this.type = constants.RENDERER_TYPE.UNKNOWN;
	        this.view = null;
	        this.screen = null;
	        this.resolution = 0;
	        this.transparent = false;
	        this.autoDensity = false;
	        this.blendModes = null;
	        this.options = null;
	        this.preserveDrawingBuffer = false;
	        this.clearBeforeRender = false;
	        this.roundPixels = false;
	        this._backgroundColor = 0;
	        this._backgroundColorRgba = null;
	        this._backgroundColorString = null;
	        this._tempDisplayObjectParent = null;
	        this._lastObjectRendered = null;
	    };
	    prototypeAccessors.backgroundColor.get = function ()
	    {
	        return this._backgroundColor;
	    };
	    prototypeAccessors.backgroundColor.set = function (value)
	    {
	        this._backgroundColor = value;
	        this._backgroundColorString = utils.hex2string(value);
	        utils.hex2rgb(value, this._backgroundColorRgba);
	    };
	    Object.defineProperties( AbstractRenderer.prototype, prototypeAccessors );
	    return AbstractRenderer;
	}(EventEmitter));
	var Renderer = (function (AbstractRenderer$$1) {
	    function Renderer(options, arg2, arg3)
	    {
	        if ( options === void 0 ) options = {};
	        AbstractRenderer$$1.call(this, 'WebGL', options, arg2, arg3);
	        this.type = constants.RENDERER_TYPE.WEBGL;
	        this.gl = null;
	        this.CONTEXT_UID = 0;
	        this.runners = {
	            destroy: new Runner('destroy'),
	            contextChange: new Runner('contextChange', 1),
	            reset: new Runner('reset'),
	            update: new Runner('update'),
	            postrender: new Runner('postrender'),
	            prerender: new Runner('prerender'),
	            resize: new Runner('resize', 2),
	        };
	        this.globalUniforms = new UniformGroup({
	            projectionMatrix: new math.Matrix(),
	        }, true);
	        this.addSystem(MaskSystem, 'mask')
	            .addSystem(ContextSystem, 'context')
	            .addSystem(StateSystem, 'state')
	            .addSystem(ShaderSystem, 'shader')
	            .addSystem(TextureSystem, 'texture')
	            .addSystem(GeometrySystem, 'geometry')
	            .addSystem(FramebufferSystem, 'framebuffer')
	            .addSystem(StencilSystem, 'stencil')
	            .addSystem(ProjectionSystem, 'projection')
	            .addSystem(TextureGCSystem, 'textureGC')
	            .addSystem(FilterSystem, 'filter')
	            .addSystem(RenderTextureSystem, 'renderTexture')
	            .addSystem(BatchSystem, 'batch');
	        this.initPlugins(Renderer.__plugins);
	        if (options.context)
	        {
	            this.context.initFromContext(options.context);
	        }
	        else
	        {
	            this.context.initFromOptions({
	                alpha: this.transparent,
	                antialias: options.antialias,
	                premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
	                stencil: true,
	                preserveDrawingBuffer: options.preserveDrawingBuffer,
	                powerPreference: this.options.powerPreference,
	            });
	        }
	        this.renderingToScreen = true;
	        utils.sayHello(this.context.webGLVersion === 2 ? 'WebGL 2' : 'WebGL 1');
	        this.resize(this.options.width, this.options.height);
	    }
	    if ( AbstractRenderer$$1 ) Renderer.__proto__ = AbstractRenderer$$1;
	    Renderer.prototype = Object.create( AbstractRenderer$$1 && AbstractRenderer$$1.prototype );
	    Renderer.prototype.constructor = Renderer;
	    Renderer.prototype.addSystem = function addSystem (ClassRef, name)
	    {
	        var this$1 = this;
	        if (!name)
	        {
	            name = ClassRef.name;
	        }
	        var system = new ClassRef(this);
	        if (this[name])
	        {
	            throw new Error(("Whoops! The name \"" + name + "\" is already in use"));
	        }
	        this[name] = system;
	        for (var i in this$1.runners)
	        {
	            this$1.runners[i].add(system);
	        }
	        return this;
	    };
	    Renderer.prototype.render = function render (displayObject, renderTexture, clear, transform, skipUpdateTransform)
	    {
	        this.renderingToScreen = !renderTexture;
	        this.runners.prerender.run();
	        this.emit('prerender');
	        if (this.context.isLost)
	        {
	            return;
	        }
	        if (!renderTexture)
	        {
	            this._lastObjectRendered = displayObject;
	        }
	        if (!skipUpdateTransform)
	        {
	            var cacheParent = displayObject.parent;
	            displayObject.parent = this._tempDisplayObjectParent;
	            displayObject.updateTransform();
	            displayObject.parent = cacheParent;
	        }
	        this.renderTexture.bind(renderTexture);
	        this.batch.currentRenderer.start();
	        if (clear !== undefined ? clear : this.clearBeforeRender)
	        {
	            this.renderTexture.clear();
	        }
	        displayObject.render(this);
	        this.batch.currentRenderer.flush();
	        if (renderTexture)
	        {
	            renderTexture.baseTexture.update();
	        }
	        this.runners.postrender.run();
	        this.emit('postrender');
	    };
	    Renderer.prototype.resize = function resize (screenWidth, screenHeight)
	    {
	        AbstractRenderer$$1.prototype.resize.call(this, screenWidth, screenHeight);
	        this.runners.resize.run(screenWidth, screenHeight);
	    };
	    Renderer.prototype.reset = function reset ()
	    {
	        this.runners.reset.run();
	        return this;
	    };
	    Renderer.prototype.clear = function clear ()
	    {
	        this.framebuffer.bind();
	        this.framebuffer.clear();
	    };
	    Renderer.prototype.destroy = function destroy (removeView)
	    {
	        this.runners.destroy.run();
	        AbstractRenderer$$1.prototype.destroy.call(this, removeView);
	        this.gl = null;
	    };
	    Renderer.registerPlugin = function registerPlugin (pluginName, ctor)
	    {
	        Renderer.__plugins = Renderer.__plugins || {};
	        Renderer.__plugins[pluginName] = ctor;
	    };
	    return Renderer;
	}(AbstractRenderer));
	var CubeTexture = (function (BaseTexture$$1) {
	    function CubeTexture () {
	        BaseTexture$$1.apply(this, arguments);
	    }
	    if ( BaseTexture$$1 ) CubeTexture.__proto__ = BaseTexture$$1;
	    CubeTexture.prototype = Object.create( BaseTexture$$1 && BaseTexture$$1.prototype );
	    CubeTexture.prototype.constructor = CubeTexture;
	    CubeTexture.from = function from (resources, options)
	    {
	        return new CubeTexture(new CubeResource(resources, options));
	    };
	    return CubeTexture;
	}(BaseTexture));
	exports.systems = systems;
	exports.resources = index;
	exports.System = System;
	exports.Renderer = Renderer;
	exports.AbstractRenderer = AbstractRenderer;
	exports.FrameBuffer = FrameBuffer;
	exports.CubeTexture = CubeTexture;
	exports.BaseTexture = BaseTexture;
	exports.Texture = Texture;
	exports.TextureMatrix = TextureMatrix;
	exports.RenderTexture = RenderTexture;
	exports.BaseRenderTexture = BaseRenderTexture;
	exports.TextureUvs = TextureUvs;
	exports.State = State;
	exports.ObjectRenderer = ObjectRenderer;
	exports.Quad = Quad;
	exports.QuadUv = QuadUv;
	exports.checkMaxIfStatementsInShader = checkMaxIfStatementsInShader;
	exports.Shader = Shader;
	exports.Program = Program;
	exports.UniformGroup = UniformGroup;
	exports.SpriteMaskFilter = SpriteMaskFilter;
	exports.Filter = Filter;
	exports.Attribute = Attribute_1;
	exports.Buffer = Buffer;
	exports.Geometry = Geometry;
	});
	var core$1 = unwrapExports(core);
	var core_1 = core.systems;
	var core_2 = core.resources;
	var core_3 = core.System;
	var core_4 = core.Renderer;
	var core_5 = core.AbstractRenderer;
	var core_6 = core.FrameBuffer;
	var core_7 = core.CubeTexture;
	var core_8 = core.BaseTexture;
	var core_9 = core.Texture;
	var core_10 = core.TextureMatrix;
	var core_11 = core.RenderTexture;
	var core_12 = core.BaseRenderTexture;
	var core_13 = core.TextureUvs;
	var core_14 = core.State;
	var core_15 = core.ObjectRenderer;
	var core_16 = core.Quad;
	var core_17 = core.QuadUv;
	var core_18 = core.checkMaxIfStatementsInShader;
	var core_19 = core.Shader;
	var core_20 = core.Program;
	var core_21 = core.UniformGroup;
	var core_22 = core.SpriteMaskFilter;
	var core_23 = core.Filter;
	var core_24 = core.Attribute;
	var core_25 = core.Buffer;
	var core_26 = core.Geometry;

	var core$2 = ({
		default: core$1,
		__moduleExports: core,
		systems: core_1,
		resources: core_2,
		System: core_3,
		Renderer: core_4,
		AbstractRenderer: core_5,
		FrameBuffer: core_6,
		CubeTexture: core_7,
		BaseTexture: core_8,
		Texture: core_9,
		TextureMatrix: core_10,
		RenderTexture: core_11,
		BaseRenderTexture: core_12,
		TextureUvs: core_13,
		State: core_14,
		ObjectRenderer: core_15,
		Quad: core_16,
		QuadUv: core_17,
		checkMaxIfStatementsInShader: core_18,
		Shader: core_19,
		Program: core_20,
		UniformGroup: core_21,
		SpriteMaskFilter: core_22,
		Filter: core_23,
		Attribute: core_24,
		Buffer: core_25,
		Geometry: core_26
	});

	var app = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var Application = function Application(options, arg2, arg3, arg4, arg5)
	{
	    var this$1 = this;
	    if (typeof options === 'number')
	    {
	        options = Object.assign({
	            width: options,
	            height: arg2 || settings_1.settings.RENDER_OPTIONS.height,
	            forceCanvas: !!arg4,
	            sharedTicker: !!arg5,
	        }, arg3);
	    }
	    options = Object.assign({
	        forceCanvas: false,
	    }, options);
	    this.renderer = this.createRenderer(options);
	    this.stage = new display.Container();
	    Application._plugins.forEach(function (plugin) {
	        plugin.init.call(this$1, options);
	    });
	};
	var prototypeAccessors = { view: { configurable: true },screen: { configurable: true } };
	Application.registerPlugin = function registerPlugin (plugin)
	{
	    Application._plugins.push(plugin);
	};
	Application.prototype.createRenderer = function createRenderer (options)
	{
	    return new core.Renderer(options);
	};
	Application.prototype.render = function render ()
	{
	    this.renderer.render(this.stage);
	};
	prototypeAccessors.view.get = function ()
	{
	    return this.renderer.view;
	};
	prototypeAccessors.screen.get = function ()
	{
	    return this.renderer.screen;
	};
	Application.prototype.destroy = function destroy (removeView)
	{
	        var this$1 = this;
	    var plugins = Application._plugins.slice(0);
	    plugins.reverse();
	    plugins.forEach(function (plugin) {
	        plugin.destroy.call(this$1);
	    });
	    this.stage.destroy();
	    this.stage = null;
	    this.renderer.destroy(removeView);
	    this.renderer = null;
	    this._options = null;
	};
	Object.defineProperties( Application.prototype, prototypeAccessors );
	Application._plugins = [];
	var ResizePlugin = function ResizePlugin () {};
	ResizePlugin.init = function init (options)
	{
	        var this$1 = this;
	    Object.defineProperty(this, 'resizeTo',
	        {
	            set: function set(dom)
	            {
	                window.removeEventListener('resize', this.resize);
	                this._resizeTo = dom;
	                if (dom)
	                {
	                    window.addEventListener('resize', this.resize);
	                    this.resize();
	                }
	            },
	            get: function get()
	            {
	                return this._resizeTo;
	            },
	        });
	    this.resize = function () {
	        if (this$1._resizeTo)
	        {
	            if (this$1._resizeTo === window)
	            {
	                this$1.renderer.resize(
	                    window.innerWidth,
	                    window.innerHeight
	                );
	            }
	            else
	            {
	                this$1.renderer.resize(
	                    this$1._resizeTo.clientWidth,
	                    this$1._resizeTo.clientHeight
	                );
	            }
	        }
	    };
	    this._resizeTo = null;
	    this.resizeTo = options.resizeTo || null;
	};
	ResizePlugin.destroy = function destroy ()
	{
	    this.resizeTo = null;
	    this.resize = null;
	};
	Application.registerPlugin(ResizePlugin);
	exports.Application = Application;
	});
	var app$1 = unwrapExports(app);
	var app_1 = app.Application;

	var app$2 = ({
		default: app$1,
		__moduleExports: app,
		Application: app_1
	});

	var extract = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var TEMP_RECT = new math.Rectangle();
	var BYTES_PER_PIXEL = 4;
	var Extract = function Extract(renderer)
	{
	    this.renderer = renderer;
	    renderer.extract = this;
	};
	Extract.prototype.image = function image (target)
	{
	    var image = new Image();
	    image.src = this.base64(target);
	    return image;
	};
	Extract.prototype.base64 = function base64 (target)
	{
	    return this.canvas(target).toDataURL();
	};
	Extract.prototype.canvas = function canvas (target)
	{
	    var renderer = this.renderer;
	    var resolution;
	    var frame;
	    var flipY = false;
	    var renderTexture;
	    var generated = false;
	    if (target)
	    {
	        if (target instanceof core.RenderTexture)
	        {
	            renderTexture = target;
	        }
	        else
	        {
	            renderTexture = this.renderer.generateTexture(target);
	            generated = true;
	        }
	    }
	    if (renderTexture)
	    {
	        resolution = renderTexture.baseTexture.resolution;
	        frame = renderTexture.frame;
	        flipY = false;
	        renderer.renderTexture.bind(renderTexture);
	    }
	    else
	    {
	        resolution = this.renderer.resolution;
	        flipY = true;
	        frame = TEMP_RECT;
	        frame.width = this.renderer.width;
	        frame.height = this.renderer.height;
	        renderer.renderTexture.bind(null);
	    }
	    var width = frame.width * resolution;
	    var height = frame.height * resolution;
	    var canvasBuffer = new utils.CanvasRenderTarget(width, height);
	    var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
	    var gl = renderer.gl;
	    gl.readPixels(
	        frame.x * resolution,
	        frame.y * resolution,
	        width,
	        height,
	        gl.RGBA,
	        gl.UNSIGNED_BYTE,
	        webglPixels
	    );
	    var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
	    canvasData.data.set(webglPixels);
	    canvasBuffer.context.putImageData(canvasData, 0, 0);
	    if (flipY)
	    {
	        canvasBuffer.context.scale(1, -1);
	        canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
	    }
	    if (generated)
	    {
	        renderTexture.destroy(true);
	    }
	    return canvasBuffer.canvas;
	};
	Extract.prototype.pixels = function pixels (target)
	{
	    var renderer = this.renderer;
	    var resolution;
	    var frame;
	    var renderTexture;
	    var generated = false;
	    if (target)
	    {
	        if (target instanceof core.RenderTexture)
	        {
	            renderTexture = target;
	        }
	        else
	        {
	            renderTexture = this.renderer.generateTexture(target);
	            generated = true;
	        }
	    }
	    if (renderTexture)
	    {
	        resolution = renderTexture.baseTexture.resolution;
	        frame = renderTexture.frame;
	        renderer.renderTexture.bind(renderTexture);
	    }
	    else
	    {
	        resolution = renderer.resolution;
	        frame = TEMP_RECT;
	        frame.width = renderer.width;
	        frame.height = renderer.height;
	        renderer.renderTexture.bind(null);
	    }
	    var width = frame.width * resolution;
	    var height = frame.height * resolution;
	    var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
	    var gl = renderer.gl;
	    gl.readPixels(
	        frame.x * resolution,
	        frame.y * resolution,
	        width,
	        height,
	        gl.RGBA,
	        gl.UNSIGNED_BYTE,
	        webglPixels
	    );
	    if (generated)
	    {
	        renderTexture.destroy(true);
	    }
	    return webglPixels;
	};
	Extract.prototype.destroy = function destroy ()
	{
	    this.renderer.extract = null;
	    this.renderer = null;
	};
	exports.Extract = Extract;
	});
	var extract$1 = unwrapExports(extract);
	var extract_1 = extract.Extract;

	var extract$2 = ({
		default: extract$1,
		__moduleExports: extract,
		Extract: extract_1
	});

	var sprite = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var bitTwiddle = _interopDefault(twiddle);
	var tempPoint = new math.Point();
	var Sprite = (function (Container$$1) {
	    function Sprite(texture)
	    {
	        Container$$1.call(this);
	        this._anchor = new math.ObservablePoint(this._onAnchorUpdate, this);
	        this._texture = null;
	        this._width = 0;
	        this._height = 0;
	        this._tint = null;
	        this._tintRGB = null;
	        this.tint = 0xFFFFFF;
	        this.blendMode = constants.BLEND_MODES.NORMAL;
	        this.shader = null;
	        this.cachedTint = 0xFFFFFF;
	        this.texture = texture || core.Texture.EMPTY;
	        this.vertexData = new Float32Array(8);
	        this.vertexTrimmedData = null;
	        this._transformID = -1;
	        this._textureID = -1;
	        this._transformTrimmedID = -1;
	        this._textureTrimmedID = -1;
	        this.pluginName = 'sprite';
	    }
	    if ( Container$$1 ) Sprite.__proto__ = Container$$1;
	    Sprite.prototype = Object.create( Container$$1 && Container$$1.prototype );
	    Sprite.prototype.constructor = Sprite;
	    var prototypeAccessors = { width: { configurable: true },height: { configurable: true },anchor: { configurable: true },tint: { configurable: true },texture: { configurable: true } };
	    Sprite.prototype._onTextureUpdate = function _onTextureUpdate ()
	    {
	        this._textureID = -1;
	        this._textureTrimmedID = -1;
	        this.cachedTint = 0xFFFFFF;
	        if (this._width)
	        {
	            this.scale.x = utils.sign(this.scale.x) * this._width / this._texture.orig.width;
	        }
	        if (this._height)
	        {
	            this.scale.y = utils.sign(this.scale.y) * this._height / this._texture.orig.height;
	        }
	    };
	    Sprite.prototype._onAnchorUpdate = function _onAnchorUpdate ()
	    {
	        this._transformID = -1;
	        this._transformTrimmedID = -1;
	    };
	    Sprite.prototype.calculateVertices = function calculateVertices ()
	    {
	        if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID)
	        {
	            return;
	        }
	        this._transformID = this.transform._worldID;
	        this._textureID = this._texture._updateID;
	        var texture = this._texture;
	        var wt = this.transform.worldTransform;
	        var a = wt.a;
	        var b = wt.b;
	        var c = wt.c;
	        var d = wt.d;
	        var tx = wt.tx;
	        var ty = wt.ty;
	        var vertexData = this.vertexData;
	        var trim = texture.trim;
	        var orig = texture.orig;
	        var anchor = this._anchor;
	        var w0 = 0;
	        var w1 = 0;
	        var h0 = 0;
	        var h1 = 0;
	        if (trim)
	        {
	            w1 = trim.x - (anchor._x * orig.width);
	            w0 = w1 + trim.width;
	            h1 = trim.y - (anchor._y * orig.height);
	            h0 = h1 + trim.height;
	        }
	        else
	        {
	            w1 = -anchor._x * orig.width;
	            w0 = w1 + orig.width;
	            h1 = -anchor._y * orig.height;
	            h0 = h1 + orig.height;
	        }
	        vertexData[0] = (a * w1) + (c * h1) + tx;
	        vertexData[1] = (d * h1) + (b * w1) + ty;
	        vertexData[2] = (a * w0) + (c * h1) + tx;
	        vertexData[3] = (d * h1) + (b * w0) + ty;
	        vertexData[4] = (a * w0) + (c * h0) + tx;
	        vertexData[5] = (d * h0) + (b * w0) + ty;
	        vertexData[6] = (a * w1) + (c * h0) + tx;
	        vertexData[7] = (d * h0) + (b * w1) + ty;
	    };
	    Sprite.prototype.calculateTrimmedVertices = function calculateTrimmedVertices ()
	    {
	        if (!this.vertexTrimmedData)
	        {
	            this.vertexTrimmedData = new Float32Array(8);
	        }
	        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
	        {
	            return;
	        }
	        this._transformTrimmedID = this.transform._worldID;
	        this._textureTrimmedID = this._texture._updateID;
	        var texture = this._texture;
	        var vertexData = this.vertexTrimmedData;
	        var orig = texture.orig;
	        var anchor = this._anchor;
	        var wt = this.transform.worldTransform;
	        var a = wt.a;
	        var b = wt.b;
	        var c = wt.c;
	        var d = wt.d;
	        var tx = wt.tx;
	        var ty = wt.ty;
	        var w1 = -anchor._x * orig.width;
	        var w0 = w1 + orig.width;
	        var h1 = -anchor._y * orig.height;
	        var h0 = h1 + orig.height;
	        vertexData[0] = (a * w1) + (c * h1) + tx;
	        vertexData[1] = (d * h1) + (b * w1) + ty;
	        vertexData[2] = (a * w0) + (c * h1) + tx;
	        vertexData[3] = (d * h1) + (b * w0) + ty;
	        vertexData[4] = (a * w0) + (c * h0) + tx;
	        vertexData[5] = (d * h0) + (b * w0) + ty;
	        vertexData[6] = (a * w1) + (c * h0) + tx;
	        vertexData[7] = (d * h0) + (b * w1) + ty;
	    };
	    Sprite.prototype._render = function _render (renderer)
	    {
	        this.calculateVertices();
	        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
	        renderer.plugins[this.pluginName].render(this);
	    };
	    Sprite.prototype._calculateBounds = function _calculateBounds ()
	    {
	        var trim = this._texture.trim;
	        var orig = this._texture.orig;
	        if (!trim || (trim.width === orig.width && trim.height === orig.height))
	        {
	            this.calculateVertices();
	            this._bounds.addQuad(this.vertexData);
	        }
	        else
	        {
	            this.calculateTrimmedVertices();
	            this._bounds.addQuad(this.vertexTrimmedData);
	        }
	    };
	    Sprite.prototype.getLocalBounds = function getLocalBounds (rect)
	    {
	        if (this.children.length === 0)
	        {
	            this._bounds.minX = this._texture.orig.width * -this._anchor._x;
	            this._bounds.minY = this._texture.orig.height * -this._anchor._y;
	            this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
	            this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
	            if (!rect)
	            {
	                if (!this._localBoundsRect)
	                {
	                    this._localBoundsRect = new math.Rectangle();
	                }
	                rect = this._localBoundsRect;
	            }
	            return this._bounds.getRectangle(rect);
	        }
	        return Container$$1.prototype.getLocalBounds.call(this, rect);
	    };
	    Sprite.prototype.containsPoint = function containsPoint (point)
	    {
	        this.worldTransform.applyInverse(point, tempPoint);
	        var width = this._texture.orig.width;
	        var height = this._texture.orig.height;
	        var x1 = -width * this.anchor.x;
	        var y1 = 0;
	        if (tempPoint.x >= x1 && tempPoint.x < x1 + width)
	        {
	            y1 = -height * this.anchor.y;
	            if (tempPoint.y >= y1 && tempPoint.y < y1 + height)
	            {
	                return true;
	            }
	        }
	        return false;
	    };
	    Sprite.prototype.destroy = function destroy (options)
	    {
	        Container$$1.prototype.destroy.call(this, options);
	        this._texture.off('update', this._onTextureUpdate, this);
	        this._anchor = null;
	        var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;
	        if (destroyTexture)
	        {
	            var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;
	            this._texture.destroy(!!destroyBaseTexture);
	        }
	        this._texture = null;
	        this.shader = null;
	    };
	    Sprite.from = function from (source, options)
	    {
	        var texture = (source instanceof core.Texture)
	            ? source
	            : new core.Texture.from(source, options);
	        return new Sprite(texture);
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return Math.abs(this.scale.x) * this._texture.orig.width;
	    };
	    prototypeAccessors.width.set = function (value)
	    {
	        var s = utils.sign(this.scale.x) || 1;
	        this.scale.x = s * value / this._texture.orig.width;
	        this._width = value;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return Math.abs(this.scale.y) * this._texture.orig.height;
	    };
	    prototypeAccessors.height.set = function (value)
	    {
	        var s = utils.sign(this.scale.y) || 1;
	        this.scale.y = s * value / this._texture.orig.height;
	        this._height = value;
	    };
	    prototypeAccessors.anchor.get = function ()
	    {
	        return this._anchor;
	    };
	    prototypeAccessors.anchor.set = function (value)
	    {
	        this._anchor.copyFrom(value);
	    };
	    prototypeAccessors.tint.get = function ()
	    {
	        return this._tint;
	    };
	    prototypeAccessors.tint.set = function (value)
	    {
	        this._tint = value;
	        this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
	    };
	    prototypeAccessors.texture.get = function ()
	    {
	        return this._texture;
	    };
	    prototypeAccessors.texture.set = function (value)
	    {
	        if (this._texture === value)
	        {
	            return;
	        }
	        this._texture = value || core.Texture.EMPTY;
	        this.cachedTint = 0xFFFFFF;
	        this._textureID = -1;
	        this._textureTrimmedID = -1;
	        if (value)
	        {
	            if (value.baseTexture.valid)
	            {
	                this._onTextureUpdate();
	            }
	            else
	            {
	                value.once('update', this._onTextureUpdate, this);
	            }
	        }
	    };
	    Object.defineProperties( Sprite.prototype, prototypeAccessors );
	    return Sprite;
	}(display.Container));
	var BatchBuffer = function BatchBuffer(size)
	{
	    this.vertices = new ArrayBuffer(size);
	    this.float32View = new Float32Array(this.vertices);
	    this.uint32View = new Uint32Array(this.vertices);
	};
	BatchBuffer.prototype.destroy = function destroy ()
	{
	    this.vertices = null;
	    this.positions = null;
	    this.uvs = null;
	    this.colors = null;
	};
	var vertex = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n";
	var fragTemplate = [
	    'varying vec2 vTextureCoord;',
	    'varying vec4 vColor;',
	    'varying float vTextureId;',
	    'uniform sampler2D uSamplers[%count%];',
	    'void main(void){',
	    'vec4 color;',
	    'float textureId = floor(vTextureId+0.5);',
	    '%forloop%',
	    'gl_FragColor = color * vColor;',
	    '}' ].join('\n');
	function generateMultiTextureShader(gl, maxTextures)
	{
	    var sampleValues = new Int32Array(maxTextures);
	    for (var i = 0; i < maxTextures; i++)
	    {
	        sampleValues[i] = i;
	    }
	    var uniforms = {
	        default: core.UniformGroup.from({ uSamplers: sampleValues }, true),
	    };
	    var fragmentSrc = fragTemplate;
	    fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
	    fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));
	    var shader = core.Shader.from(vertex, fragmentSrc, uniforms);
	    return shader;
	}
	function generateSampleSrc(maxTextures)
	{
	    var src = '';
	    src += '\n';
	    src += '\n';
	    for (var i = 0; i < maxTextures; i++)
	    {
	        if (i > 0)
	        {
	            src += '\nelse ';
	        }
	        if (i < maxTextures - 1)
	        {
	            src += "if(textureId == " + i + ".0)";
	        }
	        src += '\n{';
	        src += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);";
	        src += '\n}';
	    }
	    src += '\n';
	    src += '\n';
	    return src;
	}
	var TICK = 0;
	var SpriteRenderer = (function (ObjectRenderer$$1) {
	    function SpriteRenderer(renderer)
	    {
	        var this$1 = this;
	        ObjectRenderer$$1.call(this, renderer);
	        this.vertSize = 5;
	        this.vertByteSize = this.vertSize * 4;
	        this.size = settings_1.settings.SPRITE_BATCH_SIZE;
	        this.buffers = [];
	        for (var i = 1; i <= bitTwiddle.nextPow2(this.size); i *= 2)
	        {
	            this$1.buffers.push(new BatchBuffer(i * 4 * this$1.vertByteSize));
	        }
	        this.indices = utils.createIndicesForQuads(this.size);
	        this.indexBuffer = new core.Buffer(this.indices, true, true);
	        this.shader = null;
	        this.currentIndex = 0;
	        this.groups = [];
	        for (var k = 0; k < this.size; k++)
	        {
	            this$1.groups[k] = { textures: [], textureCount: 0, ids: [], size: 0, start: 0, blend: 0 };
	        }
	        this.sprites = [];
	        this.vertexBuffers = [];
	        this.vaos = [];
	        this.vaoMax = 2;
	        this.vertexCount = 0;
	        this.renderer.on('prerender', this.onPrerender, this);
	    }
	    if ( ObjectRenderer$$1 ) SpriteRenderer.__proto__ = ObjectRenderer$$1;
	    SpriteRenderer.prototype = Object.create( ObjectRenderer$$1 && ObjectRenderer$$1.prototype );
	    SpriteRenderer.prototype.constructor = SpriteRenderer;
	    SpriteRenderer.prototype.contextChange = function contextChange ()
	    {
	        var this$1 = this;
	        var gl = this.renderer.gl;
	        if (settings_1.settings.PREFER_ENV === constants.ENV.WEBGL_LEGACY)
	        {
	            this.MAX_TEXTURES = 1;
	        }
	        else
	        {
	            this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), settings_1.settings.SPRITE_MAX_TEXTURES);
	            this.MAX_TEXTURES = core.checkMaxIfStatementsInShader(this.MAX_TEXTURES, gl);
	        }
	        this.shader = generateMultiTextureShader(gl, this.MAX_TEXTURES);
	        for (var i = 0; i < this.vaoMax; i++)
	        {
	            var buffer = new core.Buffer(null, false);
	            this$1.vaos[i] = new core.Geometry()
	                .addAttribute('aVertexPosition', buffer, 2, false, gl.FLOAT)
	                .addAttribute('aTextureCoord', buffer, 2, true, gl.UNSIGNED_SHORT)
	                .addAttribute('aColor', buffer, 4, true, gl.UNSIGNED_BYTE)
	                .addAttribute('aTextureId', buffer, 1, true, gl.FLOAT)
	                .addIndex(this$1.indexBuffer);
	            this$1.vertexBuffers[i] = buffer;
	        }
	    };
	    SpriteRenderer.prototype.onPrerender = function onPrerender ()
	    {
	        this.vertexCount = 0;
	    };
	    SpriteRenderer.prototype.render = function render (sprite)
	    {
	        if (this.currentIndex >= this.size)
	        {
	            this.flush();
	        }
	        if (!sprite._texture._uvs)
	        {
	            return;
	        }
	        this.sprites[this.currentIndex++] = sprite;
	    };
	    SpriteRenderer.prototype.flush = function flush ()
	    {
	        var this$1 = this;
	        if (this.currentIndex === 0)
	        {
	            return;
	        }
	        var gl = this.renderer.gl;
	        var MAX_TEXTURES = this.MAX_TEXTURES;
	        var np2 = bitTwiddle.nextPow2(this.currentIndex);
	        var log2 = bitTwiddle.log2(np2);
	        var buffer = this.buffers[log2];
	        var sprites = this.sprites;
	        var groups = this.groups;
	        var float32View = buffer.float32View;
	        var uint32View = buffer.uint32View;
	        var touch = this.renderer.textureGC.count;
	        var index = 0;
	        var nextTexture;
	        var currentTexture;
	        var groupCount = 1;
	        var textureId = 0;
	        var textureCount = 0;
	        var currentGroup = groups[0];
	        var vertexData;
	        var uvs;
	        var blendMode = utils.premultiplyBlendMode[
	            sprites[0]._texture.baseTexture.premultiplyAlpha ? 1 : 0][sprites[0].blendMode];
	        currentGroup.textureCount = 0;
	        currentGroup.start = 0;
	        currentGroup.blend = blendMode;
	        TICK++;
	        var i;
	        for (i = 0; i < this.currentIndex; ++i)
	        {
	            var sprite = sprites[i];
	            nextTexture = sprite._texture.baseTexture;
	            textureId = nextTexture._id;
	            var spriteBlendMode = utils.premultiplyBlendMode[Number(nextTexture.premultiplyAlpha)][sprite.blendMode];
	            if (blendMode !== spriteBlendMode)
	            {
	                blendMode = spriteBlendMode;
	                currentTexture = null;
	                textureCount = MAX_TEXTURES;
	                TICK++;
	            }
	            if (currentTexture !== nextTexture)
	            {
	                currentTexture = nextTexture;
	                if (nextTexture._enabled !== TICK)
	                {
	                    if (textureCount === MAX_TEXTURES)
	                    {
	                        TICK++;
	                        textureCount = 0;
	                        currentGroup.size = i - currentGroup.start;
	                        currentGroup = groups[groupCount++];
	                        currentGroup.textureCount = 0;
	                        currentGroup.blend = blendMode;
	                        currentGroup.start = i;
	                    }
	                    nextTexture.touched = touch;
	                    nextTexture._enabled = TICK;
	                    nextTexture._id = textureCount;
	                    currentGroup.textures[currentGroup.textureCount++] = nextTexture;
	                    textureCount++;
	                }
	            }
	            vertexData = sprite.vertexData;
	            uvs = sprite._texture._uvs.uvsUint32;
	            textureId = nextTexture._id;
	            if (this$1.renderer.roundPixels)
	            {
	                var resolution = this$1.renderer.resolution;
	                float32View[index] = ((vertexData[0] * resolution) | 0) / resolution;
	                float32View[index + 1] = ((vertexData[1] * resolution) | 0) / resolution;
	                float32View[index + 5] = ((vertexData[2] * resolution) | 0) / resolution;
	                float32View[index + 6] = ((vertexData[3] * resolution) | 0) / resolution;
	                float32View[index + 10] = ((vertexData[4] * resolution) | 0) / resolution;
	                float32View[index + 11] = ((vertexData[5] * resolution) | 0) / resolution;
	                float32View[index + 15] = ((vertexData[6] * resolution) | 0) / resolution;
	                float32View[index + 16] = ((vertexData[7] * resolution) | 0) / resolution;
	            }
	            else
	            {
	                float32View[index] = vertexData[0];
	                float32View[index + 1] = vertexData[1];
	                float32View[index + 5] = vertexData[2];
	                float32View[index + 6] = vertexData[3];
	                float32View[index + 10] = vertexData[4];
	                float32View[index + 11] = vertexData[5];
	                float32View[index + 15] = vertexData[6];
	                float32View[index + 16] = vertexData[7];
	            }
	            uint32View[index + 2] = uvs[0];
	            uint32View[index + 7] = uvs[1];
	            uint32View[index + 12] = uvs[2];
	            uint32View[index + 17] = uvs[3];
	            var alpha = Math.min(sprite.worldAlpha, 1.0);
	            var argb = alpha < 1.0 && nextTexture.premultiplyAlpha ? utils.premultiplyTint(sprite._tintRGB, alpha)
	                : sprite._tintRGB + (alpha * 255 << 24);
	            uint32View[index + 3] = uint32View[index + 8] = uint32View[index + 13] = uint32View[index + 18] = argb;
	            float32View[index + 4] = float32View[index + 9] = float32View[index + 14] = float32View[index + 19] = textureId;
	            index += 20;
	        }
	        currentGroup.size = i - currentGroup.start;
	        if (!settings_1.settings.CAN_UPLOAD_SAME_BUFFER)
	        {
	            if (this.vaoMax <= this.vertexCount)
	            {
	                this.vaoMax++;
	                var buffer$1 = new core.Buffer(null, false);
	                this.vaos[this.vertexCount] = new core.Geometry()
	                    .addAttribute('aVertexPosition', buffer$1, 2, false, gl.FLOAT)
	                    .addAttribute('aTextureCoord', buffer$1, 2, true, gl.UNSIGNED_SHORT)
	                    .addAttribute('aColor', buffer$1, 4, true, gl.UNSIGNED_BYTE)
	                    .addAttribute('aTextureId', buffer$1, 1, true, gl.FLOAT)
	                    .addIndex(this.indexBuffer);
	                this.vertexBuffers[this.vertexCount] = buffer$1;
	            }
	            this.vertexBuffers[this.vertexCount].update(buffer.vertices, 0);
	            this.renderer.geometry.bind(this.vaos[this.vertexCount]);
	            this.vertexCount++;
	        }
	        else
	        {
	            this.vertexBuffers[this.vertexCount].update(buffer.vertices, 0);
	            this.renderer.geometry.updateBuffers();
	        }
	        for (i = 0; i < groupCount; i++)
	        {
	            var group = groups[i];
	            var groupTextureCount = group.textureCount;
	            for (var j = 0; j < groupTextureCount; j++)
	            {
	                this$1.renderer.texture.bind(group.textures[j], j);
	            }
	            this$1.renderer.state.setBlendMode(group.blend);
	            gl.drawElements(gl.TRIANGLES, group.size * 6, gl.UNSIGNED_SHORT, group.start * 6 * 2);
	        }
	        this.currentIndex = 0;
	    };
	    SpriteRenderer.prototype.start = function start ()
	    {
	        this.renderer.shader.bind(this.shader);
	        if (settings_1.settings.CAN_UPLOAD_SAME_BUFFER)
	        {
	            this.renderer.geometry.bind(this.vaos[this.vertexCount]);
	        }
	    };
	    SpriteRenderer.prototype.stop = function stop ()
	    {
	        this.flush();
	    };
	    SpriteRenderer.prototype.destroy = function destroy ()
	    {
	        var this$1 = this;
	        for (var i = 0; i < this.vaoMax; i++)
	        {
	            if (this$1.vertexBuffers[i])
	            {
	                this$1.vertexBuffers[i].destroy();
	            }
	            if (this$1.vaos[i])
	            {
	                this$1.vaos[i].destroy();
	            }
	        }
	        if (this.indexBuffer)
	        {
	            this.indexBuffer.destroy();
	        }
	        this.renderer.off('prerender', this.onPrerender, this);
	        if (this.shader)
	        {
	            this.shader.destroy();
	            this.shader = null;
	        }
	        this.vertexBuffers = null;
	        this.vaos = null;
	        this.indexBuffer = null;
	        this.indices = null;
	        this.sprites = null;
	        for (var i$1 = 0; i$1 < this.buffers.length; ++i$1)
	        {
	            this$1.buffers[i$1].destroy();
	        }
	        ObjectRenderer$$1.prototype.destroy.call(this);
	    };
	    return SpriteRenderer;
	}(core.ObjectRenderer));
	exports.Sprite = Sprite;
	exports.SpriteRenderer = SpriteRenderer;
	});
	var sprite$1 = unwrapExports(sprite);
	var sprite_1 = sprite.Sprite;
	var sprite_2 = sprite.SpriteRenderer;

	var sprite$2 = ({
		default: sprite$1,
		__moduleExports: sprite,
		Sprite: sprite_1,
		SpriteRenderer: sprite_2
	});

	var graphics = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, path)
	{
	    if ( path === void 0 ) path = [];
	    var dt = 0;
	    var dt2 = 0;
	    var dt3 = 0;
	    var t2 = 0;
	    var t3 = 0;
	    path.push(fromX, fromY);
	    for (var i = 1, j = 0; i <= n; ++i)
	    {
	        j = i / n;
	        dt = (1 - j);
	        dt2 = dt * dt;
	        dt3 = dt2 * dt;
	        t2 = j * j;
	        t3 = t2 * j;
	        path.push(
	            (dt3 * fromX) + (3 * dt2 * j * cpX) + (3 * dt * t2 * cpX2) + (t3 * toX),
	            (dt3 * fromY) + (3 * dt2 * j * cpY) + (3 * dt * t2 * cpY2) + (t3 * toY)
	        );
	    }
	    return path;
	}
	var GraphicsData = function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape, lineAlignment)
	{
	    this.lineWidth = lineWidth;
	    this.lineAlignment = lineAlignment;
	    this.nativeLines = nativeLines;
	    this.lineColor = lineColor;
	    this.lineAlpha = lineAlpha;
	    this._lineTint = lineColor;
	    this.fillColor = fillColor;
	    this.fillAlpha = fillAlpha;
	    this._fillTint = fillColor;
	    this.fill = fill;
	    this.holes = [];
	    this.shape = shape;
	    this.type = shape.type;
	};
	GraphicsData.prototype.clone = function clone ()
	{
	    return new GraphicsData(
	        this.lineWidth,
	        this.lineColor,
	        this.lineAlpha,
	        this.fillColor,
	        this.fillAlpha,
	        this.fill,
	        this.nativeLines,
	        this.shape
	    );
	};
	GraphicsData.prototype.addHole = function addHole (shape)
	{
	    this.holes.push(shape);
	};
	GraphicsData.prototype.destroy = function destroy ()
	{
	    this.shape = null;
	    this.holes = null;
	};
	var tempPoint = new math.Point();
	var tempColor1 = new Float32Array(4);
	var tempColor2 = new Float32Array(4);
	var Graphics = (function (Container$$1) {
	    function Graphics(nativeLines)
	    {
	        if ( nativeLines === void 0 ) nativeLines = false;
	        Container$$1.call(this);
	        this.fillAlpha = 1;
	        this.lineWidth = 0;
	        this.nativeLines = nativeLines;
	        this.lineColor = 0;
	        this.lineAlignment = 0.5;
	        this.graphicsData = [];
	        this.tint = 0xFFFFFF;
	        this._prevTint = 0xFFFFFF;
	        this.blendMode = constants.BLEND_MODES.NORMAL;
	        this.currentPath = null;
	        this._webGL = {};
	        this.isMask = false;
	        this.boundsPadding = 0;
	        this._localBounds = new display.Bounds();
	        this.dirty = 0;
	        this.fastRectDirty = -1;
	        this.clearDirty = 0;
	        this.boundsDirty = -1;
	        this.cachedSpriteDirty = false;
	        this._spriteRect = null;
	        this._fastRect = false;
	    }
	    if ( Container$$1 ) Graphics.__proto__ = Container$$1;
	    Graphics.prototype = Object.create( Container$$1 && Container$$1.prototype );
	    Graphics.prototype.constructor = Graphics;
	    Graphics.prototype.clone = function clone ()
	    {
	        var this$1 = this;
	        var clone = new Graphics();
	        clone.renderable = this.renderable;
	        clone.fillAlpha = this.fillAlpha;
	        clone.lineWidth = this.lineWidth;
	        clone.lineColor = this.lineColor;
	        clone.lineAlignment = this.lineAlignment;
	        clone.tint = this.tint;
	        clone.blendMode = this.blendMode;
	        clone.isMask = this.isMask;
	        clone.boundsPadding = this.boundsPadding;
	        clone.dirty = 0;
	        clone.cachedSpriteDirty = this.cachedSpriteDirty;
	        for (var i = 0; i < this.graphicsData.length; ++i)
	        {
	            clone.graphicsData.push(this$1.graphicsData[i].clone());
	        }
	        clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
	        clone.updateLocalBounds();
	        return clone;
	    };
	    Graphics.prototype._quadraticCurveLength = function _quadraticCurveLength (fromX, fromY, cpX, cpY, toX, toY)
	    {
	        var ax = fromX - ((2.0 * cpX) + toX);
	        var ay = fromY - ((2.0 * cpY) + toY);
	        var bx = 2.0 * ((cpX - 2.0) * fromX);
	        var by = 2.0 * ((cpY - 2.0) * fromY);
	        var a = 4.0 * ((ax * ax) + (ay * ay));
	        var b = 4.0 * ((ax * bx) + (ay * by));
	        var c = (bx * bx) + (by * by);
	        var s = 2.0 * Math.sqrt(a + b + c);
	        var a2 = Math.sqrt(a);
	        var a32 = 2.0 * a * a2;
	        var c2 = 2.0 * Math.sqrt(c);
	        var ba = b / a2;
	        return (
	            (a32 * s)
	                + (a2 * b * (s - c2))
	                + (
	                    ((4.0 * c * a) - (b * b))
	                   * Math.log(((2.0 * a2) + ba + s) / (ba + c2))
	                )
	        ) / (4.0 * a32);
	    };
	    Graphics.prototype._bezierCurveLength = function _bezierCurveLength (fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY)
	    {
	        var n = 10;
	        var result = 0.0;
	        var t = 0.0;
	        var t2 = 0.0;
	        var t3 = 0.0;
	        var nt = 0.0;
	        var nt2 = 0.0;
	        var nt3 = 0.0;
	        var x = 0.0;
	        var y = 0.0;
	        var dx = 0.0;
	        var dy = 0.0;
	        var prevX = fromX;
	        var prevY = fromY;
	        for (var i = 1; i <= n; ++i)
	        {
	            t = i / n;
	            t2 = t * t;
	            t3 = t2 * t;
	            nt = (1.0 - t);
	            nt2 = nt * nt;
	            nt3 = nt2 * nt;
	            x = (nt3 * fromX) + (3.0 * nt2 * t * cpX) + (3.0 * nt * t2 * cpX2) + (t3 * toX);
	            y = (nt3 * fromY) + (3.0 * nt2 * t * cpY) + (3 * nt * t2 * cpY2) + (t3 * toY);
	            dx = prevX - x;
	            dy = prevY - y;
	            prevX = x;
	            prevY = y;
	            result += Math.sqrt((dx * dx) + (dy * dy));
	        }
	        return result;
	    };
	    Graphics.prototype._segmentsCount = function _segmentsCount (length)
	    {
	        var result = Math.ceil(length / Graphics.CURVES.maxLength);
	        if (result < Graphics.CURVES.minSegments)
	        {
	            result = Graphics.CURVES.minSegments;
	        }
	        else if (result > Graphics.CURVES.maxSegments)
	        {
	            result = Graphics.CURVES.maxSegments;
	        }
	        return result;
	    };
	    Graphics.prototype.lineStyle = function lineStyle (lineWidth, color, alpha, alignment)
	    {
	        if ( lineWidth === void 0 ) lineWidth = 0;
	        if ( color === void 0 ) color = 0;
	        if ( alpha === void 0 ) alpha = 1;
	        if ( alignment === void 0 ) alignment = 0.5;
	        this.lineWidth = lineWidth;
	        this.lineColor = color;
	        this.lineAlpha = alpha;
	        this.lineAlignment = alignment;
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length)
	            {
	                var shape = new math.Polygon(this.currentPath.shape.points.slice(-2));
	                shape.closed = false;
	                this.drawShape(shape);
	            }
	            else
	            {
	                this.currentPath.lineWidth = this.lineWidth;
	                this.currentPath.lineColor = this.lineColor;
	                this.currentPath.lineAlpha = this.lineAlpha;
	                this.currentPath.lineAlignment = this.lineAlignment;
	            }
	        }
	        return this;
	    };
	    Graphics.prototype.moveTo = function moveTo (x, y)
	    {
	        var shape = new math.Polygon([x, y]);
	        shape.closed = false;
	        this.drawShape(shape);
	        return this;
	    };
	    Graphics.prototype.lineTo = function lineTo (x, y)
	    {
	        this.currentPath.shape.points.push(x, y);
	        this.dirty++;
	        return this;
	    };
	    Graphics.prototype.quadraticCurveTo = function quadraticCurveTo (cpX, cpY, toX, toY)
	    {
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length === 0)
	            {
	                this.currentPath.shape.points = [0, 0];
	            }
	        }
	        else
	        {
	            this.moveTo(0, 0);
	        }
	        var points = this.currentPath.shape.points;
	        var xa = 0;
	        var ya = 0;
	        if (points.length === 0)
	        {
	            this.moveTo(0, 0);
	        }
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        var n = Graphics.CURVES.adaptive
	            ? this._segmentsCount(this._quadraticCurveLength(fromX, fromY, cpX, cpY, toX, toY))
	            : 20;
	        for (var i = 1; i <= n; ++i)
	        {
	            var j = i / n;
	            xa = fromX + ((cpX - fromX) * j);
	            ya = fromY + ((cpY - fromY) * j);
	            points.push(xa + (((cpX + ((toX - cpX) * j)) - xa) * j),
	                ya + (((cpY + ((toY - cpY) * j)) - ya) * j));
	        }
	        this.dirty++;
	        return this;
	    };
	    Graphics.prototype.bezierCurveTo = function bezierCurveTo$1 (cpX, cpY, cpX2, cpY2, toX, toY)
	    {
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length === 0)
	            {
	                this.currentPath.shape.points = [0, 0];
	            }
	        }
	        else
	        {
	            this.moveTo(0, 0);
	        }
	        var points = this.currentPath.shape.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        points.length -= 2;
	        var n = Graphics.CURVES.adaptive
	            ? this._segmentsCount(this._bezierCurveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY))
	            : 20;
	        bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, points);
	        this.dirty++;
	        return this;
	    };
	    Graphics.prototype.arcTo = function arcTo (x1, y1, x2, y2, radius)
	    {
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length === 0)
	            {
	                this.currentPath.shape.points.push(x1, y1);
	            }
	        }
	        else
	        {
	            this.moveTo(x1, y1);
	        }
	        var points = this.currentPath.shape.points;
	        var fromX = points[points.length - 2];
	        var fromY = points[points.length - 1];
	        var a1 = fromY - y1;
	        var b1 = fromX - x1;
	        var a2 = y2 - y1;
	        var b2 = x2 - x1;
	        var mm = Math.abs((a1 * b2) - (b1 * a2));
	        if (mm < 1.0e-8 || radius === 0)
	        {
	            if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1)
	            {
	                points.push(x1, y1);
	            }
	        }
	        else
	        {
	            var dd = (a1 * a1) + (b1 * b1);
	            var cc = (a2 * a2) + (b2 * b2);
	            var tt = (a1 * a2) + (b1 * b2);
	            var k1 = radius * Math.sqrt(dd) / mm;
	            var k2 = radius * Math.sqrt(cc) / mm;
	            var j1 = k1 * tt / dd;
	            var j2 = k2 * tt / cc;
	            var cx = (k1 * b2) + (k2 * b1);
	            var cy = (k1 * a2) + (k2 * a1);
	            var px = b1 * (k2 + j1);
	            var py = a1 * (k2 + j1);
	            var qx = b2 * (k1 + j2);
	            var qy = a2 * (k1 + j2);
	            var startAngle = Math.atan2(py - cy, px - cx);
	            var endAngle = Math.atan2(qy - cy, qx - cx);
	            this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	        }
	        this.dirty++;
	        return this;
	    };
	    Graphics.prototype.arc = function arc (cx, cy, radius, startAngle, endAngle, anticlockwise)
	    {
	        if ( anticlockwise === void 0 ) anticlockwise = false;
	        if (startAngle === endAngle)
	        {
	            return this;
	        }
	        if (!anticlockwise && endAngle <= startAngle)
	        {
	            endAngle += math.PI_2;
	        }
	        else if (anticlockwise && startAngle <= endAngle)
	        {
	            startAngle += math.PI_2;
	        }
	        var sweep = endAngle - startAngle;
	        var segs = Graphics.CURVES.adaptive
	            ? this._segmentsCount(Math.abs(sweep) * radius)
	            : Math.ceil(Math.abs(sweep) / math.PI_2) * 40;
	        if (sweep === 0)
	        {
	            return this;
	        }
	        var startX = cx + (Math.cos(startAngle) * radius);
	        var startY = cy + (Math.sin(startAngle) * radius);
	        var points = this.currentPath ? this.currentPath.shape.points : null;
	        if (points)
	        {
	            if (points[points.length - 2] !== startX || points[points.length - 1] !== startY)
	            {
	                points.push(startX, startY);
	            }
	        }
	        else
	        {
	            this.moveTo(startX, startY);
	            points = this.currentPath.shape.points;
	        }
	        var theta = sweep / (segs * 2);
	        var theta2 = theta * 2;
	        var cTheta = Math.cos(theta);
	        var sTheta = Math.sin(theta);
	        var segMinus = segs - 1;
	        var remainder = (segMinus % 1) / segMinus;
	        for (var i = 0; i <= segMinus; ++i)
	        {
	            var real = i + (remainder * i);
	            var angle = ((theta) + startAngle + (theta2 * real));
	            var c = Math.cos(angle);
	            var s = -Math.sin(angle);
	            points.push(
	                (((cTheta * c) + (sTheta * s)) * radius) + cx,
	                (((cTheta * -s) + (sTheta * c)) * radius) + cy
	            );
	        }
	        this.dirty++;
	        return this;
	    };
	    Graphics.prototype.beginFill = function beginFill (color, alpha)
	    {
	        if ( color === void 0 ) color = 0;
	        if ( alpha === void 0 ) alpha = 1;
	        this.filling = true;
	        this.fillColor = color;
	        this.fillAlpha = alpha;
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length <= 2)
	            {
	                this.currentPath.fill = this.filling;
	                this.currentPath.fillColor = this.fillColor;
	                this.currentPath.fillAlpha = this.fillAlpha;
	            }
	        }
	        return this;
	    };
	    Graphics.prototype.endFill = function endFill ()
	    {
	        this.filling = false;
	        this.fillColor = null;
	        this.fillAlpha = 1;
	        return this;
	    };
	    Graphics.prototype.drawRect = function drawRect (x, y, width, height)
	    {
	        this.drawShape(new math.Rectangle(x, y, width, height));
	        return this;
	    };
	    Graphics.prototype.drawRoundedRect = function drawRoundedRect (x, y, width, height, radius)
	    {
	        this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));
	        return this;
	    };
	    Graphics.prototype.drawCircle = function drawCircle (x, y, radius)
	    {
	        this.drawShape(new math.Circle(x, y, radius));
	        return this;
	    };
	    Graphics.prototype.drawEllipse = function drawEllipse (x, y, width, height)
	    {
	        this.drawShape(new math.Ellipse(x, y, width, height));
	        return this;
	    };
	    Graphics.prototype.drawPolygon = function drawPolygon (path)
	    {
	        var arguments$1 = arguments;
	        var points = path;
	        var closed = true;
	        if (points instanceof math.Polygon)
	        {
	            closed = points.closed;
	            points = points.points;
	        }
	        if (!Array.isArray(points))
	        {
	            points = new Array(arguments.length);
	            for (var i = 0; i < points.length; ++i)
	            {
	                points[i] = arguments$1[i];
	            }
	        }
	        var shape = new math.Polygon(points);
	        shape.closed = closed;
	        this.drawShape(shape);
	        return this;
	    };
	    Graphics.prototype.drawStar = function drawStar (x, y, points, radius, innerRadius, rotation)
	    {
	        if ( rotation === void 0 ) rotation = 0;
	        innerRadius = innerRadius || radius / 2;
	        var startAngle = (-1 * Math.PI / 2) + rotation;
	        var len = points * 2;
	        var delta = math.PI_2 / len;
	        var polygon = [];
	        for (var i = 0; i < len; i++)
	        {
	            var r = i % 2 ? innerRadius : radius;
	            var angle = (i * delta) + startAngle;
	            polygon.push(
	                x + (r * Math.cos(angle)),
	                y + (r * Math.sin(angle))
	            );
	        }
	        return this.drawPolygon(polygon);
	    };
	    Graphics.prototype.clear = function clear ()
	    {
	        if (this.lineWidth || this.filling || this.graphicsData.length > 0)
	        {
	            this.lineWidth = 0;
	            this.lineAlignment = 0.5;
	            this.filling = false;
	            this.boundsDirty = -1;
	            this.dirty++;
	            this.clearDirty++;
	            this.graphicsData.length = 0;
	        }
	        this.currentPath = null;
	        this._spriteRect = null;
	        return this;
	    };
	    Graphics.prototype.isFastRect = function isFastRect ()
	    {
	        return this.graphicsData.length === 1
	            && this.graphicsData[0].shape.type === math.SHAPES.RECT
	            && !this.graphicsData[0].lineWidth;
	    };
	    Graphics.prototype._render = function _render (renderer)
	    {
	        if (this.dirty !== this.fastRectDirty)
	        {
	            this.fastRectDirty = this.dirty;
	            this._fastRect = this.isFastRect();
	        }
	        if (this._fastRect)
	        {
	            this._renderSpriteRect(renderer);
	        }
	        else
	        {
	            renderer.batch.setObjectRenderer(renderer.plugins.graphics);
	            renderer.plugins.graphics.render(this);
	        }
	    };
	    Graphics.prototype._renderSpriteRect = function _renderSpriteRect (renderer)
	    {
	        var rect = this.graphicsData[0].shape;
	        if (!this._spriteRect)
	        {
	            this._spriteRect = new sprite.Sprite(new core.Texture(core.Texture.WHITE));
	        }
	        var sprite$$1 = this._spriteRect;
	        if (this.tint === 0xffffff)
	        {
	            sprite$$1.tint = this.graphicsData[0].fillColor;
	        }
	        else
	        {
	            var t1 = tempColor1;
	            var t2 = tempColor2;
	            utils.hex2rgb(this.graphicsData[0].fillColor, t1);
	            utils.hex2rgb(this.tint, t2);
	            t1[0] *= t2[0];
	            t1[1] *= t2[1];
	            t1[2] *= t2[2];
	            sprite$$1.tint = utils.rgb2hex(t1);
	        }
	        sprite$$1.alpha = this.graphicsData[0].fillAlpha;
	        sprite$$1.worldAlpha = this.worldAlpha * sprite$$1.alpha;
	        sprite$$1.blendMode = this.blendMode;
	        sprite$$1._texture._frame.width = rect.width;
	        sprite$$1._texture._frame.height = rect.height;
	        sprite$$1.transform.worldTransform = this.transform.worldTransform;
	        sprite$$1.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
	        sprite$$1._onAnchorUpdate();
	        sprite$$1._render(renderer);
	    };
	    Graphics.prototype._calculateBounds = function _calculateBounds ()
	    {
	        if (this.boundsDirty !== this.dirty)
	        {
	            this.boundsDirty = this.dirty;
	            this.updateLocalBounds();
	            this.cachedSpriteDirty = true;
	        }
	        var lb = this._localBounds;
	        this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
	    };
	    Graphics.prototype.containsPoint = function containsPoint (point)
	    {
	        this.worldTransform.applyInverse(point, tempPoint);
	        var graphicsData = this.graphicsData;
	        for (var i = 0; i < graphicsData.length; ++i)
	        {
	            var data = graphicsData[i];
	            if (!data.fill)
	            {
	                continue;
	            }
	            if (data.shape)
	            {
	                if (data.shape.contains(tempPoint.x, tempPoint.y))
	                {
	                    if (data.holes)
	                    {
	                        for (var i$1 = 0; i$1 < data.holes.length; i$1++)
	                        {
	                            var hole = data.holes[i$1];
	                            if (hole.contains(tempPoint.x, tempPoint.y))
	                            {
	                                return false;
	                            }
	                        }
	                    }
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    Graphics.prototype.updateLocalBounds = function updateLocalBounds ()
	    {
	        var this$1 = this;
	        var minX = Infinity;
	        var maxX = -Infinity;
	        var minY = Infinity;
	        var maxY = -Infinity;
	        if (this.graphicsData.length)
	        {
	            var shape = 0;
	            var x = 0;
	            var y = 0;
	            var w = 0;
	            var h = 0;
	            for (var i = 0; i < this.graphicsData.length; i++)
	            {
	                var data = this$1.graphicsData[i];
	                var type = data.type;
	                var lineWidth = data.lineWidth;
	                shape = data.shape;
	                if (type === math.SHAPES.RECT || type === math.SHAPES.RREC)
	                {
	                    x = shape.x - (lineWidth / 2);
	                    y = shape.y - (lineWidth / 2);
	                    w = shape.width + lineWidth;
	                    h = shape.height + lineWidth;
	                    minX = x < minX ? x : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y < minY ? y : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else if (type === math.SHAPES.CIRC)
	                {
	                    x = shape.x;
	                    y = shape.y;
	                    w = shape.radius + (lineWidth / 2);
	                    h = shape.radius + (lineWidth / 2);
	                    minX = x - w < minX ? x - w : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y - h < minY ? y - h : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else if (type === math.SHAPES.ELIP)
	                {
	                    x = shape.x;
	                    y = shape.y;
	                    w = shape.width + (lineWidth / 2);
	                    h = shape.height + (lineWidth / 2);
	                    minX = x - w < minX ? x - w : minX;
	                    maxX = x + w > maxX ? x + w : maxX;
	                    minY = y - h < minY ? y - h : minY;
	                    maxY = y + h > maxY ? y + h : maxY;
	                }
	                else
	                {
	                    var points = shape.points;
	                    var x2 = 0;
	                    var y2 = 0;
	                    var dx = 0;
	                    var dy = 0;
	                    var rw = 0;
	                    var rh = 0;
	                    var cx = 0;
	                    var cy = 0;
	                    for (var j = 0; j + 2 < points.length; j += 2)
	                    {
	                        x = points[j];
	                        y = points[j + 1];
	                        x2 = points[j + 2];
	                        y2 = points[j + 3];
	                        dx = Math.abs(x2 - x);
	                        dy = Math.abs(y2 - y);
	                        h = lineWidth;
	                        w = Math.sqrt((dx * dx) + (dy * dy));
	                        if (w < 1e-9)
	                        {
	                            continue;
	                        }
	                        rw = ((h / w * dy) + dx) / 2;
	                        rh = ((h / w * dx) + dy) / 2;
	                        cx = (x2 + x) / 2;
	                        cy = (y2 + y) / 2;
	                        minX = cx - rw < minX ? cx - rw : minX;
	                        maxX = cx + rw > maxX ? cx + rw : maxX;
	                        minY = cy - rh < minY ? cy - rh : minY;
	                        maxY = cy + rh > maxY ? cy + rh : maxY;
	                    }
	                }
	            }
	        }
	        else
	        {
	            minX = 0;
	            maxX = 0;
	            minY = 0;
	            maxY = 0;
	        }
	        var padding = this.boundsPadding;
	        this._localBounds.minX = minX - padding;
	        this._localBounds.maxX = maxX + padding;
	        this._localBounds.minY = minY - padding;
	        this._localBounds.maxY = maxY + padding;
	    };
	    Graphics.prototype.drawShape = function drawShape (shape)
	    {
	        if (this.currentPath)
	        {
	            if (this.currentPath.shape.points.length <= 2)
	            {
	                this.graphicsData.pop();
	            }
	        }
	        this.currentPath = null;
	        var data = new GraphicsData(
	            this.lineWidth,
	            this.lineColor,
	            this.lineAlpha,
	            this.fillColor,
	            this.fillAlpha,
	            this.filling,
	            this.nativeLines,
	            shape,
	            this.lineAlignment
	        );
	        this.graphicsData.push(data);
	        if (data.type === math.SHAPES.POLY)
	        {
	            data.shape.closed = data.shape.closed || this.filling;
	            this.currentPath = data;
	        }
	        this.dirty++;
	        return data;
	    };
	    Graphics.prototype.closePath = function closePath ()
	    {
	        var currentPath = this.currentPath;
	        if (currentPath && currentPath.shape)
	        {
	            currentPath.shape.close();
	        }
	        return this;
	    };
	    Graphics.prototype.addHole = function addHole ()
	    {
	        var hole = this.graphicsData.pop();
	        this.currentPath = this.graphicsData[this.graphicsData.length - 1];
	        this.currentPath.addHole(hole.shape);
	        this.currentPath = null;
	        return this;
	    };
	    Graphics.prototype.destroy = function destroy (options)
	    {
	        var this$1 = this;
	        Container$$1.prototype.destroy.call(this, options);
	        for (var i = 0; i < this.graphicsData.length; ++i)
	        {
	            this$1.graphicsData[i].destroy();
	        }
	        for (var id in this$1._webGL)
	        {
	            for (var j = 0; j < this._webGL[id].data.length; ++j)
	            {
	                this$1._webGL[id].data[j].destroy();
	            }
	        }
	        if (this._spriteRect)
	        {
	            this._spriteRect.destroy();
	        }
	        this.graphicsData = null;
	        this.currentPath = null;
	        this._webGL = null;
	        this._localBounds = null;
	    };
	    return Graphics;
	}(display.Container));
	Graphics._SPRITE_TEXTURE = null;
	Graphics.CURVES = {
	    adaptive: false,
	    maxLength: 10,
	    minSegments: 8,
	    maxSegments: 2048,
	};
	var WebGLGraphicsData = function WebGLGraphicsData(gl, shader)
	{
	    this.gl = gl;
	    this.color = [0, 0, 0];
	    this.points = [];
	    this.indices = [];
	    this.buffer = new core.Buffer();
	    this.indexBuffer = new core.Buffer();
	    this.dirty = true;
	    this.nativeLines = false;
	    this.glPoints = null;
	    this.glIndices = null;
	    this.shader = shader;
	    this.geometry = new core.Geometry()
	        .addAttribute('aVertexPosition|aColor', this.buffer)
	        .addIndex(this.indexBuffer);
	};
	WebGLGraphicsData.prototype.reset = function reset ()
	{
	    this.points.length = 0;
	    this.indices.length = 0;
	};
	WebGLGraphicsData.prototype.upload = function upload ()
	{
	    this.glPoints = new Float32Array(this.points);
	    this.buffer.update(this.glPoints);
	    this.glIndices = new Uint16Array(this.indices);
	    this.indexBuffer.update(this.glIndices);
	    this.dirty = false;
	};
	WebGLGraphicsData.prototype.destroy = function destroy ()
	{
	    this.color = null;
	    this.points = null;
	    this.indices = null;
	    this.vao.destroy();
	    this.buffer.destroy();
	    this.indexBuffer.destroy();
	    this.gl = null;
	    this.buffer = null;
	    this.indexBuffer = null;
	    this.glPoints = null;
	    this.glIndices = null;
	};
	var fragment = "varying vec4 vColor;\n\nvoid main(void){\n   gl_FragColor = vColor;\n}\n";
	var vertex = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nuniform float alpha;\nuniform vec3 tint;\n\nvarying vec4 vColor;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}\n";
	var PrimitiveShader = (function (Shader$$1) {
	    function PrimitiveShader()
	    {
	        var program = core.Program.from(vertex, fragment);
	        Shader$$1.call(this, program, {});
	    }
	    if ( Shader$$1 ) PrimitiveShader.__proto__ = Shader$$1;
	    PrimitiveShader.prototype = Object.create( Shader$$1 && Shader$$1.prototype );
	    PrimitiveShader.prototype.constructor = PrimitiveShader;
	    return PrimitiveShader;
	}(core.Shader));
	function buildLine (graphicsData, webGLData, webGLDataNativeLines)
	{
	    if (graphicsData.nativeLines)
	    {
	        buildNativeLine(graphicsData, webGLDataNativeLines);
	    }
	    else
	    {
	        buildLine$1(graphicsData, webGLData);
	    }
	}
	function buildLine$1(graphicsData, webGLData)
	{
	    var points = graphicsData.points;
	    if (points.length === 0)
	    {
	        return;
	    }
	    var firstPoint = new math.Point(points[0], points[1]);
	    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);
	    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y)
	    {
	        points = points.slice();
	        points.pop();
	        points.pop();
	        lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);
	        var midPointX = lastPoint.x + ((firstPoint.x - lastPoint.x) * 0.5);
	        var midPointY = lastPoint.y + ((firstPoint.y - lastPoint.y) * 0.5);
	        points.unshift(midPointX, midPointY);
	        points.push(midPointX, midPointY);
	    }
	    var verts = webGLData.points;
	    var indices = webGLData.indices;
	    var length = points.length / 2;
	    var indexCount = points.length;
	    var indexStart = verts.length / 6;
	    var width = graphicsData.lineWidth / 2;
	    var color = utils.hex2rgb(graphicsData.lineColor);
	    var alpha = graphicsData.lineAlpha;
	    var r = color[0] * alpha;
	    var g = color[1] * alpha;
	    var b = color[2] * alpha;
	    var p1x = points[0];
	    var p1y = points[1];
	    var p2x = points[2];
	    var p2y = points[3];
	    var p3x = 0;
	    var p3y = 0;
	    var perpx = -(p1y - p2y);
	    var perpy = p1x - p2x;
	    var perp2x = 0;
	    var perp2y = 0;
	    var perp3x = 0;
	    var perp3y = 0;
	    var dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;
	    var ratio = graphicsData.lineAlignment;
	    var r1 = (1 - ratio) * 2;
	    var r2 = ratio * 2;
	    verts.push(
	        p1x - (perpx * r1),
	        p1y - (perpy * r1),
	        r, g, b, alpha
	    );
	    verts.push(
	        p1x + (perpx * r2),
	        p1y + (perpy * r2),
	        r, g, b, alpha
	    );
	    for (var i = 1; i < length - 1; ++i)
	    {
	        p1x = points[(i - 1) * 2];
	        p1y = points[((i - 1) * 2) + 1];
	        p2x = points[i * 2];
	        p2y = points[(i * 2) + 1];
	        p3x = points[(i + 1) * 2];
	        p3y = points[((i + 1) * 2) + 1];
	        perpx = -(p1y - p2y);
	        perpy = p1x - p2x;
	        dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	        perpx /= dist;
	        perpy /= dist;
	        perpx *= width;
	        perpy *= width;
	        perp2x = -(p2y - p3y);
	        perp2y = p2x - p3x;
	        dist = Math.sqrt((perp2x * perp2x) + (perp2y * perp2y));
	        perp2x /= dist;
	        perp2y /= dist;
	        perp2x *= width;
	        perp2y *= width;
	        var a1 = (-perpy + p1y) - (-perpy + p2y);
	        var b1 = (-perpx + p2x) - (-perpx + p1x);
	        var c1 = ((-perpx + p1x) * (-perpy + p2y)) - ((-perpx + p2x) * (-perpy + p1y));
	        var a2 = (-perp2y + p3y) - (-perp2y + p2y);
	        var b2 = (-perp2x + p2x) - (-perp2x + p3x);
	        var c2 = ((-perp2x + p3x) * (-perp2y + p2y)) - ((-perp2x + p2x) * (-perp2y + p3y));
	        var denom = (a1 * b2) - (a2 * b1);
	        if (Math.abs(denom) < 0.1)
	        {
	            denom += 10.1;
	            verts.push(
	                p2x - (perpx * r1),
	                p2y - (perpy * r1),
	                r, g, b, alpha
	            );
	            verts.push(
	                p2x + (perpx * r2),
	                p2y + (perpy * r2),
	                r, g, b, alpha
	            );
	            continue;
	        }
	        var px = ((b1 * c2) - (b2 * c1)) / denom;
	        var py = ((a2 * c1) - (a1 * c2)) / denom;
	        var pdist = ((px - p2x) * (px - p2x)) + ((py - p2y) * (py - p2y));
	        if (pdist > (196 * width * width))
	        {
	            perp3x = perpx - perp2x;
	            perp3y = perpy - perp2y;
	            dist = Math.sqrt((perp3x * perp3x) + (perp3y * perp3y));
	            perp3x /= dist;
	            perp3y /= dist;
	            perp3x *= width;
	            perp3y *= width;
	            verts.push(p2x - (perp3x * r1), p2y - (perp3y * r1));
	            verts.push(r, g, b, alpha);
	            verts.push(p2x + (perp3x * r2), p2y + (perp3y * r2));
	            verts.push(r, g, b, alpha);
	            verts.push(p2x - (perp3x * r2 * r1), p2y - (perp3y * r1));
	            verts.push(r, g, b, alpha);
	            indexCount++;
	        }
	        else
	        {
	            verts.push(p2x + ((px - p2x) * r1), p2y + ((py - p2y) * r1));
	            verts.push(r, g, b, alpha);
	            verts.push(p2x - ((px - p2x) * r2), p2y - ((py - p2y) * r2));
	            verts.push(r, g, b, alpha);
	        }
	    }
	    p1x = points[(length - 2) * 2];
	    p1y = points[((length - 2) * 2) + 1];
	    p2x = points[(length - 1) * 2];
	    p2y = points[((length - 1) * 2) + 1];
	    perpx = -(p1y - p2y);
	    perpy = p1x - p2x;
	    dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;
	    verts.push(p2x - (perpx * r1), p2y - (perpy * r1));
	    verts.push(r, g, b, alpha);
	    verts.push(p2x + (perpx * r2), p2y + (perpy * r2));
	    verts.push(r, g, b, alpha);
	    indices.push(indexStart);
	    for (var i$1 = 0; i$1 < indexCount; ++i$1)
	    {
	        indices.push(indexStart++);
	    }
	    indices.push(indexStart - 1);
	}
	function buildNativeLine(graphicsData, webGLData)
	{
	    var i = 0;
	    var points = graphicsData.points;
	    if (points.length === 0) { return; }
	    var verts = webGLData.points;
	    var length = points.length / 2;
	    var color = utils.hex2rgb(graphicsData.lineColor);
	    var alpha = graphicsData.lineAlpha;
	    var r = color[0] * alpha;
	    var g = color[1] * alpha;
	    var b = color[2] * alpha;
	    for (i = 1; i < length; i++)
	    {
	        var p1x = points[(i - 1) * 2];
	        var p1y = points[((i - 1) * 2) + 1];
	        var p2x = points[i * 2];
	        var p2y = points[(i * 2) + 1];
	        verts.push(p1x, p1y);
	        verts.push(r, g, b, alpha);
	        verts.push(p2x, p2y);
	        verts.push(r, g, b, alpha);
	    }
	}
	function buildPoly(graphicsData, webGLData, webGLDataNativeLines)
	{
	    graphicsData.points = graphicsData.shape.points.slice();
	    var points = graphicsData.points;
	    if (graphicsData.fill && points.length >= 6)
	    {
	        var holeArray = [];
	        var holes = graphicsData.holes;
	        for (var i = 0; i < holes.length; i++)
	        {
	            var hole = holes[i];
	            holeArray.push(points.length / 2);
	            points = points.concat(hole.points);
	        }
	        var verts = webGLData.points;
	        var indices = webGLData.indices;
	        var length = points.length / 2;
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;
	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;
	        var triangles = utils.earcut(points, holeArray, 2);
	        if (!triangles)
	        {
	            return;
	        }
	        var vertPos = verts.length / 6;
	        for (var i$1 = 0; i$1 < triangles.length; i$1 += 3)
	        {
	            indices.push(triangles[i$1] + vertPos);
	            indices.push(triangles[i$1] + vertPos);
	            indices.push(triangles[i$1 + 1] + vertPos);
	            indices.push(triangles[i$1 + 2] + vertPos);
	            indices.push(triangles[i$1 + 2] + vertPos);
	        }
	        for (var i$2 = 0; i$2 < length; i$2++)
	        {
	            verts.push(points[i$2 * 2], points[(i$2 * 2) + 1],
	                r, g, b, alpha);
	        }
	    }
	    if (graphicsData.lineWidth > 0)
	    {
	        buildLine(graphicsData, webGLData, webGLDataNativeLines);
	    }
	}
	function buildRectangle(graphicsData, webGLData, webGLDataNativeLines)
	{
	    var rectData = graphicsData.shape;
	    var x = rectData.x;
	    var y = rectData.y;
	    var width = rectData.width;
	    var height = rectData.height;
	    if (graphicsData.fill)
	    {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;
	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;
	        var verts = webGLData.points;
	        var indices = webGLData.indices;
	        var vertPos = verts.length / 6;
	        verts.push(x, y);
	        verts.push(r, g, b, alpha);
	        verts.push(x + width, y);
	        verts.push(r, g, b, alpha);
	        verts.push(x, y + height);
	        verts.push(r, g, b, alpha);
	        verts.push(x + width, y + height);
	        verts.push(r, g, b, alpha);
	        indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
	    }
	    if (graphicsData.lineWidth)
	    {
	        var tempPoints = graphicsData.points;
	        graphicsData.points = [x, y,
	            x + width, y,
	            x + width, y + height,
	            x, y + height,
	            x, y];
	        buildLine(graphicsData, webGLData, webGLDataNativeLines);
	        graphicsData.points = tempPoints;
	    }
	}
	function buildRoundedRectangle(graphicsData, webGLData, webGLDataNativeLines)
	{
	    var rrectData = graphicsData.shape;
	    var x = rrectData.x;
	    var y = rrectData.y;
	    var width = rrectData.width;
	    var height = rrectData.height;
	    var radius = rrectData.radius;
	    var recPoints = [];
	    recPoints.push(x, y + radius);
	    quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
	    quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
	    quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
	    quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);
	    if (graphicsData.fill)
	    {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;
	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;
	        var verts = webGLData.points;
	        var indices = webGLData.indices;
	        var vecPos = verts.length / 6;
	        var triangles = utils.earcut(recPoints, null, 2);
	        for (var i = 0, j = triangles.length; i < j; i += 3)
	        {
	            indices.push(triangles[i] + vecPos);
	            indices.push(triangles[i] + vecPos);
	            indices.push(triangles[i + 1] + vecPos);
	            indices.push(triangles[i + 2] + vecPos);
	            indices.push(triangles[i + 2] + vecPos);
	        }
	        for (var i$1 = 0, j$1 = recPoints.length; i$1 < j$1; i$1++)
	        {
	            verts.push(recPoints[i$1], recPoints[++i$1], r, g, b, alpha);
	        }
	    }
	    if (graphicsData.lineWidth)
	    {
	        var tempPoints = graphicsData.points;
	        graphicsData.points = recPoints;
	        buildLine(graphicsData, webGLData, webGLDataNativeLines);
	        graphicsData.points = tempPoints;
	    }
	}
	function getPt(n1, n2, perc)
	{
	    var diff = n2 - n1;
	    return n1 + (diff * perc);
	}
	function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out)
	{
	    if ( out === void 0 ) out = [];
	    var n = 20;
	    var points = out;
	    var xa = 0;
	    var ya = 0;
	    var xb = 0;
	    var yb = 0;
	    var x = 0;
	    var y = 0;
	    for (var i = 0, j = 0; i <= n; ++i)
	    {
	        j = i / n;
	        xa = getPt(fromX, cpX, j);
	        ya = getPt(fromY, cpY, j);
	        xb = getPt(cpX, toX, j);
	        yb = getPt(cpY, toY, j);
	        x = getPt(xa, xb, j);
	        y = getPt(ya, yb, j);
	        points.push(x, y);
	    }
	    return points;
	}
	function buildCircle(graphicsData, webGLData, webGLDataNativeLines)
	{
	    var circleData = graphicsData.shape;
	    var x = circleData.x;
	    var y = circleData.y;
	    var width;
	    var height;
	    if (graphicsData.type === math.SHAPES.CIRC)
	    {
	        width = circleData.radius;
	        height = circleData.radius;
	    }
	    else
	    {
	        width = circleData.width;
	        height = circleData.height;
	    }
	    if (width === 0 || height === 0)
	    {
	        return;
	    }
	    var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius))
	        || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
	    var seg = (Math.PI * 2) / totalSegs;
	    if (graphicsData.fill)
	    {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;
	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;
	        var verts = webGLData.points;
	        var indices = webGLData.indices;
	        var vecPos = verts.length / 6;
	        indices.push(vecPos);
	        for (var i = 0; i < totalSegs + 1; i++)
	        {
	            verts.push(x, y, r, g, b, alpha);
	            verts.push(
	                x + (Math.sin(seg * i) * width),
	                y + (Math.cos(seg * i) * height),
	                r, g, b, alpha
	            );
	            indices.push(vecPos++, vecPos++);
	        }
	        indices.push(vecPos - 1);
	    }
	    if (graphicsData.lineWidth)
	    {
	        var tempPoints = graphicsData.points;
	        graphicsData.points = [];
	        for (var i$1 = 0; i$1 < totalSegs + 1; i$1++)
	        {
	            graphicsData.points.push(
	                x + (Math.sin(seg * -i$1) * width),
	                y + (Math.cos(seg * -i$1) * height)
	            );
	        }
	        buildLine(graphicsData, webGLData, webGLDataNativeLines);
	        graphicsData.points = tempPoints;
	    }
	}
	var GraphicsRenderer = (function (ObjectRenderer$$1) {
	    function GraphicsRenderer(renderer)
	    {
	        ObjectRenderer$$1.call(this, renderer);
	        this.graphicsDataPool = [];
	        this.primitiveShader = new PrimitiveShader();
	        this.primitiveShader.uniforms.globals = renderer.globalUniforms;
	        this.gl = renderer.gl;
	        this.CONTEXT_UID = 0;
	    }
	    if ( ObjectRenderer$$1 ) GraphicsRenderer.__proto__ = ObjectRenderer$$1;
	    GraphicsRenderer.prototype = Object.create( ObjectRenderer$$1 && ObjectRenderer$$1.prototype );
	    GraphicsRenderer.prototype.constructor = GraphicsRenderer;
	    GraphicsRenderer.prototype.onContextChange = function onContextChange ()
	    {
	        this.gl = this.renderer.gl;
	        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	    };
	    GraphicsRenderer.prototype.destroy = function destroy ()
	    {
	        var this$1 = this;
	        ObjectRenderer$$1.prototype.destroy.call(this);
	        for (var i = 0; i < this.graphicsDataPool.length; ++i)
	        {
	            this$1.graphicsDataPool[i].destroy();
	        }
	        this.graphicsDataPool = null;
	    };
	    GraphicsRenderer.prototype.render = function render (graphics)
	    {
	        var renderer = this.renderer;
	        var gl = renderer.gl;
	        var webGLData;
	        var webGL = graphics._webGL[this.CONTEXT_UID];
	        if (!webGL || graphics.dirty !== webGL.dirty)
	        {
	            this.updateGraphics(graphics);
	            webGL = graphics._webGL[this.CONTEXT_UID];
	        }
	        var shader = this.primitiveShader;
	        renderer.state.setBlendMode(graphics.blendMode);
	        for (var i = 0, n = webGL.data.length; i < n; i++)
	        {
	            webGLData = webGL.data[i];
	            shader.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
	            shader.uniforms.tint = utils.hex2rgb(graphics.tint);
	            shader.uniforms.alpha = graphics.worldAlpha;
	            renderer.shader.bind(shader);
	            renderer.geometry.bind(webGLData.geometry);
	            if (webGLData.nativeLines)
	            {
	                renderer.geometry.draw(gl.LINES, webGLData.indices.length / 6);
	            }
	            else
	            {
	                renderer.geometry.draw(gl.TRIANGLE_STRIP, webGLData.indices.length);
	            }
	        }
	    };
	    GraphicsRenderer.prototype.updateGraphics = function updateGraphics (graphics)
	    {
	        var this$1 = this;
	        var gl = this.renderer.gl;
	        var webGL = graphics._webGL[this.CONTEXT_UID];
	        if (!webGL)
	        {
	            webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl, clearDirty: -1, dirty: -1 };
	        }
	        webGL.dirty = graphics.dirty;
	        if (graphics.clearDirty !== webGL.clearDirty)
	        {
	            webGL.clearDirty = graphics.clearDirty;
	            for (var i = 0; i < webGL.data.length; i++)
	            {
	                this$1.graphicsDataPool.push(webGL.data[i]);
	            }
	            webGL.data.length = 0;
	            webGL.lastIndex = 0;
	        }
	        var webGLData;
	        var webGLDataNativeLines;
	        for (var i$1 = webGL.lastIndex; i$1 < graphics.graphicsData.length; i$1++)
	        {
	            var data = graphics.graphicsData[i$1];
	            webGLData = this$1.getWebGLData(webGL, 0);
	            if (data.nativeLines && data.lineWidth)
	            {
	                webGLDataNativeLines = this$1.getWebGLData(webGL, 0, true);
	                webGL.lastIndex++;
	            }
	            if (data.type === math.SHAPES.POLY)
	            {
	                buildPoly(data, webGLData, webGLDataNativeLines);
	            }
	            if (data.type === math.SHAPES.RECT)
	            {
	                buildRectangle(data, webGLData, webGLDataNativeLines);
	            }
	            else if (data.type === math.SHAPES.CIRC || data.type === math.SHAPES.ELIP)
	            {
	                buildCircle(data, webGLData, webGLDataNativeLines);
	            }
	            else if (data.type === math.SHAPES.RREC)
	            {
	                buildRoundedRectangle(data, webGLData, webGLDataNativeLines);
	            }
	            webGL.lastIndex++;
	        }
	        for (var i$2 = 0; i$2 < webGL.data.length; i$2++)
	        {
	            webGLData = webGL.data[i$2];
	            if (webGLData.dirty)
	            {
	                webGLData.upload();
	            }
	        }
	    };
	    GraphicsRenderer.prototype.getWebGLData = function getWebGLData (gl, type, nativeLines)
	    {
	        var webGLData = gl.data[gl.data.length - 1];
	        if (!webGLData || webGLData.nativeLines !== nativeLines || webGLData.points.length > 320000)
	        {
	            webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(
	                this.renderer.gl,
	                this.primitiveShader,
	                this.renderer.state.attribsState
	            );
	            webGLData.nativeLines = nativeLines;
	            webGLData.reset(type);
	            gl.data.push(webGLData);
	        }
	        webGLData.dirty = true;
	        return webGLData;
	    };
	    return GraphicsRenderer;
	}(core.ObjectRenderer));
	exports.Graphics = Graphics;
	exports.GraphicsData = GraphicsData;
	exports.GraphicsRenderer = GraphicsRenderer;
	});
	var graphics$1 = unwrapExports(graphics);
	var graphics_1 = graphics.Graphics;
	var graphics_2 = graphics.GraphicsData;
	var graphics_3 = graphics.GraphicsRenderer;

	var graphics$2 = ({
		default: graphics$1,
		__moduleExports: graphics,
		Graphics: graphics_1,
		GraphicsData: graphics_2,
		GraphicsRenderer: graphics_3
	});

	var interaction = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var EventEmitter = _interopDefault(eventemitter3);
	var InteractionData = function InteractionData()
	{
	    this.global = new math.Point();
	    this.target = null;
	    this.originalEvent = null;
	    this.identifier = null;
	    this.isPrimary = false;
	    this.button = 0;
	    this.buttons = 0;
	    this.width = 0;
	    this.height = 0;
	    this.tiltX = 0;
	    this.tiltY = 0;
	    this.pointerType = null;
	    this.pressure = 0;
	    this.rotationAngle = 0;
	    this.twist = 0;
	    this.tangentialPressure = 0;
	};
	var prototypeAccessors = { pointerId: { configurable: true } };
	prototypeAccessors.pointerId.get = function ()
	{
	    return this.identifier;
	};
	InteractionData.prototype.getLocalPosition = function getLocalPosition (displayObject, point, globalPos)
	{
	    return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
	};
	InteractionData.prototype.copyEvent = function copyEvent (event)
	{
	    if (event.isPrimary)
	    {
	        this.isPrimary = true;
	    }
	    this.button = event.button;
	    this.buttons = Number.isInteger(event.buttons) ? event.buttons : event.which;
	    this.width = event.width;
	    this.height = event.height;
	    this.tiltX = event.tiltX;
	    this.tiltY = event.tiltY;
	    this.pointerType = event.pointerType;
	    this.pressure = event.pressure;
	    this.rotationAngle = event.rotationAngle;
	    this.twist = event.twist || 0;
	    this.tangentialPressure = event.tangentialPressure || 0;
	};
	InteractionData.prototype.reset = function reset ()
	{
	    this.isPrimary = false;
	};
	Object.defineProperties( InteractionData.prototype, prototypeAccessors );
	var InteractionEvent = function InteractionEvent()
	{
	    this.stopped = false;
	    this.target = null;
	    this.currentTarget = null;
	    this.type = null;
	    this.data = null;
	};
	InteractionEvent.prototype.stopPropagation = function stopPropagation ()
	{
	    this.stopped = true;
	};
	InteractionEvent.prototype.reset = function reset ()
	{
	    this.stopped = false;
	    this.currentTarget = null;
	    this.target = null;
	};
	var InteractionTrackingData = function InteractionTrackingData(pointerId)
	{
	    this._pointerId = pointerId;
	    this._flags = InteractionTrackingData.FLAGS.NONE;
	};
	var prototypeAccessors$1 = { pointerId: { configurable: true },flags: { configurable: true },none: { configurable: true },over: { configurable: true },rightDown: { configurable: true },leftDown: { configurable: true } };
	InteractionTrackingData.prototype._doSet = function _doSet (flag, yn)
	{
	    if (yn)
	    {
	        this._flags = this._flags | flag;
	    }
	    else
	    {
	        this._flags = this._flags & (~flag);
	    }
	};
	prototypeAccessors$1.pointerId.get = function ()
	{
	    return this._pointerId;
	};
	prototypeAccessors$1.flags.get = function ()
	{
	    return this._flags;
	};
	prototypeAccessors$1.flags.set = function (flags)
	{
	    this._flags = flags;
	};
	prototypeAccessors$1.none.get = function ()
	{
	    return this._flags === this.constructor.FLAGS.NONE;
	};
	prototypeAccessors$1.over.get = function ()
	{
	    return (this._flags & this.constructor.FLAGS.OVER) !== 0;
	};
	prototypeAccessors$1.over.set = function (yn)
	{
	    this._doSet(this.constructor.FLAGS.OVER, yn);
	};
	prototypeAccessors$1.rightDown.get = function ()
	{
	    return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) !== 0;
	};
	prototypeAccessors$1.rightDown.set = function (yn)
	{
	    this._doSet(this.constructor.FLAGS.RIGHT_DOWN, yn);
	};
	prototypeAccessors$1.leftDown.get = function ()
	{
	    return (this._flags & this.constructor.FLAGS.LEFT_DOWN) !== 0;
	};
	prototypeAccessors$1.leftDown.set = function (yn)
	{
	    this._doSet(this.constructor.FLAGS.LEFT_DOWN, yn);
	};
	Object.defineProperties( InteractionTrackingData.prototype, prototypeAccessors$1 );
	InteractionTrackingData.FLAGS = Object.freeze({
	    NONE: 0,
	    OVER: 1 << 0,
	    LEFT_DOWN: 1 << 1,
	    RIGHT_DOWN: 1 << 2,
	});
	var interactiveTarget = {
	    interactive: false,
	    interactiveChildren: true,
	    hitArea: null,
	    get buttonMode()
	    {
	        return this.cursor === 'pointer';
	    },
	    set buttonMode(value)
	    {
	        if (value)
	        {
	            this.cursor = 'pointer';
	        }
	        else if (this.cursor === 'pointer')
	        {
	            this.cursor = null;
	        }
	    },
	    cursor: null,
	    get trackedPointers()
	    {
	        if (this._trackedPointers === undefined) { this._trackedPointers = {}; }
	        return this._trackedPointers;
	    },
	    _trackedPointers: undefined,
	};
	utils.mixins.delayMixin(
	    display.DisplayObject.prototype,
	    interactiveTarget
	);
	var MOUSE_POINTER_ID = 1;
	var hitTestEvent = {
	    target: null,
	    data: {
	        global: null,
	    },
	};
	var InteractionManager = (function (EventEmitter$$1) {
	    function InteractionManager(renderer, options)
	    {
	        EventEmitter$$1.call(this);
	        options = options || {};
	        this.renderer = renderer;
	        this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;
	        this.interactionFrequency = options.interactionFrequency || 10;
	        this.mouse = new InteractionData();
	        this.mouse.identifier = MOUSE_POINTER_ID;
	        this.mouse.global.set(-999999);
	        this.activeInteractionData = {};
	        this.activeInteractionData[MOUSE_POINTER_ID] = this.mouse;
	        this.interactionDataPool = [];
	        this.eventData = new InteractionEvent();
	        this.interactionDOMElement = null;
	        this.moveWhenInside = false;
	        this.eventsAdded = false;
	        this.mouseOverRenderer = false;
	        this.supportsTouchEvents = 'ontouchstart' in window;
	        this.supportsPointerEvents = !!window.PointerEvent;
	        this.onPointerUp = this.onPointerUp.bind(this);
	        this.processPointerUp = this.processPointerUp.bind(this);
	        this.onPointerCancel = this.onPointerCancel.bind(this);
	        this.processPointerCancel = this.processPointerCancel.bind(this);
	        this.onPointerDown = this.onPointerDown.bind(this);
	        this.processPointerDown = this.processPointerDown.bind(this);
	        this.onPointerMove = this.onPointerMove.bind(this);
	        this.processPointerMove = this.processPointerMove.bind(this);
	        this.onPointerOut = this.onPointerOut.bind(this);
	        this.processPointerOverOut = this.processPointerOverOut.bind(this);
	        this.onPointerOver = this.onPointerOver.bind(this);
	        this.cursorStyles = {
	            default: 'inherit',
	            pointer: 'pointer',
	        };
	        this.currentCursorMode = null;
	        this.cursor = null;
	        this._tempPoint = new math.Point();
	        this.resolution = 1;
	        this.setTargetElement(this.renderer.view, this.renderer.resolution);
	    }
	    if ( EventEmitter$$1 ) InteractionManager.__proto__ = EventEmitter$$1;
	    InteractionManager.prototype = Object.create( EventEmitter$$1 && EventEmitter$$1.prototype );
	    InteractionManager.prototype.constructor = InteractionManager;
	    InteractionManager.prototype.hitTest = function hitTest (globalPoint, root)
	    {
	        hitTestEvent.target = null;
	        hitTestEvent.data.global = globalPoint;
	        if (!root)
	        {
	            root = this.renderer._lastObjectRendered;
	        }
	        this.processInteractive(hitTestEvent, root, null, true);
	        return hitTestEvent.target;
	    };
	    InteractionManager.prototype.setTargetElement = function setTargetElement (element, resolution)
	    {
	        if ( resolution === void 0 ) resolution = 1;
	        this.removeEvents();
	        this.interactionDOMElement = element;
	        this.resolution = resolution;
	        this.addEvents();
	    };
	    InteractionManager.prototype.addEvents = function addEvents ()
	    {
	        if (!this.interactionDOMElement)
	        {
	            return;
	        }
	        ticker.Ticker.shared.add(this.update, this, ticker.UPDATE_PRIORITY.INTERACTION);
	        if (window.navigator.msPointerEnabled)
	        {
	            this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
	            this.interactionDOMElement.style['-ms-touch-action'] = 'none';
	        }
	        else if (this.supportsPointerEvents)
	        {
	            this.interactionDOMElement.style['touch-action'] = 'none';
	        }
	        if (this.supportsPointerEvents)
	        {
	            window.document.addEventListener('pointermove', this.onPointerMove, true);
	            this.interactionDOMElement.addEventListener('pointerdown', this.onPointerDown, true);
	            this.interactionDOMElement.addEventListener('pointerleave', this.onPointerOut, true);
	            this.interactionDOMElement.addEventListener('pointerover', this.onPointerOver, true);
	            window.addEventListener('pointercancel', this.onPointerCancel, true);
	            window.addEventListener('pointerup', this.onPointerUp, true);
	        }
	        else
	        {
	            window.document.addEventListener('mousemove', this.onPointerMove, true);
	            this.interactionDOMElement.addEventListener('mousedown', this.onPointerDown, true);
	            this.interactionDOMElement.addEventListener('mouseout', this.onPointerOut, true);
	            this.interactionDOMElement.addEventListener('mouseover', this.onPointerOver, true);
	            window.addEventListener('mouseup', this.onPointerUp, true);
	        }
	        if (this.supportsTouchEvents)
	        {
	            this.interactionDOMElement.addEventListener('touchstart', this.onPointerDown, true);
	            this.interactionDOMElement.addEventListener('touchcancel', this.onPointerCancel, true);
	            this.interactionDOMElement.addEventListener('touchend', this.onPointerUp, true);
	            this.interactionDOMElement.addEventListener('touchmove', this.onPointerMove, true);
	        }
	        this.eventsAdded = true;
	    };
	    InteractionManager.prototype.removeEvents = function removeEvents ()
	    {
	        if (!this.interactionDOMElement)
	        {
	            return;
	        }
	        ticker.Ticker.shared.remove(this.update, this);
	        if (window.navigator.msPointerEnabled)
	        {
	            this.interactionDOMElement.style['-ms-content-zooming'] = '';
	            this.interactionDOMElement.style['-ms-touch-action'] = '';
	        }
	        else if (this.supportsPointerEvents)
	        {
	            this.interactionDOMElement.style['touch-action'] = '';
	        }
	        if (this.supportsPointerEvents)
	        {
	            window.document.removeEventListener('pointermove', this.onPointerMove, true);
	            this.interactionDOMElement.removeEventListener('pointerdown', this.onPointerDown, true);
	            this.interactionDOMElement.removeEventListener('pointerleave', this.onPointerOut, true);
	            this.interactionDOMElement.removeEventListener('pointerover', this.onPointerOver, true);
	            window.removeEventListener('pointercancel', this.onPointerCancel, true);
	            window.removeEventListener('pointerup', this.onPointerUp, true);
	        }
	        else
	        {
	            window.document.removeEventListener('mousemove', this.onPointerMove, true);
	            this.interactionDOMElement.removeEventListener('mousedown', this.onPointerDown, true);
	            this.interactionDOMElement.removeEventListener('mouseout', this.onPointerOut, true);
	            this.interactionDOMElement.removeEventListener('mouseover', this.onPointerOver, true);
	            window.removeEventListener('mouseup', this.onPointerUp, true);
	        }
	        if (this.supportsTouchEvents)
	        {
	            this.interactionDOMElement.removeEventListener('touchstart', this.onPointerDown, true);
	            this.interactionDOMElement.removeEventListener('touchcancel', this.onPointerCancel, true);
	            this.interactionDOMElement.removeEventListener('touchend', this.onPointerUp, true);
	            this.interactionDOMElement.removeEventListener('touchmove', this.onPointerMove, true);
	        }
	        this.interactionDOMElement = null;
	        this.eventsAdded = false;
	    };
	    InteractionManager.prototype.update = function update (deltaTime)
	    {
	        var this$1 = this;
	        this._deltaTime += deltaTime;
	        if (this._deltaTime < this.interactionFrequency)
	        {
	            return;
	        }
	        this._deltaTime = 0;
	        if (!this.interactionDOMElement)
	        {
	            return;
	        }
	        if (this.didMove)
	        {
	            this.didMove = false;
	            return;
	        }
	        this.cursor = null;
	        for (var k in this$1.activeInteractionData)
	        {
	            if (this$1.activeInteractionData.hasOwnProperty(k))
	            {
	                var interactionData = this$1.activeInteractionData[k];
	                if (interactionData.originalEvent && interactionData.pointerType !== 'touch')
	                {
	                    var interactionEvent = this$1.configureInteractionEventForDOMEvent(
	                        this$1.eventData,
	                        interactionData.originalEvent,
	                        interactionData
	                    );
	                    this$1.processInteractive(
	                        interactionEvent,
	                        this$1.renderer._lastObjectRendered,
	                        this$1.processPointerOverOut,
	                        true
	                    );
	                }
	            }
	        }
	        this.setCursorMode(this.cursor);
	    };
	    InteractionManager.prototype.setCursorMode = function setCursorMode (mode)
	    {
	        mode = mode || 'default';
	        if (this.currentCursorMode === mode)
	        {
	            return;
	        }
	        this.currentCursorMode = mode;
	        var style = this.cursorStyles[mode];
	        if (style)
	        {
	            switch (typeof style)
	            {
	                case 'string':
	                    this.interactionDOMElement.style.cursor = style;
	                    break;
	                case 'function':
	                    style(mode);
	                    break;
	                case 'object':
	                    Object.assign(this.interactionDOMElement.style, style);
	                    break;
	            }
	        }
	        else if (typeof mode === 'string' && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode))
	        {
	            this.interactionDOMElement.style.cursor = mode;
	        }
	    };
	    InteractionManager.prototype.dispatchEvent = function dispatchEvent (displayObject, eventString, eventData)
	    {
	        if (!eventData.stopped)
	        {
	            eventData.currentTarget = displayObject;
	            eventData.type = eventString;
	            displayObject.emit(eventString, eventData);
	            if (displayObject[eventString])
	            {
	                displayObject[eventString](eventData);
	            }
	        }
	    };
	    InteractionManager.prototype.mapPositionToPoint = function mapPositionToPoint (point, x, y)
	    {
	        var rect;
	        if (!this.interactionDOMElement.parentElement)
	        {
	            rect = { x: 0, y: 0, width: 0, height: 0 };
	        }
	        else
	        {
	            rect = this.interactionDOMElement.getBoundingClientRect();
	        }
	        var resolutionMultiplier = navigator.isCocoonJS ? this.resolution : (1.0 / this.resolution);
	        point.x = ((x - rect.left) * (this.interactionDOMElement.width / rect.width)) * resolutionMultiplier;
	        point.y = ((y - rect.top) * (this.interactionDOMElement.height / rect.height)) * resolutionMultiplier;
	    };
	    InteractionManager.prototype.processInteractive = function processInteractive (interactionEvent, displayObject, func, hitTest, interactive)
	    {
	        var this$1 = this;
	        if (!displayObject || !displayObject.visible)
	        {
	            return false;
	        }
	        var point = interactionEvent.data.global;
	        interactive = displayObject.interactive || interactive;
	        var hit = false;
	        var interactiveParent = interactive;
	        var hitTestChildren = true;
	        if (displayObject.hitArea)
	        {
	            if (hitTest)
	            {
	                displayObject.worldTransform.applyInverse(point, this._tempPoint);
	                if (!displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y))
	                {
	                    hitTest = false;
	                    hitTestChildren = false;
	                }
	                else
	                {
	                    hit = true;
	                }
	            }
	            interactiveParent = false;
	        }
	        else if (displayObject._mask)
	        {
	            if (hitTest)
	            {
	                if (!(displayObject._mask.containsPoint && displayObject._mask.containsPoint(point)))
	                {
	                    hitTest = false;
	                    hitTestChildren = false;
	                }
	            }
	        }
	        if (hitTestChildren && displayObject.interactiveChildren && displayObject.children)
	        {
	            var children = displayObject.children;
	            for (var i = children.length - 1; i >= 0; i--)
	            {
	                var child = children[i];
	                var childHit = this$1.processInteractive(interactionEvent, child, func, hitTest, interactiveParent);
	                if (childHit)
	                {
	                    if (!child.parent)
	                    {
	                        continue;
	                    }
	                    interactiveParent = false;
	                    if (childHit)
	                    {
	                        if (interactionEvent.target)
	                        {
	                            hitTest = false;
	                        }
	                        hit = true;
	                    }
	                }
	            }
	        }
	        if (interactive)
	        {
	            if (hitTest && !interactionEvent.target)
	            {
	                if (!displayObject.hitArea && displayObject.containsPoint)
	                {
	                    if (displayObject.containsPoint(point))
	                    {
	                        hit = true;
	                    }
	                }
	            }
	            if (displayObject.interactive)
	            {
	                if (hit && !interactionEvent.target)
	                {
	                    interactionEvent.target = displayObject;
	                }
	                if (func)
	                {
	                    func(interactionEvent, displayObject, !!hit);
	                }
	            }
	        }
	        return hit;
	    };
	    InteractionManager.prototype.onPointerDown = function onPointerDown (originalEvent)
	    {
	        var this$1 = this;
	        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }
	        var events = this.normalizeToPointerData(originalEvent);
	        if (this.autoPreventDefault && events[0].isNormalized)
	        {
	            originalEvent.preventDefault();
	        }
	        var eventLen = events.length;
	        for (var i = 0; i < eventLen; i++)
	        {
	            var event = events[i];
	            var interactionData = this$1.getInteractionDataForPointerId(event);
	            var interactionEvent = this$1.configureInteractionEventForDOMEvent(this$1.eventData, event, interactionData);
	            interactionEvent.data.originalEvent = originalEvent;
	            this$1.processInteractive(interactionEvent, this$1.renderer._lastObjectRendered, this$1.processPointerDown, true);
	            this$1.emit('pointerdown', interactionEvent);
	            if (event.pointerType === 'touch')
	            {
	                this$1.emit('touchstart', interactionEvent);
	            }
	            else if (event.pointerType === 'mouse' || event.pointerType === 'pen')
	            {
	                var isRightButton = event.button === 2;
	                this$1.emit(isRightButton ? 'rightdown' : 'mousedown', this$1.eventData);
	            }
	        }
	    };
	    InteractionManager.prototype.processPointerDown = function processPointerDown (interactionEvent, displayObject, hit)
	    {
	        var data = interactionEvent.data;
	        var id = interactionEvent.data.identifier;
	        if (hit)
	        {
	            if (!displayObject.trackedPointers[id])
	            {
	                displayObject.trackedPointers[id] = new InteractionTrackingData(id);
	            }
	            this.dispatchEvent(displayObject, 'pointerdown', interactionEvent);
	            if (data.pointerType === 'touch')
	            {
	                this.dispatchEvent(displayObject, 'touchstart', interactionEvent);
	            }
	            else if (data.pointerType === 'mouse' || data.pointerType === 'pen')
	            {
	                var isRightButton = data.button === 2;
	                if (isRightButton)
	                {
	                    displayObject.trackedPointers[id].rightDown = true;
	                }
	                else
	                {
	                    displayObject.trackedPointers[id].leftDown = true;
	                }
	                this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', interactionEvent);
	            }
	        }
	    };
	    InteractionManager.prototype.onPointerComplete = function onPointerComplete (originalEvent, cancelled, func)
	    {
	        var this$1 = this;
	        var events = this.normalizeToPointerData(originalEvent);
	        var eventLen = events.length;
	        var eventAppend = originalEvent.target !== this.interactionDOMElement ? 'outside' : '';
	        for (var i = 0; i < eventLen; i++)
	        {
	            var event = events[i];
	            var interactionData = this$1.getInteractionDataForPointerId(event);
	            var interactionEvent = this$1.configureInteractionEventForDOMEvent(this$1.eventData, event, interactionData);
	            interactionEvent.data.originalEvent = originalEvent;
	            this$1.processInteractive(interactionEvent, this$1.renderer._lastObjectRendered, func, cancelled || !eventAppend);
	            this$1.emit(cancelled ? 'pointercancel' : ("pointerup" + eventAppend), interactionEvent);
	            if (event.pointerType === 'mouse' || event.pointerType === 'pen')
	            {
	                var isRightButton = event.button === 2;
	                this$1.emit(isRightButton ? ("rightup" + eventAppend) : ("mouseup" + eventAppend), interactionEvent);
	            }
	            else if (event.pointerType === 'touch')
	            {
	                this$1.emit(cancelled ? 'touchcancel' : ("touchend" + eventAppend), interactionEvent);
	                this$1.releaseInteractionDataForPointerId(event.pointerId, interactionData);
	            }
	        }
	    };
	    InteractionManager.prototype.onPointerCancel = function onPointerCancel (event)
	    {
	        if (this.supportsTouchEvents && event.pointerType === 'touch') { return; }
	        this.onPointerComplete(event, true, this.processPointerCancel);
	    };
	    InteractionManager.prototype.processPointerCancel = function processPointerCancel (interactionEvent, displayObject)
	    {
	        var data = interactionEvent.data;
	        var id = interactionEvent.data.identifier;
	        if (displayObject.trackedPointers[id] !== undefined)
	        {
	            delete displayObject.trackedPointers[id];
	            this.dispatchEvent(displayObject, 'pointercancel', interactionEvent);
	            if (data.pointerType === 'touch')
	            {
	                this.dispatchEvent(displayObject, 'touchcancel', interactionEvent);
	            }
	        }
	    };
	    InteractionManager.prototype.onPointerUp = function onPointerUp (event)
	    {
	        if (this.supportsTouchEvents && event.pointerType === 'touch') { return; }
	        this.onPointerComplete(event, false, this.processPointerUp);
	    };
	    InteractionManager.prototype.processPointerUp = function processPointerUp (interactionEvent, displayObject, hit)
	    {
	        var data = interactionEvent.data;
	        var id = interactionEvent.data.identifier;
	        var trackingData = displayObject.trackedPointers[id];
	        var isTouch = data.pointerType === 'touch';
	        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');
	        var isMouseTap = false;
	        if (isMouse)
	        {
	            var isRightButton = data.button === 2;
	            var flags = InteractionTrackingData.FLAGS;
	            var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;
	            var isDown = trackingData !== undefined && (trackingData.flags & test);
	            if (hit)
	            {
	                this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', interactionEvent);
	                if (isDown)
	                {
	                    this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', interactionEvent);
	                    isMouseTap = true;
	                }
	            }
	            else if (isDown)
	            {
	                this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', interactionEvent);
	            }
	            if (trackingData)
	            {
	                if (isRightButton)
	                {
	                    trackingData.rightDown = false;
	                }
	                else
	                {
	                    trackingData.leftDown = false;
	                }
	            }
	        }
	        if (hit)
	        {
	            this.dispatchEvent(displayObject, 'pointerup', interactionEvent);
	            if (isTouch) { this.dispatchEvent(displayObject, 'touchend', interactionEvent); }
	            if (trackingData)
	            {
	                if (!isMouse || isMouseTap)
	                {
	                    this.dispatchEvent(displayObject, 'pointertap', interactionEvent);
	                }
	                if (isTouch)
	                {
	                    this.dispatchEvent(displayObject, 'tap', interactionEvent);
	                    trackingData.over = false;
	                }
	            }
	        }
	        else if (trackingData)
	        {
	            this.dispatchEvent(displayObject, 'pointerupoutside', interactionEvent);
	            if (isTouch) { this.dispatchEvent(displayObject, 'touchendoutside', interactionEvent); }
	        }
	        if (trackingData && trackingData.none)
	        {
	            delete displayObject.trackedPointers[id];
	        }
	    };
	    InteractionManager.prototype.onPointerMove = function onPointerMove (originalEvent)
	    {
	        var this$1 = this;
	        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }
	        var events = this.normalizeToPointerData(originalEvent);
	        if (events[0].pointerType === 'mouse' || events[0].pointerType === 'pen')
	        {
	            this.didMove = true;
	            this.cursor = null;
	        }
	        var eventLen = events.length;
	        for (var i = 0; i < eventLen; i++)
	        {
	            var event = events[i];
	            var interactionData = this$1.getInteractionDataForPointerId(event);
	            var interactionEvent = this$1.configureInteractionEventForDOMEvent(this$1.eventData, event, interactionData);
	            interactionEvent.data.originalEvent = originalEvent;
	            var interactive = event.pointerType === 'touch' ? this$1.moveWhenInside : true;
	            this$1.processInteractive(
	                interactionEvent,
	                this$1.renderer._lastObjectRendered,
	                this$1.processPointerMove,
	                interactive
	            );
	            this$1.emit('pointermove', interactionEvent);
	            if (event.pointerType === 'touch') { this$1.emit('touchmove', interactionEvent); }
	            if (event.pointerType === 'mouse' || event.pointerType === 'pen') { this$1.emit('mousemove', interactionEvent); }
	        }
	        if (events[0].pointerType === 'mouse')
	        {
	            this.setCursorMode(this.cursor);
	        }
	    };
	    InteractionManager.prototype.processPointerMove = function processPointerMove (interactionEvent, displayObject, hit)
	    {
	        var data = interactionEvent.data;
	        var isTouch = data.pointerType === 'touch';
	        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');
	        if (isMouse)
	        {
	            this.processPointerOverOut(interactionEvent, displayObject, hit);
	        }
	        if (!this.moveWhenInside || hit)
	        {
	            this.dispatchEvent(displayObject, 'pointermove', interactionEvent);
	            if (isTouch) { this.dispatchEvent(displayObject, 'touchmove', interactionEvent); }
	            if (isMouse) { this.dispatchEvent(displayObject, 'mousemove', interactionEvent); }
	        }
	    };
	    InteractionManager.prototype.onPointerOut = function onPointerOut (originalEvent)
	    {
	        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }
	        var events = this.normalizeToPointerData(originalEvent);
	        var event = events[0];
	        if (event.pointerType === 'mouse')
	        {
	            this.mouseOverRenderer = false;
	            this.setCursorMode(null);
	        }
	        var interactionData = this.getInteractionDataForPointerId(event);
	        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
	        interactionEvent.data.originalEvent = event;
	        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, false);
	        this.emit('pointerout', interactionEvent);
	        if (event.pointerType === 'mouse' || event.pointerType === 'pen')
	        {
	            this.emit('mouseout', interactionEvent);
	        }
	        else
	        {
	            this.releaseInteractionDataForPointerId(interactionData.identifier);
	        }
	    };
	    InteractionManager.prototype.processPointerOverOut = function processPointerOverOut (interactionEvent, displayObject, hit)
	    {
	        var data = interactionEvent.data;
	        var id = interactionEvent.data.identifier;
	        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');
	        var trackingData = displayObject.trackedPointers[id];
	        if (hit && !trackingData)
	        {
	            trackingData = displayObject.trackedPointers[id] = new InteractionTrackingData(id);
	        }
	        if (trackingData === undefined) { return; }
	        if (hit && this.mouseOverRenderer)
	        {
	            if (!trackingData.over)
	            {
	                trackingData.over = true;
	                this.dispatchEvent(displayObject, 'pointerover', interactionEvent);
	                if (isMouse)
	                {
	                    this.dispatchEvent(displayObject, 'mouseover', interactionEvent);
	                }
	            }
	            if (isMouse && this.cursor === null)
	            {
	                this.cursor = displayObject.cursor;
	            }
	        }
	        else if (trackingData.over)
	        {
	            trackingData.over = false;
	            this.dispatchEvent(displayObject, 'pointerout', this.eventData);
	            if (isMouse)
	            {
	                this.dispatchEvent(displayObject, 'mouseout', interactionEvent);
	            }
	            if (trackingData.none)
	            {
	                delete displayObject.trackedPointers[id];
	            }
	        }
	    };
	    InteractionManager.prototype.onPointerOver = function onPointerOver (originalEvent)
	    {
	        var events = this.normalizeToPointerData(originalEvent);
	        var event = events[0];
	        var interactionData = this.getInteractionDataForPointerId(event);
	        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
	        interactionEvent.data.originalEvent = event;
	        if (event.pointerType === 'mouse')
	        {
	            this.mouseOverRenderer = true;
	        }
	        this.emit('pointerover', interactionEvent);
	        if (event.pointerType === 'mouse' || event.pointerType === 'pen')
	        {
	            this.emit('mouseover', interactionEvent);
	        }
	    };
	    InteractionManager.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId (event)
	    {
	        var pointerId = event.pointerId;
	        var interactionData;
	        if (pointerId === MOUSE_POINTER_ID || event.pointerType === 'mouse')
	        {
	            interactionData = this.mouse;
	        }
	        else if (this.activeInteractionData[pointerId])
	        {
	            interactionData = this.activeInteractionData[pointerId];
	        }
	        else
	        {
	            interactionData = this.interactionDataPool.pop() || new InteractionData();
	            interactionData.identifier = pointerId;
	            this.activeInteractionData[pointerId] = interactionData;
	        }
	        interactionData.copyEvent(event);
	        return interactionData;
	    };
	    InteractionManager.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId (pointerId)
	    {
	        var interactionData = this.activeInteractionData[pointerId];
	        if (interactionData)
	        {
	            delete this.activeInteractionData[pointerId];
	            interactionData.reset();
	            this.interactionDataPool.push(interactionData);
	        }
	    };
	    InteractionManager.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent (interactionEvent, pointerEvent, interactionData)
	    {
	        interactionEvent.data = interactionData;
	        this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);
	        if (navigator.isCocoonJS && pointerEvent.pointerType === 'touch')
	        {
	            interactionData.global.x = interactionData.global.x / this.resolution;
	            interactionData.global.y = interactionData.global.y / this.resolution;
	        }
	        if (pointerEvent.pointerType === 'touch')
	        {
	            pointerEvent.globalX = interactionData.global.x;
	            pointerEvent.globalY = interactionData.global.y;
	        }
	        interactionData.originalEvent = pointerEvent;
	        interactionEvent.reset();
	        return interactionEvent;
	    };
	    InteractionManager.prototype.normalizeToPointerData = function normalizeToPointerData (event)
	    {
	        var normalizedEvents = [];
	        if (this.supportsTouchEvents && event instanceof TouchEvent)
	        {
	            for (var i = 0, li = event.changedTouches.length; i < li; i++)
	            {
	                var touch = event.changedTouches[i];
	                if (typeof touch.button === 'undefined') { touch.button = event.touches.length ? 1 : 0; }
	                if (typeof touch.buttons === 'undefined') { touch.buttons = event.touches.length ? 1 : 0; }
	                if (typeof touch.isPrimary === 'undefined')
	                {
	                    touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
	                }
	                if (typeof touch.width === 'undefined') { touch.width = touch.radiusX || 1; }
	                if (typeof touch.height === 'undefined') { touch.height = touch.radiusY || 1; }
	                if (typeof touch.tiltX === 'undefined') { touch.tiltX = 0; }
	                if (typeof touch.tiltY === 'undefined') { touch.tiltY = 0; }
	                if (typeof touch.pointerType === 'undefined') { touch.pointerType = 'touch'; }
	                if (typeof touch.pointerId === 'undefined') { touch.pointerId = touch.identifier || 0; }
	                if (typeof touch.pressure === 'undefined') { touch.pressure = touch.force || 0.5; }
	                touch.twist = 0;
	                touch.tangentialPressure = 0;
	                if (typeof touch.layerX === 'undefined') { touch.layerX = touch.offsetX = touch.clientX; }
	                if (typeof touch.layerY === 'undefined') { touch.layerY = touch.offsetY = touch.clientY; }
	                touch.isNormalized = true;
	                normalizedEvents.push(touch);
	            }
	        }
	        else if (event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof window.PointerEvent)))
	        {
	            if (typeof event.isPrimary === 'undefined') { event.isPrimary = true; }
	            if (typeof event.width === 'undefined') { event.width = 1; }
	            if (typeof event.height === 'undefined') { event.height = 1; }
	            if (typeof event.tiltX === 'undefined') { event.tiltX = 0; }
	            if (typeof event.tiltY === 'undefined') { event.tiltY = 0; }
	            if (typeof event.pointerType === 'undefined') { event.pointerType = 'mouse'; }
	            if (typeof event.pointerId === 'undefined') { event.pointerId = MOUSE_POINTER_ID; }
	            if (typeof event.pressure === 'undefined') { event.pressure = 0.5; }
	            event.twist = 0;
	            event.tangentialPressure = 0;
	            event.isNormalized = true;
	            normalizedEvents.push(event);
	        }
	        else
	        {
	            normalizedEvents.push(event);
	        }
	        return normalizedEvents;
	    };
	    InteractionManager.prototype.destroy = function destroy ()
	    {
	        this.removeEvents();
	        this.removeAllListeners();
	        this.renderer = null;
	        this.mouse = null;
	        this.eventData = null;
	        this.interactionDOMElement = null;
	        this.onPointerDown = null;
	        this.processPointerDown = null;
	        this.onPointerUp = null;
	        this.processPointerUp = null;
	        this.onPointerCancel = null;
	        this.processPointerCancel = null;
	        this.onPointerMove = null;
	        this.processPointerMove = null;
	        this.onPointerOut = null;
	        this.processPointerOverOut = null;
	        this.onPointerOver = null;
	        this._tempPoint = null;
	    };
	    return InteractionManager;
	}(EventEmitter));
	exports.InteractionData = InteractionData;
	exports.InteractionManager = InteractionManager;
	exports.interactiveTarget = interactiveTarget;
	exports.InteractionTrackingData = InteractionTrackingData;
	exports.InteractionEvent = InteractionEvent;
	});
	var interaction$1 = unwrapExports(interaction);
	var interaction_1 = interaction.InteractionData;
	var interaction_2 = interaction.InteractionManager;
	var interaction_3 = interaction.interactiveTarget;
	var interaction_4 = interaction.InteractionTrackingData;
	var interaction_5 = interaction.InteractionEvent;

	var interaction$2 = ({
		default: interaction$1,
		__moduleExports: interaction,
		InteractionData: interaction_1,
		InteractionManager: interaction_2,
		interactiveTarget: interaction_3,
		InteractionTrackingData: interaction_4,
		InteractionEvent: interaction_5
	});

	var miniSignals = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) once = false;
	    _classCallCheck(this, MiniSignalBinding);
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) return false;
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	  return MiniSignalBinding;
	})();
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	  node._owner = self;
	  return node;
	}
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	    this._head = this._tail = undefined;
	  }
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	      var node = this._head;
	      if (exists) return !!node;
	      var ee = [];
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var node = this._head;
	      if (!node) return false;
	      while (node) {
	        if (node._once) this.detach(node);
	        node._fn.apply(node._thisArg, arguments);
	        node = node._next;
	      }
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) return this;
	      if (node._prev) node._prev._next = node._next;
	      if (node._next) node._next._prev = node._prev;
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) return this;
	      this._head = this._tail = null;
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	  return MiniSignal;
	})();
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	exports['default'] = MiniSignal;
	module.exports = exports['default'];
	});
	unwrapExports(miniSignals);

	var D__workspace_opensource_creanyanEx_node_modules_parseUri = function parseURI (str, opts) {
	  opts = opts || {};
	  var o = {
	    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
	    q: {
	      name: 'queryKey',
	      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	    },
	    parser: {
	      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
	      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	    }
	  };
	  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str);
	  var uri = {};
	  var i = 14;
	  while (i--) uri[o.key[i]] = m[i] || '';
	  uri[o.q.name] = {};
	  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
	    if ($1) uri[o.q.name][$1] = $2;
	  });
	  return uri
	};

	var async = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.eachSeries = eachSeries;
	exports.queue = queue;
	function _noop() {}
	function eachSeries(array, iterator, callback, deferNext) {
	    var i = 0;
	    var len = array.length;
	    (function next(err) {
	        if (err || i === len) {
	            if (callback) {
	                callback(err);
	            }
	            return;
	        }
	        if (deferNext) {
	            setTimeout(function () {
	                iterator(array[i++], next);
	            }, 1);
	        } else {
	            iterator(array[i++], next);
	        }
	    })();
	}
	function onlyOnce(fn) {
	    return function onceWrapper() {
	        if (fn === null) {
	            throw new Error('Callback was already called.');
	        }
	        var callFn = fn;
	        fn = null;
	        callFn.apply(this, arguments);
	    };
	}
	function queue(worker, concurrency) {
	    if (concurrency == null) {
	        concurrency = 1;
	    } else if (concurrency === 0) {
	        throw new Error('Concurrency must not be zero');
	    }
	    var workers = 0;
	    var q = {
	        _tasks: [],
	        concurrency: concurrency,
	        saturated: _noop,
	        unsaturated: _noop,
	        buffer: concurrency / 4,
	        empty: _noop,
	        drain: _noop,
	        error: _noop,
	        started: false,
	        paused: false,
	        push: function push(data, callback) {
	            _insert(data, false, callback);
	        },
	        kill: function kill() {
	            workers = 0;
	            q.drain = _noop;
	            q.started = false;
	            q._tasks = [];
	        },
	        unshift: function unshift(data, callback) {
	            _insert(data, true, callback);
	        },
	        process: function process() {
	            while (!q.paused && workers < q.concurrency && q._tasks.length) {
	                var task = q._tasks.shift();
	                if (q._tasks.length === 0) {
	                    q.empty();
	                }
	                workers += 1;
	                if (workers === q.concurrency) {
	                    q.saturated();
	                }
	                worker(task.data, onlyOnce(_next(task)));
	            }
	        },
	        length: function length() {
	            return q._tasks.length;
	        },
	        running: function running() {
	            return workers;
	        },
	        idle: function idle() {
	            return q._tasks.length + workers === 0;
	        },
	        pause: function pause() {
	            if (q.paused === true) {
	                return;
	            }
	            q.paused = true;
	        },
	        resume: function resume() {
	            if (q.paused === false) {
	                return;
	            }
	            q.paused = false;
	            for (var w = 1; w <= q.concurrency; w++) {
	                q.process();
	            }
	        }
	    };
	    function _insert(data, insertAtFront, callback) {
	        if (callback != null && typeof callback !== 'function') {
	            throw new Error('task callback must be a function');
	        }
	        q.started = true;
	        if (data == null && q.idle()) {
	            setTimeout(function () {
	                return q.drain();
	            }, 1);
	            return;
	        }
	        var item = {
	            data: data,
	            callback: typeof callback === 'function' ? callback : _noop
	        };
	        if (insertAtFront) {
	            q._tasks.unshift(item);
	        } else {
	            q._tasks.push(item);
	        }
	        setTimeout(function () {
	            return q.process();
	        }, 1);
	    }
	    function _next(task) {
	        return function next() {
	            workers -= 1;
	            task.callback.apply(task, arguments);
	            if (arguments[0] != null) {
	                q.error(arguments[0], task.data);
	            }
	            if (workers <= q.concurrency - q.buffer) {
	                q.unsaturated();
	            }
	            if (q.idle()) {
	                q.drain();
	            }
	            q.process();
	        };
	    }
	    return q;
	}
	});
	unwrapExports(async);
	var async_1 = async.eachSeries;
	var async_2 = async.queue;

	var miniSignals$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) once = false;
	    _classCallCheck(this, MiniSignalBinding);
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) return false;
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	  return MiniSignalBinding;
	})();
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	  node._owner = self;
	  return node;
	}
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	    this._head = this._tail = undefined;
	  }
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	      var node = this._head;
	      if (exists) return !!node;
	      var ee = [];
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var node = this._head;
	      if (!node) return false;
	      while (node) {
	        if (node._once) this.detach(node);
	        node._fn.apply(node._thisArg, arguments);
	        node = node._next;
	      }
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) return this;
	      if (node._prev) node._prev._next = node._next;
	      if (node._next) node._next._prev = node._prev;
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) return this;
	      this._head = this._tail = null;
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	  return MiniSignal;
	})();
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	exports['default'] = MiniSignal;
	module.exports = exports['default'];
	});
	unwrapExports(miniSignals$2);

	var Resource_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.Resource = undefined;
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	var _parseUri2 = _interopRequireDefault(D__workspace_opensource_creanyanEx_node_modules_parseUri);
	var _miniSignals2 = _interopRequireDefault(miniSignals$2);
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var useXdr = !!(window.XDomainRequest && !('withCredentials' in new XMLHttpRequest()));
	var tempAnchor = null;
	var STATUS_NONE = 0;
	var STATUS_OK = 200;
	var STATUS_EMPTY = 204;
	var STATUS_IE_BUG_EMPTY = 1223;
	var STATUS_TYPE_OK = 2;
	function _noop() {}
	var Resource = exports.Resource = function () {
	    Resource.setExtensionLoadType = function setExtensionLoadType(extname, loadType) {
	        setExtMap(Resource._loadTypeMap, extname, loadType);
	    };
	    Resource.setExtensionXhrType = function setExtensionXhrType(extname, xhrType) {
	        setExtMap(Resource._xhrTypeMap, extname, xhrType);
	    };
	    function Resource(name, url, options) {
	        _classCallCheck(this, Resource);
	        if (typeof name !== 'string' || typeof url !== 'string') {
	            throw new Error('Both name and url are required for constructing a resource.');
	        }
	        options = options || {};
	        this._flags = 0;
	        this._setFlag(Resource.STATUS_FLAGS.DATA_URL, url.indexOf('data:') === 0);
	        this.name = name;
	        this.url = url;
	        this.extension = this._getExtension();
	        this.data = null;
	        this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;
	        this.timeout = options.timeout || 0;
	        this.loadType = options.loadType || this._determineLoadType();
	        this.xhrType = options.xhrType;
	        this.metadata = options.metadata || {};
	        this.error = null;
	        this.xhr = null;
	        this.children = [];
	        this.type = Resource.TYPE.UNKNOWN;
	        this.progressChunk = 0;
	        this._dequeue = _noop;
	        this._onLoadBinding = null;
	        this._elementTimer = 0;
	        this._boundComplete = this.complete.bind(this);
	        this._boundOnError = this._onError.bind(this);
	        this._boundOnProgress = this._onProgress.bind(this);
	        this._boundOnTimeout = this._onTimeout.bind(this);
	        this._boundXhrOnError = this._xhrOnError.bind(this);
	        this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this);
	        this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
	        this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
	        this.onStart = new _miniSignals2.default();
	        this.onProgress = new _miniSignals2.default();
	        this.onComplete = new _miniSignals2.default();
	        this.onAfterMiddleware = new _miniSignals2.default();
	    }
	    Resource.prototype.complete = function complete() {
	        this._clearEvents();
	        this._finish();
	    };
	    Resource.prototype.abort = function abort(message) {
	        if (this.error) {
	            return;
	        }
	        this.error = new Error(message);
	        this._clearEvents();
	        if (this.xhr) {
	            this.xhr.abort();
	        } else if (this.xdr) {
	            this.xdr.abort();
	        } else if (this.data) {
	            if (this.data.src) {
	                this.data.src = Resource.EMPTY_GIF;
	            }
	            else {
	                    while (this.data.firstChild) {
	                        this.data.removeChild(this.data.firstChild);
	                    }
	                }
	        }
	        this._finish();
	    };
	    Resource.prototype.load = function load(cb) {
	        var _this = this;
	        if (this.isLoading) {
	            return;
	        }
	        if (this.isComplete) {
	            if (cb) {
	                setTimeout(function () {
	                    return cb(_this);
	                }, 1);
	            }
	            return;
	        } else if (cb) {
	            this.onComplete.once(cb);
	        }
	        this._setFlag(Resource.STATUS_FLAGS.LOADING, true);
	        this.onStart.dispatch(this);
	        if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
	            this.crossOrigin = this._determineCrossOrigin(this.url);
	        }
	        switch (this.loadType) {
	            case Resource.LOAD_TYPE.IMAGE:
	                this.type = Resource.TYPE.IMAGE;
	                this._loadElement('image');
	                break;
	            case Resource.LOAD_TYPE.AUDIO:
	                this.type = Resource.TYPE.AUDIO;
	                this._loadSourceElement('audio');
	                break;
	            case Resource.LOAD_TYPE.VIDEO:
	                this.type = Resource.TYPE.VIDEO;
	                this._loadSourceElement('video');
	                break;
	            case Resource.LOAD_TYPE.XHR:
	            default:
	                if (useXdr && this.crossOrigin) {
	                    this._loadXdr();
	                } else {
	                    this._loadXhr();
	                }
	                break;
	        }
	    };
	    Resource.prototype._hasFlag = function _hasFlag(flag) {
	        return (this._flags & flag) !== 0;
	    };
	    Resource.prototype._setFlag = function _setFlag(flag, value) {
	        this._flags = value ? this._flags | flag : this._flags & ~flag;
	    };
	    Resource.prototype._clearEvents = function _clearEvents() {
	        clearTimeout(this._elementTimer);
	        if (this.data && this.data.removeEventListener) {
	            this.data.removeEventListener('error', this._boundOnError, false);
	            this.data.removeEventListener('load', this._boundComplete, false);
	            this.data.removeEventListener('progress', this._boundOnProgress, false);
	            this.data.removeEventListener('canplaythrough', this._boundComplete, false);
	        }
	        if (this.xhr) {
	            if (this.xhr.removeEventListener) {
	                this.xhr.removeEventListener('error', this._boundXhrOnError, false);
	                this.xhr.removeEventListener('timeout', this._boundXhrOnTimeout, false);
	                this.xhr.removeEventListener('abort', this._boundXhrOnAbort, false);
	                this.xhr.removeEventListener('progress', this._boundOnProgress, false);
	                this.xhr.removeEventListener('load', this._boundXhrOnLoad, false);
	            } else {
	                this.xhr.onerror = null;
	                this.xhr.ontimeout = null;
	                this.xhr.onprogress = null;
	                this.xhr.onload = null;
	            }
	        }
	    };
	    Resource.prototype._finish = function _finish() {
	        if (this.isComplete) {
	            throw new Error('Complete called again for an already completed resource.');
	        }
	        this._setFlag(Resource.STATUS_FLAGS.COMPLETE, true);
	        this._setFlag(Resource.STATUS_FLAGS.LOADING, false);
	        this.onComplete.dispatch(this);
	    };
	    Resource.prototype._loadElement = function _loadElement(type) {
	        if (this.metadata.loadElement) {
	            this.data = this.metadata.loadElement;
	        } else if (type === 'image' && typeof window.Image !== 'undefined') {
	            this.data = new Image();
	        } else {
	            this.data = document.createElement(type);
	        }
	        if (this.crossOrigin) {
	            this.data.crossOrigin = this.crossOrigin;
	        }
	        if (!this.metadata.skipSource) {
	            this.data.src = this.url;
	        }
	        this.data.addEventListener('error', this._boundOnError, false);
	        this.data.addEventListener('load', this._boundComplete, false);
	        this.data.addEventListener('progress', this._boundOnProgress, false);
	        if (this.timeout) {
	            this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
	        }
	    };
	    Resource.prototype._loadSourceElement = function _loadSourceElement(type) {
	        if (this.metadata.loadElement) {
	            this.data = this.metadata.loadElement;
	        } else if (type === 'audio' && typeof window.Audio !== 'undefined') {
	            this.data = new Audio();
	        } else {
	            this.data = document.createElement(type);
	        }
	        if (this.data === null) {
	            this.abort('Unsupported element: ' + type);
	            return;
	        }
	        if (this.crossOrigin) {
	            this.data.crossOrigin = this.crossOrigin;
	        }
	        if (!this.metadata.skipSource) {
	            if (navigator.isCocoonJS) {
	                this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
	            } else if (Array.isArray(this.url)) {
	                var mimeTypes = this.metadata.mimeType;
	                for (var i = 0; i < this.url.length; ++i) {
	                    this.data.appendChild(this._createSource(type, this.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
	                }
	            } else {
	                var _mimeTypes = this.metadata.mimeType;
	                this.data.appendChild(this._createSource(type, this.url, Array.isArray(_mimeTypes) ? _mimeTypes[0] : _mimeTypes));
	            }
	        }
	        this.data.addEventListener('error', this._boundOnError, false);
	        this.data.addEventListener('load', this._boundComplete, false);
	        this.data.addEventListener('progress', this._boundOnProgress, false);
	        this.data.addEventListener('canplaythrough', this._boundComplete, false);
	        this.data.load();
	        if (this.timeout) {
	            this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
	        }
	    };
	    Resource.prototype._loadXhr = function _loadXhr() {
	        if (typeof this.xhrType !== 'string') {
	            this.xhrType = this._determineXhrType();
	        }
	        var xhr = this.xhr = new XMLHttpRequest();
	        xhr.open('GET', this.url, true);
	        xhr.timeout = this.timeout;
	        if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
	            xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT;
	        } else {
	            xhr.responseType = this.xhrType;
	        }
	        xhr.addEventListener('error', this._boundXhrOnError, false);
	        xhr.addEventListener('timeout', this._boundXhrOnTimeout, false);
	        xhr.addEventListener('abort', this._boundXhrOnAbort, false);
	        xhr.addEventListener('progress', this._boundOnProgress, false);
	        xhr.addEventListener('load', this._boundXhrOnLoad, false);
	        xhr.send();
	    };
	    Resource.prototype._loadXdr = function _loadXdr() {
	        if (typeof this.xhrType !== 'string') {
	            this.xhrType = this._determineXhrType();
	        }
	        var xdr = this.xhr = new XDomainRequest();
	        xdr.timeout = this.timeout || 5000;
	        xdr.onerror = this._boundXhrOnError;
	        xdr.ontimeout = this._boundXhrOnTimeout;
	        xdr.onprogress = this._boundOnProgress;
	        xdr.onload = this._boundXhrOnLoad;
	        xdr.open('GET', this.url, true);
	        setTimeout(function () {
	            return xdr.send();
	        }, 1);
	    };
	    Resource.prototype._createSource = function _createSource(type, url, mime) {
	        if (!mime) {
	            mime = type + '/' + this._getExtension(url);
	        }
	        var source = document.createElement('source');
	        source.src = url;
	        source.type = mime;
	        return source;
	    };
	    Resource.prototype._onError = function _onError(event) {
	        this.abort('Failed to load element using: ' + event.target.nodeName);
	    };
	    Resource.prototype._onProgress = function _onProgress(event) {
	        if (event && event.lengthComputable) {
	            this.onProgress.dispatch(this, event.loaded / event.total);
	        }
	    };
	    Resource.prototype._onTimeout = function _onTimeout() {
	        this.abort('Load timed out.');
	    };
	    Resource.prototype._xhrOnError = function _xhrOnError() {
	        var xhr = this.xhr;
	        this.abort(reqType(xhr) + ' Request failed. Status: ' + xhr.status + ', text: "' + xhr.statusText + '"');
	    };
	    Resource.prototype._xhrOnTimeout = function _xhrOnTimeout() {
	        var xhr = this.xhr;
	        this.abort(reqType(xhr) + ' Request timed out.');
	    };
	    Resource.prototype._xhrOnAbort = function _xhrOnAbort() {
	        var xhr = this.xhr;
	        this.abort(reqType(xhr) + ' Request was aborted by the user.');
	    };
	    Resource.prototype._xhrOnLoad = function _xhrOnLoad() {
	        var xhr = this.xhr;
	        var text = '';
	        var status = typeof xhr.status === 'undefined' ? STATUS_OK : xhr.status;
	        if (xhr.responseType === '' || xhr.responseType === 'text' || typeof xhr.responseType === 'undefined') {
	            text = xhr.responseText;
	        }
	        if (status === STATUS_NONE && (text.length > 0 || xhr.responseType === Resource.XHR_RESPONSE_TYPE.BUFFER)) {
	            status = STATUS_OK;
	        }
	        else if (status === STATUS_IE_BUG_EMPTY) {
	                status = STATUS_EMPTY;
	            }
	        var statusType = status / 100 | 0;
	        if (statusType === STATUS_TYPE_OK) {
	            if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) {
	                this.data = text;
	                this.type = Resource.TYPE.TEXT;
	            }
	            else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) {
	                    try {
	                        this.data = JSON.parse(text);
	                        this.type = Resource.TYPE.JSON;
	                    } catch (e) {
	                        this.abort('Error trying to parse loaded json: ' + e);
	                        return;
	                    }
	                }
	                else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
	                        try {
	                            if (window.DOMParser) {
	                                var domparser = new DOMParser();
	                                this.data = domparser.parseFromString(text, 'text/xml');
	                            } else {
	                                var div = document.createElement('div');
	                                div.innerHTML = text;
	                                this.data = div;
	                            }
	                            this.type = Resource.TYPE.XML;
	                        } catch (e) {
	                            this.abort('Error trying to parse loaded xml: ' + e);
	                            return;
	                        }
	                    }
	                    else {
	                            this.data = xhr.response || text;
	                        }
	        } else {
	            this.abort('[' + xhr.status + '] ' + xhr.statusText + ': ' + xhr.responseURL);
	            return;
	        }
	        this.complete();
	    };
	    Resource.prototype._determineCrossOrigin = function _determineCrossOrigin(url, loc) {
	        if (url.indexOf('data:') === 0) {
	            return '';
	        }
	        if (window.origin !== window.location.origin) {
	            return 'anonymous';
	        }
	        loc = loc || window.location;
	        if (!tempAnchor) {
	            tempAnchor = document.createElement('a');
	        }
	        tempAnchor.href = url;
	        url = (0, _parseUri2.default)(tempAnchor.href, { strictMode: true });
	        var samePort = !url.port && loc.port === '' || url.port === loc.port;
	        var protocol = url.protocol ? url.protocol + ':' : '';
	        if (url.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
	            return 'anonymous';
	        }
	        return '';
	    };
	    Resource.prototype._determineXhrType = function _determineXhrType() {
	        return Resource._xhrTypeMap[this.extension] || Resource.XHR_RESPONSE_TYPE.TEXT;
	    };
	    Resource.prototype._determineLoadType = function _determineLoadType() {
	        return Resource._loadTypeMap[this.extension] || Resource.LOAD_TYPE.XHR;
	    };
	    Resource.prototype._getExtension = function _getExtension() {
	        var url = this.url;
	        var ext = '';
	        if (this.isDataUrl) {
	            var slashIndex = url.indexOf('/');
	            ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
	        } else {
	            var queryStart = url.indexOf('?');
	            var hashStart = url.indexOf('#');
	            var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);
	            url = url.substring(0, index);
	            ext = url.substring(url.lastIndexOf('.') + 1);
	        }
	        return ext.toLowerCase();
	    };
	    Resource.prototype._getMimeFromXhrType = function _getMimeFromXhrType(type) {
	        switch (type) {
	            case Resource.XHR_RESPONSE_TYPE.BUFFER:
	                return 'application/octet-binary';
	            case Resource.XHR_RESPONSE_TYPE.BLOB:
	                return 'application/blob';
	            case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
	                return 'application/xml';
	            case Resource.XHR_RESPONSE_TYPE.JSON:
	                return 'application/json';
	            case Resource.XHR_RESPONSE_TYPE.DEFAULT:
	            case Resource.XHR_RESPONSE_TYPE.TEXT:
	            default:
	                return 'text/plain';
	        }
	    };
	    _createClass(Resource, [{
	        key: 'isDataUrl',
	        get: function get() {
	            return this._hasFlag(Resource.STATUS_FLAGS.DATA_URL);
	        }
	    }, {
	        key: 'isComplete',
	        get: function get() {
	            return this._hasFlag(Resource.STATUS_FLAGS.COMPLETE);
	        }
	    }, {
	        key: 'isLoading',
	        get: function get() {
	            return this._hasFlag(Resource.STATUS_FLAGS.LOADING);
	        }
	    }]);
	    return Resource;
	}();
	Resource.STATUS_FLAGS = {
	    NONE: 0,
	    DATA_URL: 1 << 0,
	    COMPLETE: 1 << 1,
	    LOADING: 1 << 2
	};
	Resource.TYPE = {
	    UNKNOWN: 0,
	    JSON: 1,
	    XML: 2,
	    IMAGE: 3,
	    AUDIO: 4,
	    VIDEO: 5,
	    TEXT: 6
	};
	Resource.LOAD_TYPE = {
	    XHR: 1,
	    IMAGE: 2,
	    AUDIO: 3,
	    VIDEO: 4
	};
	Resource.XHR_RESPONSE_TYPE = {
	    DEFAULT: 'text',
	    BUFFER: 'arraybuffer',
	    BLOB: 'blob',
	    DOCUMENT: 'document',
	    JSON: 'json',
	    TEXT: 'text'
	};
	Resource._loadTypeMap = {
	    gif: Resource.LOAD_TYPE.IMAGE,
	    png: Resource.LOAD_TYPE.IMAGE,
	    bmp: Resource.LOAD_TYPE.IMAGE,
	    jpg: Resource.LOAD_TYPE.IMAGE,
	    jpeg: Resource.LOAD_TYPE.IMAGE,
	    tif: Resource.LOAD_TYPE.IMAGE,
	    tiff: Resource.LOAD_TYPE.IMAGE,
	    webp: Resource.LOAD_TYPE.IMAGE,
	    tga: Resource.LOAD_TYPE.IMAGE,
	    svg: Resource.LOAD_TYPE.IMAGE,
	    'svg+xml': Resource.LOAD_TYPE.IMAGE,
	    mp3: Resource.LOAD_TYPE.AUDIO,
	    ogg: Resource.LOAD_TYPE.AUDIO,
	    wav: Resource.LOAD_TYPE.AUDIO,
	    mp4: Resource.LOAD_TYPE.VIDEO,
	    webm: Resource.LOAD_TYPE.VIDEO
	};
	Resource._xhrTypeMap = {
	    xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    gif: Resource.XHR_RESPONSE_TYPE.BLOB,
	    png: Resource.XHR_RESPONSE_TYPE.BLOB,
	    bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
	    jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
	    jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tif: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
	    webp: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tga: Resource.XHR_RESPONSE_TYPE.BLOB,
	    json: Resource.XHR_RESPONSE_TYPE.JSON,
	    text: Resource.XHR_RESPONSE_TYPE.TEXT,
	    txt: Resource.XHR_RESPONSE_TYPE.TEXT,
	    ttf: Resource.XHR_RESPONSE_TYPE.BUFFER,
	    otf: Resource.XHR_RESPONSE_TYPE.BUFFER
	};
	Resource.EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	function setExtMap(map, extname, val) {
	    if (extname && extname.indexOf('.') === 0) {
	        extname = extname.substring(1);
	    }
	    if (!extname) {
	        return;
	    }
	    map[extname] = val;
	}
	function reqType(xhr) {
	    return xhr.toString().replace('object ', '');
	}
	{
	    module.exports.default = Resource;
	}
	});
	unwrapExports(Resource_1);
	var Resource_2 = Resource_1.Resource;

	var Loader_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.Loader = undefined;
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	var _miniSignals2 = _interopRequireDefault(miniSignals$2);
	var _parseUri2 = _interopRequireDefault(D__workspace_opensource_creanyanEx_node_modules_parseUri);
	var async$$1 = _interopRequireWildcard(async);
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var MAX_PROGRESS = 100;
	var rgxExtractUrlHash = /(#[\w-]+)?$/;
	var Loader = exports.Loader = function () {
	    function Loader() {
	        var _this = this;
	        var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	        var concurrency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	        _classCallCheck(this, Loader);
	        this.baseUrl = baseUrl;
	        this.progress = 0;
	        this.loading = false;
	        this.defaultQueryString = '';
	        this._beforeMiddleware = [];
	        this._afterMiddleware = [];
	        this._resourcesParsing = [];
	        this._boundLoadResource = function (r, d) {
	            return _this._loadResource(r, d);
	        };
	        this._queue = async$$1.queue(this._boundLoadResource, concurrency);
	        this._queue.pause();
	        this.resources = {};
	        this.onProgress = new _miniSignals2.default();
	        this.onError = new _miniSignals2.default();
	        this.onLoad = new _miniSignals2.default();
	        this.onStart = new _miniSignals2.default();
	        this.onComplete = new _miniSignals2.default();
	        for (var i = 0; i < Loader._defaultBeforeMiddleware.length; ++i) {
	            this.pre(Loader._defaultBeforeMiddleware[i]);
	        }
	        for (var _i = 0; _i < Loader._defaultAfterMiddleware.length; ++_i) {
	            this.use(Loader._defaultAfterMiddleware[_i]);
	        }
	    }
	    Loader.prototype.add = function add(name, url, options, cb) {
	        if (Array.isArray(name)) {
	            for (var i = 0; i < name.length; ++i) {
	                this.add(name[i]);
	            }
	            return this;
	        }
	        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	            cb = url || name.callback || name.onComplete;
	            options = name;
	            url = name.url;
	            name = name.name || name.key || name.url;
	        }
	        if (typeof url !== 'string') {
	            cb = options;
	            options = url;
	            url = name;
	        }
	        if (typeof url !== 'string') {
	            throw new Error('No url passed to add resource to loader.');
	        }
	        if (typeof options === 'function') {
	            cb = options;
	            options = null;
	        }
	        if (this.loading && (!options || !options.parentResource)) {
	            throw new Error('Cannot add resources while the loader is running.');
	        }
	        if (this.resources[name]) {
	            throw new Error('Resource named "' + name + '" already exists.');
	        }
	        url = this._prepareUrl(url);
	        this.resources[name] = new Resource_1.Resource(name, url, options);
	        if (typeof cb === 'function') {
	            this.resources[name].onAfterMiddleware.once(cb);
	        }
	        if (this.loading) {
	            var parent = options.parentResource;
	            var incompleteChildren = [];
	            for (var _i2 = 0; _i2 < parent.children.length; ++_i2) {
	                if (!parent.children[_i2].isComplete) {
	                    incompleteChildren.push(parent.children[_i2]);
	                }
	            }
	            var fullChunk = parent.progressChunk * (incompleteChildren.length + 1);
	            var eachChunk = fullChunk / (incompleteChildren.length + 2);
	            parent.children.push(this.resources[name]);
	            parent.progressChunk = eachChunk;
	            for (var _i3 = 0; _i3 < incompleteChildren.length; ++_i3) {
	                incompleteChildren[_i3].progressChunk = eachChunk;
	            }
	            this.resources[name].progressChunk = eachChunk;
	        }
	        this._queue.push(this.resources[name]);
	        return this;
	    };
	    Loader.prototype.pre = function pre(fn) {
	        this._beforeMiddleware.push(fn);
	        return this;
	    };
	    Loader.prototype.use = function use(fn) {
	        this._afterMiddleware.push(fn);
	        return this;
	    };
	    Loader.prototype.reset = function reset() {
	        this.progress = 0;
	        this.loading = false;
	        this._queue.kill();
	        this._queue.pause();
	        for (var k in this.resources) {
	            var res = this.resources[k];
	            if (res._onLoadBinding) {
	                res._onLoadBinding.detach();
	            }
	            if (res.isLoading) {
	                res.abort();
	            }
	        }
	        this.resources = {};
	        return this;
	    };
	    Loader.prototype.load = function load(cb) {
	        if (typeof cb === 'function') {
	            this.onComplete.once(cb);
	        }
	        if (this.loading) {
	            return this;
	        }
	        if (this._queue.idle()) {
	            this._onStart();
	            this._onComplete();
	        } else {
	            var numTasks = this._queue._tasks.length;
	            var chunk = MAX_PROGRESS / numTasks;
	            for (var i = 0; i < this._queue._tasks.length; ++i) {
	                this._queue._tasks[i].data.progressChunk = chunk;
	            }
	            this._onStart();
	            this._queue.resume();
	        }
	        return this;
	    };
	    Loader.prototype._prepareUrl = function _prepareUrl(url) {
	        var parsedUrl = (0, _parseUri2.default)(url, { strictMode: true });
	        var result = void 0;
	        if (parsedUrl.protocol || !parsedUrl.path || url.indexOf('//') === 0) {
	            result = url;
	        }
	        else if (this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && url.charAt(0) !== '/') {
	                result = this.baseUrl + '/' + url;
	            } else {
	                result = this.baseUrl + url;
	            }
	        if (this.defaultQueryString) {
	            var hash = rgxExtractUrlHash.exec(result)[0];
	            result = result.substr(0, result.length - hash.length);
	            if (result.indexOf('?') !== -1) {
	                result += '&' + this.defaultQueryString;
	            } else {
	                result += '?' + this.defaultQueryString;
	            }
	            result += hash;
	        }
	        return result;
	    };
	    Loader.prototype._loadResource = function _loadResource(resource, dequeue) {
	        var _this2 = this;
	        resource._dequeue = dequeue;
	        async$$1.eachSeries(this._beforeMiddleware, function (fn, next) {
	            fn.call(_this2, resource, function () {
	                next(resource.isComplete ? {} : null);
	            });
	        }, function () {
	            if (resource.isComplete) {
	                _this2._onLoad(resource);
	            } else {
	                resource._onLoadBinding = resource.onComplete.once(_this2._onLoad, _this2);
	                resource.load();
	            }
	        }, true);
	    };
	    Loader.prototype._onStart = function _onStart() {
	        this.progress = 0;
	        this.loading = true;
	        this.onStart.dispatch(this);
	    };
	    Loader.prototype._onComplete = function _onComplete() {
	        this.progress = MAX_PROGRESS;
	        this.loading = false;
	        this.onComplete.dispatch(this, this.resources);
	    };
	    Loader.prototype._onLoad = function _onLoad(resource) {
	        var _this3 = this;
	        resource._onLoadBinding = null;
	        this._resourcesParsing.push(resource);
	        resource._dequeue();
	        async$$1.eachSeries(this._afterMiddleware, function (fn, next) {
	            fn.call(_this3, resource, next);
	        }, function () {
	            resource.onAfterMiddleware.dispatch(resource);
	            _this3.progress = Math.min(MAX_PROGRESS, _this3.progress + resource.progressChunk);
	            _this3.onProgress.dispatch(_this3, resource);
	            if (resource.error) {
	                _this3.onError.dispatch(resource.error, _this3, resource);
	            } else {
	                _this3.onLoad.dispatch(_this3, resource);
	            }
	            _this3._resourcesParsing.splice(_this3._resourcesParsing.indexOf(resource), 1);
	            if (_this3._queue.idle() && _this3._resourcesParsing.length === 0) {
	                _this3._onComplete();
	            }
	        }, true);
	    };
	    _createClass(Loader, [{
	        key: 'concurrency',
	        get: function get() {
	            return this._queue.concurrency;
	        }
	        ,
	        set: function set(concurrency) {
	            this._queue.concurrency = concurrency;
	        }
	    }]);
	    return Loader;
	}();
	Loader._defaultBeforeMiddleware = [];
	Loader._defaultAfterMiddleware = [];
	Loader.pre = function LoaderPreStatic(fn) {
	    Loader._defaultBeforeMiddleware.push(fn);
	    return Loader;
	};
	Loader.use = function LoaderUseStatic(fn) {
	    Loader._defaultAfterMiddleware.push(fn);
	    return Loader;
	};
	});
	unwrapExports(Loader_1);
	var Loader_2 = Loader_1.Loader;

	var b64 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.encodeBinary = encodeBinary;
	var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	function encodeBinary(input) {
	    var output = '';
	    var inx = 0;
	    while (inx < input.length) {
	        var bytebuffer = [0, 0, 0];
	        var encodedCharIndexes = [0, 0, 0, 0];
	        for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
	            if (inx < input.length) {
	                bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
	            } else {
	                bytebuffer[jnx] = 0;
	            }
	        }
	        encodedCharIndexes[0] = bytebuffer[0] >> 2;
	        encodedCharIndexes[1] = (bytebuffer[0] & 0x3) << 4 | bytebuffer[1] >> 4;
	        encodedCharIndexes[2] = (bytebuffer[1] & 0x0f) << 2 | bytebuffer[2] >> 6;
	        encodedCharIndexes[3] = bytebuffer[2] & 0x3f;
	        var paddingBytes = inx - (input.length - 1);
	        switch (paddingBytes) {
	            case 2:
	                encodedCharIndexes[3] = 64;
	                encodedCharIndexes[2] = 64;
	                break;
	            case 1:
	                encodedCharIndexes[3] = 64;
	                break;
	            default:
	                break;
	        }
	        for (var _jnx = 0; _jnx < encodedCharIndexes.length; ++_jnx) {
	            output += _keyStr.charAt(encodedCharIndexes[_jnx]);
	        }
	    }
	    return output;
	}
	{
	    module.exports.default = encodeBinary;
	}
	});
	unwrapExports(b64);
	var b64_1 = b64.encodeBinary;

	var Loader$1 = Loader_1.Loader;
	var Resource$1 = Resource_1.Resource;
	Loader$1.Resource = Resource$1;
	Loader$1.async = async;
	Loader$1.encodeBinary = b64;
	Loader$1.base64 = b64;
	var lib = Loader$1;
	var Loader_1$1 = Loader$1;
	var default_1$1 = Loader$1;
	var lib_1 = lib.Resource;
	lib.Loader = Loader_1$1;
	lib.default = default_1$1;

	var Loader$2 = Loader_1.Loader;
	var Resource$2 = Resource_1.Resource;
	Loader$2.Resource = Resource$2;
	Loader$2.async = async;
	Loader$2.encodeBinary = b64;
	Loader$2.base64 = b64;
	var D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib = Loader$2;
	var Loader_1$2 = Loader$2;
	var default_1$2 = Loader$2;
	D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib.Loader = Loader_1$2;
	D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib.default = default_1$2;

	var loaders = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var ResourceLoader__default = _interopDefault(D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib);
	var EventEmitter = _interopDefault(eventemitter3);
	function unwrapExports$$1 (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	function createCommonjsModule$$1(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	var parseUri = function parseURI (str, opts) {
	  opts = opts || {};
	  var o = {
	    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
	    q: {
	      name: 'queryKey',
	      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	    },
	    parser: {
	      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
	      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	    }
	  };
	  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str);
	  var uri = {};
	  var i = 14;
	  while (i--) { uri[o.key[i]] = m[i] || ''; }
	  uri[o.q.name] = {};
	  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
	    if ($1) { uri[o.q.name][$1] = $2; }
	  });
	  return uri
	};
	var miniSignals = createCommonjsModule$$1(function (module, exports) {
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; })();
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) { once = false; }
	    _classCallCheck(this, MiniSignalBinding);
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) { return false; }
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	  return MiniSignalBinding;
	})();
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	  node._owner = self;
	  return node;
	}
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	    this._head = this._tail = undefined;
	  }
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	      var node = this._head;
	      if (exists) { return !!node; }
	      var ee = [];
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var arguments$1 = arguments;
	      var this$1 = this;
	      var node = this._head;
	      if (!node) { return false; }
	      while (node) {
	        if (node._once) { this$1.detach(node); }
	        node._fn.apply(node._thisArg, arguments$1);
	        node = node._next;
	      }
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) { return this; }
	      if (node._prev) { node._prev._next = node._next; }
	      if (node._next) { node._next._prev = node._prev; }
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) { return this; }
	      this._head = this._tail = null;
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	  return MiniSignal;
	})();
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	exports['default'] = MiniSignal;
	module.exports = exports['default'];
	});
	unwrapExports$$1(miniSignals);
	var Resource_1 = createCommonjsModule$$1(function (module, exports) {
	exports.__esModule = true;
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();
	var _parseUri2 = _interopRequireDefault(parseUri);
	var _miniSignals2 = _interopRequireDefault(miniSignals);
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var useXdr = !!(window.XDomainRequest && !('withCredentials' in new XMLHttpRequest()));
	var tempAnchor = null;
	var STATUS_NONE = 0;
	var STATUS_OK = 200;
	var STATUS_EMPTY = 204;
	var STATUS_IE_BUG_EMPTY = 1223;
	var STATUS_TYPE_OK = 2;
	function _noop() {}
	var Resource$$1 = function () {
	    Resource$$1.setExtensionLoadType = function setExtensionLoadType(extname, loadType) {
	        setExtMap(Resource$$1._loadTypeMap, extname, loadType);
	    };
	    Resource$$1.setExtensionXhrType = function setExtensionXhrType(extname, xhrType) {
	        setExtMap(Resource$$1._xhrTypeMap, extname, xhrType);
	    };
	    function Resource$$1(name, url, options) {
	        _classCallCheck(this, Resource$$1);
	        if (typeof name !== 'string' || typeof url !== 'string') {
	            throw new Error('Both name and url are required for constructing a resource.');
	        }
	        options = options || {};
	        this._flags = 0;
	        this._setFlag(Resource$$1.STATUS_FLAGS.DATA_URL, url.indexOf('data:') === 0);
	        this.name = name;
	        this.url = url;
	        this.extension = this._getExtension();
	        this.data = null;
	        this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;
	        this.loadType = options.loadType || this._determineLoadType();
	        this.xhrType = options.xhrType;
	        this.metadata = options.metadata || {};
	        this.error = null;
	        this.xhr = null;
	        this.children = [];
	        this.type = Resource$$1.TYPE.UNKNOWN;
	        this.progressChunk = 0;
	        this._dequeue = _noop;
	        this._onLoadBinding = null;
	        this._boundComplete = this.complete.bind(this);
	        this._boundOnError = this._onError.bind(this);
	        this._boundOnProgress = this._onProgress.bind(this);
	        this._boundXhrOnError = this._xhrOnError.bind(this);
	        this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
	        this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
	        this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this);
	        this.onStart = new _miniSignals2.default();
	        this.onProgress = new _miniSignals2.default();
	        this.onComplete = new _miniSignals2.default();
	        this.onAfterMiddleware = new _miniSignals2.default();
	    }
	    Resource$$1.prototype.complete = function complete() {
	        if (this.data && this.data.removeEventListener) {
	            this.data.removeEventListener('error', this._boundOnError, false);
	            this.data.removeEventListener('load', this._boundComplete, false);
	            this.data.removeEventListener('progress', this._boundOnProgress, false);
	            this.data.removeEventListener('canplaythrough', this._boundComplete, false);
	        }
	        if (this.xhr) {
	            if (this.xhr.removeEventListener) {
	                this.xhr.removeEventListener('error', this._boundXhrOnError, false);
	                this.xhr.removeEventListener('abort', this._boundXhrOnAbort, false);
	                this.xhr.removeEventListener('progress', this._boundOnProgress, false);
	                this.xhr.removeEventListener('load', this._boundXhrOnLoad, false);
	            } else {
	                this.xhr.onerror = null;
	                this.xhr.ontimeout = null;
	                this.xhr.onprogress = null;
	                this.xhr.onload = null;
	            }
	        }
	        if (this.isComplete) {
	            throw new Error('Complete called again for an already completed resource.');
	        }
	        this._setFlag(Resource$$1.STATUS_FLAGS.COMPLETE, true);
	        this._setFlag(Resource$$1.STATUS_FLAGS.LOADING, false);
	        this.onComplete.dispatch(this);
	    };
	    Resource$$1.prototype.abort = function abort(message) {
	        var this$1 = this;
	        if (this.error) {
	            return;
	        }
	        this.error = new Error(message);
	        if (this.xhr) {
	            this.xhr.abort();
	        } else if (this.xdr) {
	            this.xdr.abort();
	        } else if (this.data) {
	            if (this.data.src) {
	                this.data.src = Resource$$1.EMPTY_GIF;
	            }
	            else {
	                    while (this.data.firstChild) {
	                        this$1.data.removeChild(this$1.data.firstChild);
	                    }
	                }
	        }
	        this.complete();
	    };
	    Resource$$1.prototype.load = function load(cb) {
	        var _this = this;
	        if (this.isLoading) {
	            return;
	        }
	        if (this.isComplete) {
	            if (cb) {
	                setTimeout(function () {
	                    return cb(_this);
	                }, 1);
	            }
	            return;
	        } else if (cb) {
	            this.onComplete.once(cb);
	        }
	        this._setFlag(Resource$$1.STATUS_FLAGS.LOADING, true);
	        this.onStart.dispatch(this);
	        if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
	            this.crossOrigin = this._determineCrossOrigin(this.url);
	        }
	        switch (this.loadType) {
	            case Resource$$1.LOAD_TYPE.IMAGE:
	                this.type = Resource$$1.TYPE.IMAGE;
	                this._loadElement('image');
	                break;
	            case Resource$$1.LOAD_TYPE.AUDIO:
	                this.type = Resource$$1.TYPE.AUDIO;
	                this._loadSourceElement('audio');
	                break;
	            case Resource$$1.LOAD_TYPE.VIDEO:
	                this.type = Resource$$1.TYPE.VIDEO;
	                this._loadSourceElement('video');
	                break;
	            case Resource$$1.LOAD_TYPE.XHR:
	            default:
	                if (useXdr && this.crossOrigin) {
	                    this._loadXdr();
	                } else {
	                    this._loadXhr();
	                }
	                break;
	        }
	    };
	    Resource$$1.prototype._hasFlag = function _hasFlag(flag) {
	        return !!(this._flags & flag);
	    };
	    Resource$$1.prototype._setFlag = function _setFlag(flag, value) {
	        this._flags = value ? this._flags | flag : this._flags & ~flag;
	    };
	    Resource$$1.prototype._loadElement = function _loadElement(type) {
	        if (this.metadata.loadElement) {
	            this.data = this.metadata.loadElement;
	        } else if (type === 'image' && typeof window.Image !== 'undefined') {
	            this.data = new Image();
	        } else {
	            this.data = document.createElement(type);
	        }
	        if (this.crossOrigin) {
	            this.data.crossOrigin = this.crossOrigin;
	        }
	        if (!this.metadata.skipSource) {
	            this.data.src = this.url;
	        }
	        this.data.addEventListener('error', this._boundOnError, false);
	        this.data.addEventListener('load', this._boundComplete, false);
	        this.data.addEventListener('progress', this._boundOnProgress, false);
	    };
	    Resource$$1.prototype._loadSourceElement = function _loadSourceElement(type) {
	        var this$1 = this;
	        if (this.metadata.loadElement) {
	            this.data = this.metadata.loadElement;
	        } else if (type === 'audio' && typeof window.Audio !== 'undefined') {
	            this.data = new Audio();
	        } else {
	            this.data = document.createElement(type);
	        }
	        if (this.data === null) {
	            this.abort('Unsupported element: ' + type);
	            return;
	        }
	        if (!this.metadata.skipSource) {
	            if (navigator.isCocoonJS) {
	                this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
	            } else if (Array.isArray(this.url)) {
	                var mimeTypes = this.metadata.mimeType;
	                for (var i = 0; i < this.url.length; ++i) {
	                    this$1.data.appendChild(this$1._createSource(type, this$1.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
	                }
	            } else {
	                var _mimeTypes = this.metadata.mimeType;
	                this.data.appendChild(this._createSource(type, this.url, Array.isArray(_mimeTypes) ? _mimeTypes[0] : _mimeTypes));
	            }
	        }
	        this.data.addEventListener('error', this._boundOnError, false);
	        this.data.addEventListener('load', this._boundComplete, false);
	        this.data.addEventListener('progress', this._boundOnProgress, false);
	        this.data.addEventListener('canplaythrough', this._boundComplete, false);
	        this.data.load();
	    };
	    Resource$$1.prototype._loadXhr = function _loadXhr() {
	        if (typeof this.xhrType !== 'string') {
	            this.xhrType = this._determineXhrType();
	        }
	        var xhr = this.xhr = new XMLHttpRequest();
	        xhr.open('GET', this.url, true);
	        if (this.xhrType === Resource$$1.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT) {
	            xhr.responseType = Resource$$1.XHR_RESPONSE_TYPE.TEXT;
	        } else {
	            xhr.responseType = this.xhrType;
	        }
	        xhr.addEventListener('error', this._boundXhrOnError, false);
	        xhr.addEventListener('abort', this._boundXhrOnAbort, false);
	        xhr.addEventListener('progress', this._boundOnProgress, false);
	        xhr.addEventListener('load', this._boundXhrOnLoad, false);
	        xhr.send();
	    };
	    Resource$$1.prototype._loadXdr = function _loadXdr() {
	        if (typeof this.xhrType !== 'string') {
	            this.xhrType = this._determineXhrType();
	        }
	        var xdr = this.xhr = new XDomainRequest();
	        xdr.timeout = 5000;
	        xdr.onerror = this._boundXhrOnError;
	        xdr.ontimeout = this._boundXdrOnTimeout;
	        xdr.onprogress = this._boundOnProgress;
	        xdr.onload = this._boundXhrOnLoad;
	        xdr.open('GET', this.url, true);
	        setTimeout(function () {
	            return xdr.send();
	        }, 1);
	    };
	    Resource$$1.prototype._createSource = function _createSource(type, url, mime) {
	        if (!mime) {
	            mime = type + '/' + this._getExtension(url);
	        }
	        var source = document.createElement('source');
	        source.src = url;
	        source.type = mime;
	        return source;
	    };
	    Resource$$1.prototype._onError = function _onError(event) {
	        this.abort('Failed to load element using: ' + event.target.nodeName);
	    };
	    Resource$$1.prototype._onProgress = function _onProgress(event) {
	        if (event && event.lengthComputable) {
	            this.onProgress.dispatch(this, event.loaded / event.total);
	        }
	    };
	    Resource$$1.prototype._xhrOnError = function _xhrOnError() {
	        var xhr = this.xhr;
	        this.abort(reqType(xhr) + ' Request failed. Status: ' + xhr.status + ', text: "' + xhr.statusText + '"');
	    };
	    Resource$$1.prototype._xhrOnAbort = function _xhrOnAbort() {
	        this.abort(reqType(this.xhr) + ' Request was aborted by the user.');
	    };
	    Resource$$1.prototype._xdrOnTimeout = function _xdrOnTimeout() {
	        this.abort(reqType(this.xhr) + ' Request timed out.');
	    };
	    Resource$$1.prototype._xhrOnLoad = function _xhrOnLoad() {
	        var xhr = this.xhr;
	        var text = '';
	        var status = typeof xhr.status === 'undefined' ? STATUS_OK : xhr.status;
	        if (xhr.responseType === '' || xhr.responseType === 'text' || typeof xhr.responseType === 'undefined') {
	            text = xhr.responseText;
	        }
	        if (status === STATUS_NONE && (text.length > 0 || xhr.responseType === Resource$$1.XHR_RESPONSE_TYPE.BUFFER)) {
	            status = STATUS_OK;
	        }
	        else if (status === STATUS_IE_BUG_EMPTY) {
	                status = STATUS_EMPTY;
	            }
	        var statusType = status / 100 | 0;
	        if (statusType === STATUS_TYPE_OK) {
	            if (this.xhrType === Resource$$1.XHR_RESPONSE_TYPE.TEXT) {
	                this.data = text;
	                this.type = Resource$$1.TYPE.TEXT;
	            }
	            else if (this.xhrType === Resource$$1.XHR_RESPONSE_TYPE.JSON) {
	                    try {
	                        this.data = JSON.parse(text);
	                        this.type = Resource$$1.TYPE.JSON;
	                    } catch (e) {
	                        this.abort('Error trying to parse loaded json: ' + e);
	                        return;
	                    }
	                }
	                else if (this.xhrType === Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT) {
	                        try {
	                            if (window.DOMParser) {
	                                var domparser = new DOMParser();
	                                this.data = domparser.parseFromString(text, 'text/xml');
	                            } else {
	                                var div = document.createElement('div');
	                                div.innerHTML = text;
	                                this.data = div;
	                            }
	                            this.type = Resource$$1.TYPE.XML;
	                        } catch (e) {
	                            this.abort('Error trying to parse loaded xml: ' + e);
	                            return;
	                        }
	                    }
	                    else {
	                            this.data = xhr.response || text;
	                        }
	        } else {
	            this.abort('[' + xhr.status + '] ' + xhr.statusText + ': ' + xhr.responseURL);
	            return;
	        }
	        this.complete();
	    };
	    Resource$$1.prototype._determineCrossOrigin = function _determineCrossOrigin(url, loc) {
	        if (url.indexOf('data:') === 0) {
	            return '';
	        }
	        loc = loc || window.location;
	        if (!tempAnchor) {
	            tempAnchor = document.createElement('a');
	        }
	        tempAnchor.href = url;
	        url = (0, _parseUri2.default)(tempAnchor.href, { strictMode: true });
	        var samePort = !url.port && loc.port === '' || url.port === loc.port;
	        var protocol = url.protocol ? url.protocol + ':' : '';
	        if (url.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
	            return 'anonymous';
	        }
	        return '';
	    };
	    Resource$$1.prototype._determineXhrType = function _determineXhrType() {
	        return Resource$$1._xhrTypeMap[this.extension] || Resource$$1.XHR_RESPONSE_TYPE.TEXT;
	    };
	    Resource$$1.prototype._determineLoadType = function _determineLoadType() {
	        return Resource$$1._loadTypeMap[this.extension] || Resource$$1.LOAD_TYPE.XHR;
	    };
	    Resource$$1.prototype._getExtension = function _getExtension() {
	        var url = this.url;
	        var ext = '';
	        if (this.isDataUrl) {
	            var slashIndex = url.indexOf('/');
	            ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
	        } else {
	            var queryStart = url.indexOf('?');
	            var hashStart = url.indexOf('#');
	            var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);
	            url = url.substring(0, index);
	            ext = url.substring(url.lastIndexOf('.') + 1);
	        }
	        return ext.toLowerCase();
	    };
	    Resource$$1.prototype._getMimeFromXhrType = function _getMimeFromXhrType(type) {
	        switch (type) {
	            case Resource$$1.XHR_RESPONSE_TYPE.BUFFER:
	                return 'application/octet-binary';
	            case Resource$$1.XHR_RESPONSE_TYPE.BLOB:
	                return 'application/blob';
	            case Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT:
	                return 'application/xml';
	            case Resource$$1.XHR_RESPONSE_TYPE.JSON:
	                return 'application/json';
	            case Resource$$1.XHR_RESPONSE_TYPE.DEFAULT:
	            case Resource$$1.XHR_RESPONSE_TYPE.TEXT:
	            default:
	                return 'text/plain';
	        }
	    };
	    _createClass(Resource$$1, [{
	        key: 'isDataUrl',
	        get: function get() {
	            return this._hasFlag(Resource$$1.STATUS_FLAGS.DATA_URL);
	        }
	    }, {
	        key: 'isComplete',
	        get: function get() {
	            return this._hasFlag(Resource$$1.STATUS_FLAGS.COMPLETE);
	        }
	    }, {
	        key: 'isLoading',
	        get: function get() {
	            return this._hasFlag(Resource$$1.STATUS_FLAGS.LOADING);
	        }
	    }]);
	    return Resource$$1;
	}();
	exports.default = Resource$$1;
	Resource$$1.STATUS_FLAGS = {
	    NONE: 0,
	    DATA_URL: 1 << 0,
	    COMPLETE: 1 << 1,
	    LOADING: 1 << 2
	};
	Resource$$1.TYPE = {
	    UNKNOWN: 0,
	    JSON: 1,
	    XML: 2,
	    IMAGE: 3,
	    AUDIO: 4,
	    VIDEO: 5,
	    TEXT: 6
	};
	Resource$$1.LOAD_TYPE = {
	    XHR: 1,
	    IMAGE: 2,
	    AUDIO: 3,
	    VIDEO: 4
	};
	Resource$$1.XHR_RESPONSE_TYPE = {
	    DEFAULT: 'text',
	    BUFFER: 'arraybuffer',
	    BLOB: 'blob',
	    DOCUMENT: 'document',
	    JSON: 'json',
	    TEXT: 'text'
	};
	Resource$$1._loadTypeMap = {
	    gif: Resource$$1.LOAD_TYPE.IMAGE,
	    png: Resource$$1.LOAD_TYPE.IMAGE,
	    bmp: Resource$$1.LOAD_TYPE.IMAGE,
	    jpg: Resource$$1.LOAD_TYPE.IMAGE,
	    jpeg: Resource$$1.LOAD_TYPE.IMAGE,
	    tif: Resource$$1.LOAD_TYPE.IMAGE,
	    tiff: Resource$$1.LOAD_TYPE.IMAGE,
	    webp: Resource$$1.LOAD_TYPE.IMAGE,
	    tga: Resource$$1.LOAD_TYPE.IMAGE,
	    svg: Resource$$1.LOAD_TYPE.IMAGE,
	    'svg+xml': Resource$$1.LOAD_TYPE.IMAGE,
	    mp3: Resource$$1.LOAD_TYPE.AUDIO,
	    ogg: Resource$$1.LOAD_TYPE.AUDIO,
	    wav: Resource$$1.LOAD_TYPE.AUDIO,
	    mp4: Resource$$1.LOAD_TYPE.VIDEO,
	    webm: Resource$$1.LOAD_TYPE.VIDEO
	};
	Resource$$1._xhrTypeMap = {
	    xhtml: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    html: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    htm: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    xml: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    tmx: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    svg: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    tsx: Resource$$1.XHR_RESPONSE_TYPE.DOCUMENT,
	    gif: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    png: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    bmp: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    jpg: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    jpeg: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    tif: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    tiff: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    webp: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    tga: Resource$$1.XHR_RESPONSE_TYPE.BLOB,
	    json: Resource$$1.XHR_RESPONSE_TYPE.JSON,
	    text: Resource$$1.XHR_RESPONSE_TYPE.TEXT,
	    txt: Resource$$1.XHR_RESPONSE_TYPE.TEXT,
	    ttf: Resource$$1.XHR_RESPONSE_TYPE.BUFFER,
	    otf: Resource$$1.XHR_RESPONSE_TYPE.BUFFER
	};
	Resource$$1.EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	function setExtMap(map, extname, val) {
	    if (extname && extname.indexOf('.') === 0) {
	        extname = extname.substring(1);
	    }
	    if (!extname) {
	        return;
	    }
	    map[extname] = val;
	}
	function reqType(xhr) {
	    return xhr.toString().replace('object ', '');
	}
	});
	unwrapExports$$1(Resource_1);
	var b64 = createCommonjsModule$$1(function (module, exports) {
	exports.__esModule = true;
	exports.encodeBinary = encodeBinary;
	var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	function encodeBinary(input) {
	    var output = '';
	    var inx = 0;
	    while (inx < input.length) {
	        var bytebuffer = [0, 0, 0];
	        var encodedCharIndexes = [0, 0, 0, 0];
	        for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
	            if (inx < input.length) {
	                bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
	            } else {
	                bytebuffer[jnx] = 0;
	            }
	        }
	        encodedCharIndexes[0] = bytebuffer[0] >> 2;
	        encodedCharIndexes[1] = (bytebuffer[0] & 0x3) << 4 | bytebuffer[1] >> 4;
	        encodedCharIndexes[2] = (bytebuffer[1] & 0x0f) << 2 | bytebuffer[2] >> 6;
	        encodedCharIndexes[3] = bytebuffer[2] & 0x3f;
	        var paddingBytes = inx - (input.length - 1);
	        switch (paddingBytes) {
	            case 2:
	                encodedCharIndexes[3] = 64;
	                encodedCharIndexes[2] = 64;
	                break;
	            case 1:
	                encodedCharIndexes[3] = 64;
	                break;
	            default:
	                break;
	        }
	        for (var _jnx = 0; _jnx < encodedCharIndexes.length; ++_jnx) {
	            output += _keyStr.charAt(encodedCharIndexes[_jnx]);
	        }
	    }
	    return output;
	}
	});
	unwrapExports$$1(b64);
	var b64_1 = b64.encodeBinary;
	var blob = createCommonjsModule$$1(function (module, exports) {
	exports.__esModule = true;
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	exports.blobMiddlewareFactory = blobMiddlewareFactory;
	var _Resource2 = _interopRequireDefault(Resource_1);
	var _b2 = _interopRequireDefault(b64);
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	var Url = window.URL || window.webkitURL;
	function blobMiddlewareFactory() {
	    return function blobMiddleware(resource, next) {
	        if (!resource.data) {
	            next();
	            return;
	        }
	        if (resource.xhr && resource.xhrType === _Resource2.default.XHR_RESPONSE_TYPE.BLOB) {
	            if (!window.Blob || typeof resource.data === 'string') {
	                var type = resource.xhr.getResponseHeader('content-type');
	                if (type && type.indexOf('image') === 0) {
	                    resource.data = new Image();
	                    resource.data.src = 'data:' + type + ';base64,' + _b2.default.encodeBinary(resource.xhr.responseText);
	                    resource.type = _Resource2.default.TYPE.IMAGE;
	                    resource.data.onload = function () {
	                        resource.data.onload = null;
	                        next();
	                    };
	                    return;
	                }
	            }
	            else if (resource.data.type.indexOf('image') === 0) {
	                    var _ret = function () {
	                        var src = Url.createObjectURL(resource.data);
	                        resource.blob = resource.data;
	                        resource.data = new Image();
	                        resource.data.src = src;
	                        resource.type = _Resource2.default.TYPE.IMAGE;
	                        resource.data.onload = function () {
	                            Url.revokeObjectURL(src);
	                            resource.data.onload = null;
	                            next();
	                        };
	                        return {
	                            v: void 0
	                        };
	                    }();
	                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") { return _ret.v; }
	                }
	        }
	        next();
	    };
	}
	});
	unwrapExports$$1(blob);
	var blob_1 = blob.blobMiddlewareFactory;
	var TextureLoader = function TextureLoader () {};
	TextureLoader.use = function use (resource, next)
	{
	    if (resource.data && resource.type === D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib.Resource.TYPE.IMAGE)
	    {
	        resource.texture = core.Texture.fromLoader(
	            resource.data,
	            resource.url,
	            resource.name
	        );
	    }
	    next();
	};
	var Loader = (function (ResourceLoader$$1) {
	    function Loader(baseUrl, concurrency)
	    {
	        var this$1 = this;
	        ResourceLoader$$1.call(this, baseUrl, concurrency);
	        EventEmitter.call(this);
	        for (var i = 0; i < Loader._plugins.length; ++i)
	        {
	            var plugin = Loader._plugins[i];
	            var pre = plugin.pre;
	            var use = plugin.use;
	            if (pre)
	            {
	                this$1.pre(pre);
	            }
	            if (use)
	            {
	                this$1.use(use);
	            }
	        }
	        this.onStart.add(function (l) { return this$1.emit('start', l); });
	        this.onProgress.add(function (l, r) { return this$1.emit('progress', l, r); });
	        this.onError.add(function (e, l, r) { return this$1.emit('error', e, l, r); });
	        this.onLoad.add(function (l, r) { return this$1.emit('load', l, r); });
	        this.onComplete.add(function (l, r) { return this$1.emit('complete', l, r); });
	        this._protected = false;
	    }
	    if ( ResourceLoader$$1 ) Loader.__proto__ = ResourceLoader$$1;
	    Loader.prototype = Object.create( ResourceLoader$$1 && ResourceLoader$$1.prototype );
	    Loader.prototype.constructor = Loader;
	    var staticAccessors = { shared: { configurable: true } };
	    Loader.prototype.destroy = function destroy ()
	    {
	        if (!this._protected)
	        {
	            this.removeAllListeners();
	            this.reset();
	        }
	    };
	    staticAccessors.shared.get = function ()
	    {
	        var shared = Loader._shared;
	        if (!shared)
	        {
	            shared = new Loader();
	            shared._protected = true;
	            Loader._shared = shared;
	        }
	        return shared;
	    };
	    Object.defineProperties( Loader, staticAccessors );
	    return Loader;
	}(ResourceLoader__default));
	Object.assign(Loader.prototype, EventEmitter.prototype);
	Loader._plugins = [];
	Loader.registerPlugin = function registerPlugin(plugin)
	{
	    Loader._plugins.push(plugin);
	    if (plugin.add)
	    {
	        plugin.add();
	    }
	    return Loader;
	};
	Loader.registerPlugin({ use: blob_1() });
	Loader.registerPlugin(TextureLoader);
	var LoaderPlugin = function LoaderPlugin () {};
	LoaderPlugin.init = function init (options)
	{
	    options = Object.assign({
	        sharedLoader: false,
	    }, options);
	    this.loader = options.sharedLoader ? Loader.shared : new Loader();
	};
	LoaderPlugin.destroy = function destroy ()
	{
	    if (this.loader)
	    {
	        this.loader.destroy();
	        this.loader = null;
	    }
	};
	var LoaderResource = D__workspace_opensource_creanyanEx_node_modules_resourceLoader_lib.Resource;
	exports.LoaderResource = LoaderResource;
	exports.Loader = Loader;
	exports.TextureLoader = TextureLoader;
	exports.LoaderPlugin = LoaderPlugin;
	});
	var loaders$1 = unwrapExports(loaders);
	var loaders_1 = loaders.LoaderResource;
	var loaders_2 = loaders.Loader;
	var loaders_3 = loaders.TextureLoader;
	var loaders_4 = loaders.LoaderPlugin;

	var loaders$2 = ({
		default: loaders$1,
		__moduleExports: loaders,
		LoaderResource: loaders_1,
		Loader: loaders_2,
		TextureLoader: loaders_3,
		LoaderPlugin: loaders_4
	});

	var mesh = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var tempPoint = new math.Point();
	var tempPolygon = new math.Polygon();
	var Mesh = (function (Container$$1) {
	    function Mesh(geometry, shader, state, drawMode)
	    {
	        if ( drawMode === void 0 ) drawMode = constants.DRAW_MODES.TRIANGLES;
	        Container$$1.call(this);
	        this.geometry = geometry;
	        this.shader = shader;
	        this.state = state || new core.State();
	        this.drawMode = drawMode;
	        this._glDatas = {};
	        this.pluginName = 'mesh';
	        this.start = 0;
	        this.size = 0;
	    }
	    if ( Container$$1 ) Mesh.__proto__ = Container$$1;
	    Mesh.prototype = Object.create( Container$$1 && Container$$1.prototype );
	    Mesh.prototype.constructor = Mesh;
	    Mesh.prototype._render = function _render (renderer)
	    {
	        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
	        renderer.plugins[this.pluginName].render(this);
	    };
	    Mesh.prototype._calculateBounds = function _calculateBounds ()
	    {
	        if (this.geometry.attributes.aVertexPosition)
	        {
	            var vertices = this.geometry.getAttribute('aVertexPosition').data;
	            this._bounds.addVertices(this.transform, vertices, 0, vertices.length);
	        }
	    };
	    Mesh.prototype.containsPoint = function containsPoint (point)
	    {
	        if (!this.getBounds().contains(point.x, point.y))
	        {
	            return false;
	        }
	        this.worldTransform.applyInverse(point, tempPoint);
	        var vertices = this.geometry.getAttribute('aVertexPosition').data;
	        var points = tempPolygon.points;
	        var indices =  this.geometry.getIndex().data;
	        var len = indices.length;
	        var step = this.drawMode === 4 ? 3 : 1;
	        for (var i = 0; i + 2 < len; i += step)
	        {
	            var ind0 = indices[i] * 2;
	            var ind1 = indices[i + 1] * 2;
	            var ind2 = indices[i + 2] * 2;
	            points[0] = vertices[ind0];
	            points[1] = vertices[ind0 + 1];
	            points[2] = vertices[ind1];
	            points[3] = vertices[ind1 + 1];
	            points[4] = vertices[ind2];
	            points[5] = vertices[ind2 + 1];
	            if (tempPolygon.contains(tempPoint.x, tempPoint.y))
	            {
	                return true;
	            }
	        }
	        return false;
	    };
	    Mesh.prototype.destroy = function destroy (options)
	    {
	        var this$1 = this;
	        for (var id in this$1._glDatas)
	        {
	            var data = this$1._glDatas[id];
	            if (data.destroy)
	            {
	                data.destroy();
	            }
	            else
	            {
	                if (data.vertexBuffer)
	                {
	                    data.vertexBuffer.destroy();
	                    data.vertexBuffer = null;
	                }
	                if (data.indexBuffer)
	                {
	                    data.indexBuffer.destroy();
	                    data.indexBuffer = null;
	                }
	                if (data.uvBuffer)
	                {
	                    data.uvBuffer.destroy();
	                    data.uvBuffer = null;
	                }
	                if (data.vao)
	                {
	                    data.vao.destroy();
	                    data.vao = null;
	                }
	            }
	        }
	        this._glDatas = null;
	        this.geometry = null;
	        this.shader = null;
	        this.state = null;
	        Container$$1.prototype.destroy.call(this, options);
	    };
	    return Mesh;
	}(display.Container));
	var MeshRenderer = (function (ObjectRenderer$$1) {
	    function MeshRenderer(renderer)
	    {
	        ObjectRenderer$$1.call(this, renderer);
	        this.shader = null;
	    }
	    if ( ObjectRenderer$$1 ) MeshRenderer.__proto__ = ObjectRenderer$$1;
	    MeshRenderer.prototype = Object.create( ObjectRenderer$$1 && ObjectRenderer$$1.prototype );
	    MeshRenderer.prototype.constructor = MeshRenderer;
	    MeshRenderer.prototype.contextChange = function contextChange ()
	    {
	        this.gl = this.renderer.gl;
	        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	    };
	    MeshRenderer.prototype.render = function render (mesh)
	    {
	        if (mesh.shader.program.uniformData.translationMatrix)
	        {
	            mesh.shader.uniforms.translationMatrix = mesh.transform.worldTransform.toArray(true);
	        }
	        if (mesh.shader.uniforms.uTextureMatrix)
	        {
	            if (mesh.uploadUvMatrix)
	            {
	                mesh.shader.uniforms.uTextureMatrix = mesh.uvMatrix.mapCoord.toArray(true);
	            }
	            else
	            {
	                mesh.shader.uniforms.uTextureMatrix = math.Matrix.IDENTITY.toArray(true);
	            }
	        }
	        this.renderer.shader.bind(mesh.shader);
	        this.renderer.state.setState(mesh.state);
	        this.renderer.geometry.bind(mesh.geometry, mesh.shader);
	        this.renderer.geometry.draw(mesh.drawMode, mesh.size, mesh.start, mesh.geometry.instanceCount);
	    };
	    return MeshRenderer;
	}(core.ObjectRenderer));
	exports.Mesh = Mesh;
	exports.MeshRenderer = MeshRenderer;
	});
	var mesh$1 = unwrapExports(mesh);
	var mesh_1 = mesh.Mesh;
	var mesh_2 = mesh.MeshRenderer;

	var mesh$2 = ({
		default: mesh$1,
		__moduleExports: mesh,
		Mesh: mesh_1,
		MeshRenderer: mesh_2
	});

	var meshExtras = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n";
	var fragment = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n";
	var meshProgram;
	var Mesh2d = (function (Mesh$$1) {
	    function Mesh2d(texture, vertices, uvs, indices, drawMode)
	    {
	        if ( texture === void 0 ) texture = core.Texture.EMPTY;
	        var geometry = new core.Geometry();
	        if (!meshProgram)
	        {
	            meshProgram = new core.Program(vertex, fragment);
	        }
	        geometry.addAttribute('aVertexPosition', vertices)
	            .addAttribute('aTextureCoord', uvs)
	            .addIndex(indices);
	        geometry.getAttribute('aVertexPosition').static = false;
	        var uniforms = {
	            uSampler: texture,
	            uTextureMatrix: math.Matrix.IDENTITY,
	            alpha: 1,
	            uColor: new Float32Array([1, 1, 1, 1]),
	        };
	        Mesh$$1.call(this, geometry, new core.Shader(meshProgram, uniforms), null, drawMode);
	        this.uvs = geometry.getAttribute('aTextureCoord').data;
	        this.vertices = geometry.getAttribute('aVertexPosition').data;
	        this.uniforms = uniforms;
	        this.texture = texture;
	        this._tintRGB = new Float32Array([1, 1, 1]);
	        this.tint = 0xFFFFFF;
	        this.blendMode = constants.BLEND_MODES.NORMAL;
	        this.uvMatrix = new core.TextureMatrix(this._texture);
	        this.uploadUvMatrix = false;
	        this.autoUpdate = true;
	    }
	    if ( Mesh$$1 ) Mesh2d.__proto__ = Mesh$$1;
	    Mesh2d.prototype = Object.create( Mesh$$1 && Mesh$$1.prototype );
	    Mesh2d.prototype.constructor = Mesh2d;
	    var prototypeAccessors = { tint: { configurable: true },blendMode: { configurable: true },texture: { configurable: true } };
	    prototypeAccessors.tint.get = function ()
	    {
	        return this._tint;
	    };
	    prototypeAccessors.tint.set = function (value)
	    {
	        this._tint = value;
	        utils.hex2rgb(this._tint, this._tintRGB);
	    };
	    prototypeAccessors.blendMode.get = function ()
	    {
	        return this.state.blendMode;
	    };
	    prototypeAccessors.blendMode.set = function (value)
	    {
	        this.state.blendMode = value;
	    };
	    prototypeAccessors.texture.get = function ()
	    {
	        return this._texture;
	    };
	    prototypeAccessors.texture.set = function (value)
	    {
	        if (this._texture === value)
	        {
	            return;
	        }
	        this._texture = value;
	        this.uniforms.uSampler = this.texture;
	        if (value)
	        {
	            if (value.baseTexture.valid)
	            {
	                this._onTextureUpdate();
	            }
	            else
	            {
	                value.once('update', this._onTextureUpdate, this);
	            }
	        }
	    };
	    Mesh2d.prototype._render = function _render (renderer)
	    {
	        var baseTex = this._texture.baseTexture;
	        utils.premultiplyRgba(this._tintRGB, this.worldAlpha, this.uniforms.uColor, baseTex.premultiplyAlpha);
	        Mesh$$1.prototype._render.call(this, renderer);
	    };
	    Mesh2d.prototype._onTextureUpdate = function _onTextureUpdate ()
	    {
	        if (!this.uvMatrix)
	        {
	            return;
	        }
	        this.uvMatrix.texture = this._texture;
	        this.refresh();
	    };
	    Mesh2d.prototype.multiplyUvs = function multiplyUvs ()
	    {
	        if (!this.uploadUvMatrix)
	        {
	            this.uvMatrix.multiplyUvs(this.uvs);
	        }
	    };
	    Mesh2d.prototype.refresh = function refresh (forceUpdate)
	    {
	        if (this.uvMatrix.update(forceUpdate))
	        {
	            this._refresh();
	        }
	    };
	    Mesh2d.prototype.updateTransform = function updateTransform ()
	    {
	        if (this.autoUpdate)
	        {
	            this.geometry.buffers[0].update();
	        }
	        this.containerUpdateTransform();
	    };
	    Mesh2d.prototype._refresh = function _refresh ()
	    {
	    };
	    Object.defineProperties( Mesh2d.prototype, prototypeAccessors );
	    return Mesh2d;
	}(mesh.Mesh));
	var Plane = (function (Mesh2d$$1) {
	    function Plane(texture, verticesX, verticesY, opts)
	    {
	        if ( opts === void 0 ) opts = {};
	        Mesh2d$$1.call(this, texture, new Float32Array(1), new Float32Array(1), new Uint16Array(1), 4);
	        this.verticesX = verticesX || 10;
	        this.verticesY = verticesY || 10;
	        this.meshWidth = opts.meshWidth || 0;
	        this.meshHeight = opts.meshHeight || 0;
	        this.refresh();
	    }
	    if ( Mesh2d$$1 ) Plane.__proto__ = Mesh2d$$1;
	    Plane.prototype = Object.create( Mesh2d$$1 && Mesh2d$$1.prototype );
	    Plane.prototype.constructor = Plane;
	    Plane.prototype._refresh = function _refresh ()
	    {
	        var this$1 = this;
	        var texture = this._texture;
	        var total = this.verticesX * this.verticesY;
	        var verts = [];
	        var uvs = [];
	        var indices = [];
	        var segmentsX = this.verticesX - 1;
	        var segmentsY = this.verticesY - 1;
	        var sizeX = (this.meshWidth || texture.width) / segmentsX;
	        var sizeY = (this.meshHeight || texture.height) / segmentsY;
	        for (var i = 0; i < total; i++)
	        {
	            var x = (i % this$1.verticesX);
	            var y = ((i / this$1.verticesX) | 0);
	            verts.push(x * sizeX, y * sizeY);
	            uvs.push(x / segmentsX, y / segmentsY);
	        }
	        var totalSub = segmentsX * segmentsY;
	        for (var i$1 = 0; i$1 < totalSub; i$1++)
	        {
	            var xpos = i$1 % segmentsX;
	            var ypos = (i$1 / segmentsX) | 0;
	            var value = (ypos * this$1.verticesX) + xpos;
	            var value2 = (ypos * this$1.verticesX) + xpos + 1;
	            var value3 = ((ypos + 1) * this$1.verticesX) + xpos;
	            var value4 = ((ypos + 1) * this$1.verticesX) + xpos + 1;
	            indices.push(value, value2, value3);
	            indices.push(value2, value4, value3);
	        }
	        this.vertices = new Float32Array(verts);
	        this.uvs = new Float32Array(uvs);
	        this.indices = new Uint16Array(indices);
	        this.geometry.buffers[0].data = this.vertices;
	        this.geometry.buffers[1].data = this.uvs;
	        this.geometry.indexBuffer.data = this.indices;
	        this.geometry.buffers[0].update();
	        this.geometry.buffers[1].update();
	        this.geometry.indexBuffer.update();
	        this.multiplyUvs();
	    };
	    return Plane;
	}(Mesh2d));
	var DEFAULT_BORDER_SIZE = 10;
	var NineSlicePlane = (function (Plane$$1) {
	    function NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight)
	    {
	        Plane$$1.call(this, texture, 4, 4);
	        this._origWidth = texture.orig.width;
	        this._origHeight = texture.orig.height;
	        this._width = this._origWidth;
	        this._height = this._origHeight;
	        this._leftWidth = typeof leftWidth !== 'undefined' ? leftWidth : DEFAULT_BORDER_SIZE;
	        this._rightWidth = typeof rightWidth !== 'undefined' ? rightWidth : DEFAULT_BORDER_SIZE;
	        this._topHeight = typeof topHeight !== 'undefined' ? topHeight : DEFAULT_BORDER_SIZE;
	        this._bottomHeight = typeof bottomHeight !== 'undefined' ? bottomHeight : DEFAULT_BORDER_SIZE;
	        this.refresh(true);
	    }
	    if ( Plane$$1 ) NineSlicePlane.__proto__ = Plane$$1;
	    NineSlicePlane.prototype = Object.create( Plane$$1 && Plane$$1.prototype );
	    NineSlicePlane.prototype.constructor = NineSlicePlane;
	    var prototypeAccessors = { width: { configurable: true },height: { configurable: true },leftWidth: { configurable: true },rightWidth: { configurable: true },topHeight: { configurable: true },bottomHeight: { configurable: true } };
	    NineSlicePlane.prototype.updateHorizontalVertices = function updateHorizontalVertices ()
	    {
	        var vertices = this.vertices;
	        var h = this._topHeight + this._bottomHeight;
	        var scale = this._height > h ? 1.0 : this._height / h;
	        vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight * scale;
	        vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - (this._bottomHeight * scale);
	        vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
	    };
	    NineSlicePlane.prototype.updateVerticalVertices = function updateVerticalVertices ()
	    {
	        var vertices = this.vertices;
	        var w = this._leftWidth + this._rightWidth;
	        var scale = this._width > w ? 1.0 : this._width / w;
	        vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth * scale;
	        vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - (this._rightWidth * scale);
	        vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return this._width;
	    };
	    prototypeAccessors.width.set = function (value)
	    {
	        this._width = value;
	        this._refresh();
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return this._height;
	    };
	    prototypeAccessors.height.set = function (value)
	    {
	        this._height = value;
	        this._refresh();
	    };
	    prototypeAccessors.leftWidth.get = function ()
	    {
	        return this._leftWidth;
	    };
	    prototypeAccessors.leftWidth.set = function (value)
	    {
	        this._leftWidth = value;
	        this._refresh();
	    };
	    prototypeAccessors.rightWidth.get = function ()
	    {
	        return this._rightWidth;
	    };
	    prototypeAccessors.rightWidth.set = function (value)
	    {
	        this._rightWidth = value;
	        this._refresh();
	    };
	    prototypeAccessors.topHeight.get = function ()
	    {
	        return this._topHeight;
	    };
	    prototypeAccessors.topHeight.set = function (value)
	    {
	        this._topHeight = value;
	        this._refresh();
	    };
	    prototypeAccessors.bottomHeight.get = function ()
	    {
	        return this._bottomHeight;
	    };
	    prototypeAccessors.bottomHeight.set = function (value)
	    {
	        this._bottomHeight = value;
	        this._refresh();
	    };
	    NineSlicePlane.prototype._refresh = function _refresh ()
	    {
	        Plane$$1.prototype._refresh.call(this);
	        var uvs = this.uvs;
	        var texture = this._texture;
	        this._origWidth = texture.orig.width;
	        this._origHeight = texture.orig.height;
	        var _uvw = 1.0 / this._origWidth;
	        var _uvh = 1.0 / this._origHeight;
	        uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0;
	        uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0;
	        uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
	        uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;
	        uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth;
	        uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - (_uvw * this._rightWidth);
	        uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight;
	        uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - (_uvh * this._bottomHeight);
	        this.updateHorizontalVertices();
	        this.updateVerticalVertices();
	        this.geometry.buffers[1].update();
	        this.multiplyUvs();
	    };
	    Object.defineProperties( NineSlicePlane.prototype, prototypeAccessors );
	    return NineSlicePlane;
	}(Plane));
	var Rope = (function (Mesh2d$$1) {
	    function Rope(texture, points)
	    {
	        Mesh2d$$1.call(this, texture, new Float32Array(points.length * 4),
	            new Float32Array(points.length * 4),
	            new Uint16Array(points.length * 2),
	            5);
	        this.points = points;
	        this.refresh();
	    }
	    if ( Mesh2d$$1 ) Rope.__proto__ = Mesh2d$$1;
	    Rope.prototype = Object.create( Mesh2d$$1 && Mesh2d$$1.prototype );
	    Rope.prototype.constructor = Rope;
	    Rope.prototype._refresh = function _refresh ()
	    {
	        var points = this.points;
	        if (!points) { return; }
	        var vertexBuffer = this.geometry.getAttribute('aVertexPosition');
	        var uvBuffer = this.geometry.getAttribute('aTextureCoord');
	        var indexBuffer = this.geometry.getIndex();
	        if (points.length < 1 || !this.texture._uvs)
	        {
	            return;
	        }
	        if (vertexBuffer.data.length / 4 !== points.length)
	        {
	            vertexBuffer.data = new Float32Array(points.length * 4);
	            uvBuffer.data = new Float32Array(points.length * 4);
	            indexBuffer.data = new Uint16Array(points.length * 2);
	        }
	        var uvs = uvBuffer.data;
	        var indices = indexBuffer.data;
	        uvs[0] = 0;
	        uvs[1] = 0;
	        uvs[2] = 0;
	        uvs[3] = 1;
	        indices[0] = 0;
	        indices[1] = 1;
	        var total = points.length;
	        for (var i = 1; i < total; i++)
	        {
	            var index = i * 4;
	            var amount = i / (total - 1);
	            uvs[index] = amount;
	            uvs[index + 1] = 0;
	            uvs[index + 2] = amount;
	            uvs[index + 3] = 1;
	            index = i * 2;
	            indices[index] = index;
	            indices[index + 1] = index + 1;
	        }
	        uvBuffer.update();
	        indexBuffer.update();
	        this.multiplyUvs();
	        this.refreshVertices();
	    };
	    Rope.prototype.refreshVertices = function refreshVertices ()
	    {
	        var this$1 = this;
	        var points = this.points;
	        if (points.length < 1)
	        {
	            return;
	        }
	        var lastPoint = points[0];
	        var nextPoint;
	        var perpX = 0;
	        var perpY = 0;
	        var vertices = this.vertices;
	        var total = points.length;
	        for (var i = 0; i < total; i++)
	        {
	            var point = points[i];
	            var index = i * 4;
	            if (i < points.length - 1)
	            {
	                nextPoint = points[i + 1];
	            }
	            else
	            {
	                nextPoint = point;
	            }
	            perpY = -(nextPoint.x - lastPoint.x);
	            perpX = nextPoint.y - lastPoint.y;
	            var perpLength = Math.sqrt((perpX * perpX) + (perpY * perpY));
	            var num = this$1._texture.height / 2;
	            perpX /= perpLength;
	            perpY /= perpLength;
	            perpX *= num;
	            perpY *= num;
	            vertices[index] = point.x + perpX;
	            vertices[index + 1] = point.y + perpY;
	            vertices[index + 2] = point.x - perpX;
	            vertices[index + 3] = point.y - perpY;
	            lastPoint = point;
	        }
	        this.geometry.buffers[0].update();
	    };
	    Rope.prototype.updateTransform = function updateTransform ()
	    {
	        if (this.autoUpdate)
	        {
	            this.refreshVertices();
	        }
	        this.containerUpdateTransform();
	    };
	    return Rope;
	}(Mesh2d));
	exports.Mesh2d = Mesh2d;
	exports.Plane = Plane;
	exports.NineSlicePlane = NineSlicePlane;
	exports.Rope = Rope;
	});
	var meshExtras$1 = unwrapExports(meshExtras);
	var meshExtras_1 = meshExtras.Mesh2d;
	var meshExtras_2 = meshExtras.Plane;
	var meshExtras_3 = meshExtras.NineSlicePlane;
	var meshExtras_4 = meshExtras.Rope;

	var meshExtras$2 = ({
		default: meshExtras$1,
		__moduleExports: meshExtras,
		Mesh2d: meshExtras_1,
		Plane: meshExtras_2,
		NineSlicePlane: meshExtras_3,
		Rope: meshExtras_4
	});

	var particles = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var ParticleContainer = (function (Container$$1) {
	    function ParticleContainer(maxSize, properties, batchSize, autoResize)
	    {
	        if ( maxSize === void 0 ) maxSize = 1500;
	        if ( batchSize === void 0 ) batchSize = 16384;
	        if ( autoResize === void 0 ) autoResize = false;
	        Container$$1.call(this);
	        var maxBatchSize = 16384;
	        if (batchSize > maxBatchSize)
	        {
	            batchSize = maxBatchSize;
	        }
	        if (batchSize > maxSize)
	        {
	            batchSize = maxSize;
	        }
	        this._properties = [false, true, false, false, false];
	        this._maxSize = maxSize;
	        this._batchSize = batchSize;
	        this._buffers = null;
	        this._bufferUpdateIDs = [];
	        this._updateID = 0;
	        this.interactiveChildren = false;
	        this.blendMode = constants.BLEND_MODES.NORMAL;
	        this.autoResize = autoResize;
	        this.roundPixels = true;
	        this.baseTexture = null;
	        this.setProperties(properties);
	        this._tint = 0;
	        this.tintRgb = new Float32Array(4);
	        this.tint = 0xFFFFFF;
	    }
	    if ( Container$$1 ) ParticleContainer.__proto__ = Container$$1;
	    ParticleContainer.prototype = Object.create( Container$$1 && Container$$1.prototype );
	    ParticleContainer.prototype.constructor = ParticleContainer;
	    var prototypeAccessors = { tint: { configurable: true } };
	    ParticleContainer.prototype.setProperties = function setProperties (properties)
	    {
	        if (properties)
	        {
	            this._properties[0] = 'vertices' in properties || 'scale' in properties
	                ? !!properties.vertices || !!properties.scale : this._properties[0];
	            this._properties[1] = 'position' in properties ? !!properties.position : this._properties[1];
	            this._properties[2] = 'rotation' in properties ? !!properties.rotation : this._properties[2];
	            this._properties[3] = 'uvs' in properties ? !!properties.uvs : this._properties[3];
	            this._properties[4] = 'tint' in properties || 'alpha' in properties
	                ? !!properties.tint || !!properties.alpha : this._properties[4];
	        }
	    };
	    ParticleContainer.prototype.updateTransform = function updateTransform ()
	    {
	        this.displayObjectUpdateTransform();
	    };
	    prototypeAccessors.tint.get = function ()
	    {
	        return this._tint;
	    };
	    prototypeAccessors.tint.set = function (value)
	    {
	        this._tint = value;
	        utils.hex2rgb(value, this.tintRgb);
	    };
	    ParticleContainer.prototype.render = function render (renderer)
	    {
	        var this$1 = this;
	        if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
	        {
	            return;
	        }
	        if (!this.baseTexture)
	        {
	            this.baseTexture = this.children[0]._texture.baseTexture;
	            if (!this.baseTexture.valid)
	            {
	                this.baseTexture.once('update', function () { return this$1.onChildrenChange(0); });
	            }
	        }
	        renderer.batch.setObjectRenderer(renderer.plugins.particle);
	        renderer.plugins.particle.render(this);
	    };
	    ParticleContainer.prototype.onChildrenChange = function onChildrenChange (smallestChildIndex)
	    {
	        var this$1 = this;
	        var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
	        while (this._bufferUpdateIDs.length < bufferIndex)
	        {
	            this$1._bufferUpdateIDs.push(0);
	        }
	        this._bufferUpdateIDs[bufferIndex] = ++this._updateID;
	    };
	    ParticleContainer.prototype.dispose = function dispose ()
	    {
	        var this$1 = this;
	        if (this._buffers)
	        {
	            for (var i = 0; i < this._buffers.length; ++i)
	            {
	                this$1._buffers[i].destroy();
	            }
	            this._buffers = null;
	        }
	    };
	    ParticleContainer.prototype.destroy = function destroy (options)
	    {
	        Container$$1.prototype.destroy.call(this, options);
	        this.dispose();
	        this._properties = null;
	        this._buffers = null;
	        this._bufferUpdateIDs = null;
	    };
	    Object.defineProperties( ParticleContainer.prototype, prototypeAccessors );
	    return ParticleContainer;
	}(display.Container));
	var ParticleBuffer = function ParticleBuffer(properties, dynamicPropertyFlags, size)
	{
	    var this$1 = this;
	    this.geometry = new core.Geometry();
	    this.indexBuffer = null;
	    this.size = size;
	    this.dynamicProperties = [];
	    this.staticProperties = [];
	    for (var i = 0; i < properties.length; ++i)
	    {
	        var property = properties[i];
	        property = {
	            attributeName: property.attributeName,
	            size: property.size,
	            uploadFunction: property.uploadFunction,
	            type: property.type || constants.TYPES.FLOAT,
	            offset: property.offset,
	        };
	        if (dynamicPropertyFlags[i])
	        {
	            this$1.dynamicProperties.push(property);
	        }
	        else
	        {
	            this$1.staticProperties.push(property);
	        }
	    }
	    this.staticStride = 0;
	    this.staticBuffer = null;
	    this.staticData = null;
	    this.staticDataUint32 = null;
	    this.dynamicStride = 0;
	    this.dynamicBuffer = null;
	    this.dynamicData = null;
	    this.dynamicDataUint32 = null;
	    this._updateID = 0;
	    this.initBuffers();
	};
	ParticleBuffer.prototype.initBuffers = function initBuffers ()
	{
	        var this$1 = this;
	    var geometry = this.geometry;
	    var dynamicOffset = 0;
	    this.indexBuffer = new core.Buffer(utils.createIndicesForQuads(this.size), true, true);
	    geometry.addIndex(this.indexBuffer);
	    this.dynamicStride = 0;
	    for (var i = 0; i < this.dynamicProperties.length; ++i)
	    {
	        var property = this$1.dynamicProperties[i];
	        property.offset = dynamicOffset;
	        dynamicOffset += property.size;
	        this$1.dynamicStride += property.size;
	    }
	    var dynBuffer = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
	    this.dynamicData = new Float32Array(dynBuffer);
	    this.dynamicDataUint32 = new Uint32Array(dynBuffer);
	    this.dynamicBuffer = new core.Buffer(this.dynamicData, false, false);
	    var staticOffset = 0;
	    this.staticStride = 0;
	    for (var i$1 = 0; i$1 < this.staticProperties.length; ++i$1)
	    {
	        var property$1 = this$1.staticProperties[i$1];
	        property$1.offset = staticOffset;
	        staticOffset += property$1.size;
	        this$1.staticStride += property$1.size;
	    }
	    var statBuffer = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
	    this.staticData = new Float32Array(statBuffer);
	    this.staticDataUint32 = new Uint32Array(statBuffer);
	    this.staticBuffer = new core.Buffer(this.staticData, true, false);
	    for (var i$2 = 0; i$2 < this.dynamicProperties.length; ++i$2)
	    {
	        var property$2 = this$1.dynamicProperties[i$2];
	        geometry.addAttribute(
	            property$2.attributeName,
	            this$1.dynamicBuffer,
	            0,
	            property$2.type === constants.TYPES.UNSIGNED_BYTE,
	            property$2.type,
	            this$1.dynamicStride * 4,
	            property$2.offset * 4
	        );
	    }
	    for (var i$3 = 0; i$3 < this.staticProperties.length; ++i$3)
	    {
	        var property$3 = this$1.staticProperties[i$3];
	        geometry.addAttribute(
	            property$3.attributeName,
	            this$1.staticBuffer,
	            0,
	            property$3.type === constants.TYPES.UNSIGNED_BYTE,
	            property$3.type,
	            this$1.staticStride * 4,
	            property$3.offset * 4
	        );
	    }
	};
	ParticleBuffer.prototype.uploadDynamic = function uploadDynamic (children, startIndex, amount)
	{
	        var this$1 = this;
	    for (var i = 0; i < this.dynamicProperties.length; i++)
	    {
	        var property = this$1.dynamicProperties[i];
	        property.uploadFunction(children, startIndex, amount,
	            property.type === constants.TYPES.UNSIGNED_BYTE ? this$1.dynamicDataUint32 : this$1.dynamicData,
	            this$1.dynamicStride, property.offset);
	    }
	    this.dynamicBuffer._updateID++;
	};
	ParticleBuffer.prototype.uploadStatic = function uploadStatic (children, startIndex, amount)
	{
	        var this$1 = this;
	    for (var i = 0; i < this.staticProperties.length; i++)
	    {
	        var property = this$1.staticProperties[i];
	        property.uploadFunction(children, startIndex, amount,
	            property.type === constants.TYPES.UNSIGNED_BYTE ? this$1.staticDataUint32 : this$1.staticData,
	            this$1.staticStride, property.offset);
	    }
	    this.staticBuffer._updateID++;
	};
	ParticleBuffer.prototype.destroy = function destroy ()
	{
	    this.indexBuffer = null;
	    this.dynamicProperties = null;
	    this.dynamicBuffer = null;
	    this.dynamicData = null;
	    this.dynamicDataUint32 = null;
	    this.staticProperties = null;
	    this.staticBuffer = null;
	    this.staticData = null;
	    this.staticDataUint32 = null;
	    this.geometry.destroy();
	};
	var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n";
	var fragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}";
	var ParticleRenderer = (function (ObjectRenderer$$1) {
	    function ParticleRenderer(renderer)
	    {
	        ObjectRenderer$$1.call(this, renderer);
	        this.shader = null;
	        this.properties = null;
	        this.tempMatrix = new math.Matrix();
	        this.properties = [
	            {
	                attributeName: 'aVertexPosition',
	                size: 2,
	                uploadFunction: this.uploadVertices,
	                offset: 0,
	            },
	            {
	                attributeName: 'aPositionCoord',
	                size: 2,
	                uploadFunction: this.uploadPosition,
	                offset: 0,
	            },
	            {
	                attributeName: 'aRotation',
	                size: 1,
	                uploadFunction: this.uploadRotation,
	                offset: 0,
	            },
	            {
	                attributeName: 'aTextureCoord',
	                size: 2,
	                uploadFunction: this.uploadUvs,
	                offset: 0,
	            },
	            {
	                attributeName: 'aColor',
	                size: 1,
	                type: constants.TYPES.UNSIGNED_BYTE,
	                uploadFunction: this.uploadTint,
	                offset: 0,
	            } ];
	        this.shader = core.Shader.from(vertex, fragment, {});
	    }
	    if ( ObjectRenderer$$1 ) ParticleRenderer.__proto__ = ObjectRenderer$$1;
	    ParticleRenderer.prototype = Object.create( ObjectRenderer$$1 && ObjectRenderer$$1.prototype );
	    ParticleRenderer.prototype.constructor = ParticleRenderer;
	    ParticleRenderer.prototype.render = function render (container)
	    {
	        var this$1 = this;
	        var children = container.children;
	        var maxSize = container._maxSize;
	        var batchSize = container._batchSize;
	        var renderer = this.renderer;
	        var totalChildren = children.length;
	        if (totalChildren === 0)
	        {
	            return;
	        }
	        else if (totalChildren > maxSize)
	        {
	            totalChildren = maxSize;
	        }
	        var buffers = container._buffers;
	        if (!buffers)
	        {
	            buffers = container._buffers = this.generateBuffers(container);
	        }
	        var baseTexture = children[0]._texture.baseTexture;
	        this.renderer.state.setBlendMode(utils.correctBlendMode(container.blendMode, baseTexture.premultiplyAlpha));
	        var gl = renderer.gl;
	        var m = container.worldTransform.copyTo(this.tempMatrix);
	        m.prepend(renderer.globalUniforms.uniforms.projectionMatrix);
	        this.shader.uniforms.translationMatrix = m.toArray(true);
	        this.shader.uniforms.uColor = utils.premultiplyRgba(container.tintRgb,
	            container.worldAlpha, this.shader.uniforms.uColor, baseTexture.premultiplyAlpha);
	        this.shader.uniforms.uSampler = baseTexture;
	        this.renderer.shader.bind(this.shader);
	        var updateStatic = false;
	        for (var i = 0, j = 0; i < totalChildren; i += batchSize, j += 1)
	        {
	            var amount = (totalChildren - i);
	            if (amount > batchSize)
	            {
	                amount = batchSize;
	            }
	            if (j >= buffers.length)
	            {
	                if (!container.autoResize)
	                {
	                    break;
	                }
	                buffers.push(this$1._generateOneMoreBuffer(container));
	            }
	            var buffer = buffers[j];
	            buffer.uploadDynamic(children, i, amount);
	            var bid = container._bufferUpdateIDs[j] || 0;
	            updateStatic = updateStatic || (buffer._updateID < bid);
	            if (updateStatic)
	            {
	                buffer._updateID = container._updateID;
	                buffer.uploadStatic(children, i, amount);
	            }
	            renderer.geometry.bind(buffer.geometry);
	            gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
	        }
	    };
	    ParticleRenderer.prototype.generateBuffers = function generateBuffers (container)
	    {
	        var this$1 = this;
	        var buffers = [];
	        var size = container._maxSize;
	        var batchSize = container._batchSize;
	        var dynamicPropertyFlags = container._properties;
	        for (var i = 0; i < size; i += batchSize)
	        {
	            buffers.push(new ParticleBuffer(this$1.properties, dynamicPropertyFlags, batchSize));
	        }
	        return buffers;
	    };
	    ParticleRenderer.prototype._generateOneMoreBuffer = function _generateOneMoreBuffer (container)
	    {
	        var batchSize = container._batchSize;
	        var dynamicPropertyFlags = container._properties;
	        return new ParticleBuffer(this.properties, dynamicPropertyFlags, batchSize);
	    };
	    ParticleRenderer.prototype.uploadVertices = function uploadVertices (children, startIndex, amount, array, stride, offset)
	    {
	        var w0 = 0;
	        var w1 = 0;
	        var h0 = 0;
	        var h1 = 0;
	        for (var i = 0; i < amount; ++i)
	        {
	            var sprite = children[startIndex + i];
	            var texture = sprite._texture;
	            var sx = sprite.scale.x;
	            var sy = sprite.scale.y;
	            var trim = texture.trim;
	            var orig = texture.orig;
	            if (trim)
	            {
	                w1 = trim.x - (sprite.anchor.x * orig.width);
	                w0 = w1 + trim.width;
	                h1 = trim.y - (sprite.anchor.y * orig.height);
	                h0 = h1 + trim.height;
	            }
	            else
	            {
	                w0 = (orig.width) * (1 - sprite.anchor.x);
	                w1 = (orig.width) * -sprite.anchor.x;
	                h0 = orig.height * (1 - sprite.anchor.y);
	                h1 = orig.height * -sprite.anchor.y;
	            }
	            array[offset] = w1 * sx;
	            array[offset + 1] = h1 * sy;
	            array[offset + stride] = w0 * sx;
	            array[offset + stride + 1] = h1 * sy;
	            array[offset + (stride * 2)] = w0 * sx;
	            array[offset + (stride * 2) + 1] = h0 * sy;
	            array[offset + (stride * 3)] = w1 * sx;
	            array[offset + (stride * 3) + 1] = h0 * sy;
	            offset += stride * 4;
	        }
	    };
	    ParticleRenderer.prototype.uploadPosition = function uploadPosition (children, startIndex, amount, array, stride, offset)
	    {
	        for (var i = 0; i < amount; i++)
	        {
	            var spritePosition = children[startIndex + i].position;
	            array[offset] = spritePosition.x;
	            array[offset + 1] = spritePosition.y;
	            array[offset + stride] = spritePosition.x;
	            array[offset + stride + 1] = spritePosition.y;
	            array[offset + (stride * 2)] = spritePosition.x;
	            array[offset + (stride * 2) + 1] = spritePosition.y;
	            array[offset + (stride * 3)] = spritePosition.x;
	            array[offset + (stride * 3) + 1] = spritePosition.y;
	            offset += stride * 4;
	        }
	    };
	    ParticleRenderer.prototype.uploadRotation = function uploadRotation (children, startIndex, amount, array, stride, offset)
	    {
	        for (var i = 0; i < amount; i++)
	        {
	            var spriteRotation = children[startIndex + i].rotation;
	            array[offset] = spriteRotation;
	            array[offset + stride] = spriteRotation;
	            array[offset + (stride * 2)] = spriteRotation;
	            array[offset + (stride * 3)] = spriteRotation;
	            offset += stride * 4;
	        }
	    };
	    ParticleRenderer.prototype.uploadUvs = function uploadUvs (children, startIndex, amount, array, stride, offset)
	    {
	        for (var i = 0; i < amount; ++i)
	        {
	            var textureUvs = children[startIndex + i]._texture._uvs;
	            if (textureUvs)
	            {
	                array[offset] = textureUvs.x0;
	                array[offset + 1] = textureUvs.y0;
	                array[offset + stride] = textureUvs.x1;
	                array[offset + stride + 1] = textureUvs.y1;
	                array[offset + (stride * 2)] = textureUvs.x2;
	                array[offset + (stride * 2) + 1] = textureUvs.y2;
	                array[offset + (stride * 3)] = textureUvs.x3;
	                array[offset + (stride * 3) + 1] = textureUvs.y3;
	                offset += stride * 4;
	            }
	            else
	            {
	                array[offset] = 0;
	                array[offset + 1] = 0;
	                array[offset + stride] = 0;
	                array[offset + stride + 1] = 0;
	                array[offset + (stride * 2)] = 0;
	                array[offset + (stride * 2) + 1] = 0;
	                array[offset + (stride * 3)] = 0;
	                array[offset + (stride * 3) + 1] = 0;
	                offset += stride * 4;
	            }
	        }
	    };
	    ParticleRenderer.prototype.uploadTint = function uploadTint (children, startIndex, amount, array, stride, offset)
	    {
	        for (var i = 0; i < amount; ++i)
	        {
	            var sprite = children[startIndex + i];
	            var premultiplied = sprite._texture.baseTexture.premultiplyAlpha;
	            var alpha = sprite.alpha;
	            var argb = alpha < 1.0 && premultiplied ? utils.premultiplyTint(sprite._tintRGB, alpha)
	                : sprite._tintRGB + (alpha * 255 << 24);
	            array[offset] = argb;
	            array[offset + stride] = argb;
	            array[offset + (stride * 2)] = argb;
	            array[offset + (stride * 3)] = argb;
	            offset += stride * 4;
	        }
	    };
	    ParticleRenderer.prototype.destroy = function destroy ()
	    {
	        ObjectRenderer$$1.prototype.destroy.call(this);
	        if (this.shader)
	        {
	            this.shader.destroy();
	            this.shader = null;
	        }
	        this.tempMatrix = null;
	    };
	    return ParticleRenderer;
	}(core.ObjectRenderer));
	exports.ParticleContainer = ParticleContainer;
	exports.ParticleRenderer = ParticleRenderer;
	});
	var particles$1 = unwrapExports(particles);
	var particles_1 = particles.ParticleContainer;
	var particles_2 = particles.ParticleRenderer;

	var particles$2 = ({
		default: particles$1,
		__moduleExports: particles,
		ParticleContainer: particles_1,
		ParticleRenderer: particles_2
	});

	var text = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var TEXT_GRADIENT = {
	    LINEAR_VERTICAL: 0,
	    LINEAR_HORIZONTAL: 1,
	};
	var defaultStyle = {
	    align: 'left',
	    breakWords: false,
	    dropShadow: false,
	    dropShadowAlpha: 1,
	    dropShadowAngle: Math.PI / 6,
	    dropShadowBlur: 0,
	    dropShadowColor: 'black',
	    dropShadowDistance: 5,
	    fill: 'black',
	    fillGradientType: TEXT_GRADIENT.LINEAR_VERTICAL,
	    fillGradientStops: [],
	    fontFamily: 'Arial',
	    fontSize: 26,
	    fontStyle: 'normal',
	    fontVariant: 'normal',
	    fontWeight: 'normal',
	    letterSpacing: 0,
	    lineHeight: 0,
	    lineJoin: 'miter',
	    miterLimit: 10,
	    padding: 0,
	    stroke: 'black',
	    strokeThickness: 0,
	    textBaseline: 'alphabetic',
	    trim: false,
	    whiteSpace: 'pre',
	    wordWrap: false,
	    wordWrapWidth: 100,
	    leading: 0,
	};
	var TextStyle = function TextStyle(style)
	{
	    this.styleID = 0;
	    this.reset();
	    deepCopyProperties(this, style, style);
	};
	var prototypeAccessors = { align: { configurable: true },breakWords: { configurable: true },dropShadow: { configurable: true },dropShadowAlpha: { configurable: true },dropShadowAngle: { configurable: true },dropShadowBlur: { configurable: true },dropShadowColor: { configurable: true },dropShadowDistance: { configurable: true },fill: { configurable: true },fillGradientType: { configurable: true },fillGradientStops: { configurable: true },fontFamily: { configurable: true },fontSize: { configurable: true },fontStyle: { configurable: true },fontVariant: { configurable: true },fontWeight: { configurable: true },letterSpacing: { configurable: true },lineHeight: { configurable: true },leading: { configurable: true },lineJoin: { configurable: true },miterLimit: { configurable: true },padding: { configurable: true },stroke: { configurable: true },strokeThickness: { configurable: true },textBaseline: { configurable: true },trim: { configurable: true },whiteSpace: { configurable: true },wordWrap: { configurable: true },wordWrapWidth: { configurable: true } };
	TextStyle.prototype.clone = function clone ()
	{
	    var clonedProperties = {};
	    deepCopyProperties(clonedProperties, this, defaultStyle);
	    return new TextStyle(clonedProperties);
	};
	TextStyle.prototype.reset = function reset ()
	{
	    deepCopyProperties(this, defaultStyle, defaultStyle);
	};
	prototypeAccessors.align.get = function ()
	{
	    return this._align;
	};
	prototypeAccessors.align.set = function (align)
	{
	    if (this._align !== align)
	    {
	        this._align = align;
	        this.styleID++;
	    }
	};
	prototypeAccessors.breakWords.get = function ()
	{
	    return this._breakWords;
	};
	prototypeAccessors.breakWords.set = function (breakWords)
	{
	    if (this._breakWords !== breakWords)
	    {
	        this._breakWords = breakWords;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadow.get = function ()
	{
	    return this._dropShadow;
	};
	prototypeAccessors.dropShadow.set = function (dropShadow)
	{
	    if (this._dropShadow !== dropShadow)
	    {
	        this._dropShadow = dropShadow;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadowAlpha.get = function ()
	{
	    return this._dropShadowAlpha;
	};
	prototypeAccessors.dropShadowAlpha.set = function (dropShadowAlpha)
	{
	    if (this._dropShadowAlpha !== dropShadowAlpha)
	    {
	        this._dropShadowAlpha = dropShadowAlpha;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadowAngle.get = function ()
	{
	    return this._dropShadowAngle;
	};
	prototypeAccessors.dropShadowAngle.set = function (dropShadowAngle)
	{
	    if (this._dropShadowAngle !== dropShadowAngle)
	    {
	        this._dropShadowAngle = dropShadowAngle;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadowBlur.get = function ()
	{
	    return this._dropShadowBlur;
	};
	prototypeAccessors.dropShadowBlur.set = function (dropShadowBlur)
	{
	    if (this._dropShadowBlur !== dropShadowBlur)
	    {
	        this._dropShadowBlur = dropShadowBlur;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadowColor.get = function ()
	{
	    return this._dropShadowColor;
	};
	prototypeAccessors.dropShadowColor.set = function (dropShadowColor)
	{
	    var outputColor = getColor(dropShadowColor);
	    if (this._dropShadowColor !== outputColor)
	    {
	        this._dropShadowColor = outputColor;
	        this.styleID++;
	    }
	};
	prototypeAccessors.dropShadowDistance.get = function ()
	{
	    return this._dropShadowDistance;
	};
	prototypeAccessors.dropShadowDistance.set = function (dropShadowDistance)
	{
	    if (this._dropShadowDistance !== dropShadowDistance)
	    {
	        this._dropShadowDistance = dropShadowDistance;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fill.get = function ()
	{
	    return this._fill;
	};
	prototypeAccessors.fill.set = function (fill)
	{
	    var outputColor = getColor(fill);
	    if (this._fill !== outputColor)
	    {
	        this._fill = outputColor;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fillGradientType.get = function ()
	{
	    return this._fillGradientType;
	};
	prototypeAccessors.fillGradientType.set = function (fillGradientType)
	{
	    if (this._fillGradientType !== fillGradientType)
	    {
	        this._fillGradientType = fillGradientType;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fillGradientStops.get = function ()
	{
	    return this._fillGradientStops;
	};
	prototypeAccessors.fillGradientStops.set = function (fillGradientStops)
	{
	    if (!areArraysEqual(this._fillGradientStops,fillGradientStops))
	    {
	        this._fillGradientStops = fillGradientStops;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fontFamily.get = function ()
	{
	    return this._fontFamily;
	};
	prototypeAccessors.fontFamily.set = function (fontFamily)
	{
	    if (this.fontFamily !== fontFamily)
	    {
	        this._fontFamily = fontFamily;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fontSize.get = function ()
	{
	    return this._fontSize;
	};
	prototypeAccessors.fontSize.set = function (fontSize)
	{
	    if (this._fontSize !== fontSize)
	    {
	        this._fontSize = fontSize;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fontStyle.get = function ()
	{
	    return this._fontStyle;
	};
	prototypeAccessors.fontStyle.set = function (fontStyle)
	{
	    if (this._fontStyle !== fontStyle)
	    {
	        this._fontStyle = fontStyle;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fontVariant.get = function ()
	{
	    return this._fontVariant;
	};
	prototypeAccessors.fontVariant.set = function (fontVariant)
	{
	    if (this._fontVariant !== fontVariant)
	    {
	        this._fontVariant = fontVariant;
	        this.styleID++;
	    }
	};
	prototypeAccessors.fontWeight.get = function ()
	{
	    return this._fontWeight;
	};
	prototypeAccessors.fontWeight.set = function (fontWeight)
	{
	    if (this._fontWeight !== fontWeight)
	    {
	        this._fontWeight = fontWeight;
	        this.styleID++;
	    }
	};
	prototypeAccessors.letterSpacing.get = function ()
	{
	    return this._letterSpacing;
	};
	prototypeAccessors.letterSpacing.set = function (letterSpacing)
	{
	    if (this._letterSpacing !== letterSpacing)
	    {
	        this._letterSpacing = letterSpacing;
	        this.styleID++;
	    }
	};
	prototypeAccessors.lineHeight.get = function ()
	{
	    return this._lineHeight;
	};
	prototypeAccessors.lineHeight.set = function (lineHeight)
	{
	    if (this._lineHeight !== lineHeight)
	    {
	        this._lineHeight = lineHeight;
	        this.styleID++;
	    }
	};
	prototypeAccessors.leading.get = function ()
	{
	    return this._leading;
	};
	prototypeAccessors.leading.set = function (leading)
	{
	    if (this._leading !== leading)
	    {
	        this._leading = leading;
	        this.styleID++;
	    }
	};
	prototypeAccessors.lineJoin.get = function ()
	{
	    return this._lineJoin;
	};
	prototypeAccessors.lineJoin.set = function (lineJoin)
	{
	    if (this._lineJoin !== lineJoin)
	    {
	        this._lineJoin = lineJoin;
	        this.styleID++;
	    }
	};
	prototypeAccessors.miterLimit.get = function ()
	{
	    return this._miterLimit;
	};
	prototypeAccessors.miterLimit.set = function (miterLimit)
	{
	    if (this._miterLimit !== miterLimit)
	    {
	        this._miterLimit = miterLimit;
	        this.styleID++;
	    }
	};
	prototypeAccessors.padding.get = function ()
	{
	    return this._padding;
	};
	prototypeAccessors.padding.set = function (padding)
	{
	    if (this._padding !== padding)
	    {
	        this._padding = padding;
	        this.styleID++;
	    }
	};
	prototypeAccessors.stroke.get = function ()
	{
	    return this._stroke;
	};
	prototypeAccessors.stroke.set = function (stroke)
	{
	    var outputColor = getColor(stroke);
	    if (this._stroke !== outputColor)
	    {
	        this._stroke = outputColor;
	        this.styleID++;
	    }
	};
	prototypeAccessors.strokeThickness.get = function ()
	{
	    return this._strokeThickness;
	};
	prototypeAccessors.strokeThickness.set = function (strokeThickness)
	{
	    if (this._strokeThickness !== strokeThickness)
	    {
	        this._strokeThickness = strokeThickness;
	        this.styleID++;
	    }
	};
	prototypeAccessors.textBaseline.get = function ()
	{
	    return this._textBaseline;
	};
	prototypeAccessors.textBaseline.set = function (textBaseline)
	{
	    if (this._textBaseline !== textBaseline)
	    {
	        this._textBaseline = textBaseline;
	        this.styleID++;
	    }
	};
	prototypeAccessors.trim.get = function ()
	{
	    return this._trim;
	};
	prototypeAccessors.trim.set = function (trim)
	{
	    if (this._trim !== trim)
	    {
	        this._trim = trim;
	        this.styleID++;
	    }
	};
	prototypeAccessors.whiteSpace.get = function ()
	{
	    return this._whiteSpace;
	};
	prototypeAccessors.whiteSpace.set = function (whiteSpace)
	{
	    if (this._whiteSpace !== whiteSpace)
	    {
	        this._whiteSpace = whiteSpace;
	        this.styleID++;
	    }
	};
	prototypeAccessors.wordWrap.get = function ()
	{
	    return this._wordWrap;
	};
	prototypeAccessors.wordWrap.set = function (wordWrap)
	{
	    if (this._wordWrap !== wordWrap)
	    {
	        this._wordWrap = wordWrap;
	        this.styleID++;
	    }
	};
	prototypeAccessors.wordWrapWidth.get = function ()
	{
	    return this._wordWrapWidth;
	};
	prototypeAccessors.wordWrapWidth.set = function (wordWrapWidth)
	{
	    if (this._wordWrapWidth !== wordWrapWidth)
	    {
	        this._wordWrapWidth = wordWrapWidth;
	        this.styleID++;
	    }
	};
	TextStyle.prototype.toFontString = function toFontString ()
	{
	    var fontSizeString = (typeof this.fontSize === 'number') ? ((this.fontSize) + "px") : this.fontSize;
	    var fontFamilies = this.fontFamily;
	    if (!Array.isArray(this.fontFamily))
	    {
	        fontFamilies = this.fontFamily.split(',');
	    }
	    for (var i = fontFamilies.length - 1; i >= 0; i--)
	    {
	        var fontFamily = fontFamilies[i].trim();
	        if (!(/([\"\'])[^\'\"]+\1/).test(fontFamily))
	        {
	            fontFamily = "\"" + fontFamily + "\"";
	        }
	        fontFamilies[i] = fontFamily;
	    }
	    return ((this.fontStyle) + " " + (this.fontVariant) + " " + (this.fontWeight) + " " + fontSizeString + " " + (fontFamilies.join(',')));
	};
	Object.defineProperties( TextStyle.prototype, prototypeAccessors );
	function getSingleColor(color)
	{
	    if (typeof color === 'number')
	    {
	        return utils.hex2string(color);
	    }
	    else if ( typeof color === 'string' )
	    {
	        if ( color.indexOf('0x') === 0 )
	        {
	            color = color.replace('0x', '#');
	        }
	    }
	    return color;
	}
	function getColor(color)
	{
	    if (!Array.isArray(color))
	    {
	        return getSingleColor(color);
	    }
	    else
	    {
	        for (var i = 0; i < color.length; ++i)
	        {
	            color[i] = getSingleColor(color[i]);
	        }
	        return color;
	    }
	}
	function areArraysEqual(array1, array2)
	{
	    if (!Array.isArray(array1) || !Array.isArray(array2))
	    {
	        return false;
	    }
	    if (array1.length !== array2.length)
	    {
	        return false;
	    }
	    for (var i = 0; i < array1.length; ++i)
	    {
	        if (array1[i] !== array2[i])
	        {
	            return false;
	        }
	    }
	    return true;
	}
	function deepCopyProperties(target, source, propertyObj) {
	    for (var prop in propertyObj) {
	        if (Array.isArray(source[prop])) {
	            target[prop] = source[prop].slice();
	        } else {
	            target[prop] = source[prop];
	        }
	    }
	}
	var TextMetrics = function TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties)
	{
	    this.text = text;
	    this.style = style;
	    this.width = width;
	    this.height = height;
	    this.lines = lines;
	    this.lineWidths = lineWidths;
	    this.lineHeight = lineHeight;
	    this.maxLineWidth = maxLineWidth;
	    this.fontProperties = fontProperties;
	};
	TextMetrics.measureText = function measureText (text, style, wordWrap, canvas)
	{
	        if ( canvas === void 0 ) canvas = TextMetrics._canvas;
	    wordWrap = wordWrap || style.wordWrap;
	    var font = style.toFontString();
	    var fontProperties = TextMetrics.measureFont(font);
	    var context = canvas.getContext('2d');
	    context.font = font;
	    var outputText = wordWrap ? TextMetrics.wordWrap(text, style, canvas) : text;
	    var lines = outputText.split(/(?:\r\n|\r|\n)/);
	    var lineWidths = new Array(lines.length);
	    var maxLineWidth = 0;
	    for (var i = 0; i < lines.length; i++)
	    {
	        var lineWidth = context.measureText(lines[i]).width + ((lines[i].length - 1) * style.letterSpacing);
	        lineWidths[i] = lineWidth;
	        maxLineWidth = Math.max(maxLineWidth, lineWidth);
	    }
	    var width = maxLineWidth + style.strokeThickness;
	    if (style.dropShadow)
	    {
	        width += style.dropShadowDistance;
	    }
	    var lineHeight = style.lineHeight || fontProperties.fontSize + style.strokeThickness;
	    var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness)
	        + ((lines.length - 1) * (lineHeight + style.leading));
	    if (style.dropShadow)
	    {
	        height += style.dropShadowDistance;
	    }
	    return new TextMetrics(
	        text,
	        style,
	        width,
	        height,
	        lines,
	        lineWidths,
	        lineHeight + style.leading,
	        maxLineWidth,
	        fontProperties
	    );
	};
	TextMetrics.wordWrap = function wordWrap (text, style, canvas)
	{
	        if ( canvas === void 0 ) canvas = TextMetrics._canvas;
	    var context = canvas.getContext('2d');
	    var width = 0;
	    var line = '';
	    var lines = '';
	    var cache = {};
	    var letterSpacing = style.letterSpacing;
	        var whiteSpace = style.whiteSpace;
	    var collapseSpaces = TextMetrics.collapseSpaces(whiteSpace);
	    var collapseNewlines = TextMetrics.collapseNewlines(whiteSpace);
	    var canPrependSpaces = !collapseSpaces;
	    var wordWrapWidth = style.wordWrapWidth + letterSpacing;
	    var tokens = TextMetrics.tokenize(text);
	    for (var i = 0; i < tokens.length; i++)
	    {
	        var token = tokens[i];
	        if (TextMetrics.isNewline(token))
	        {
	            if (!collapseNewlines)
	            {
	                lines += TextMetrics.addLine(line);
	                canPrependSpaces = !collapseSpaces;
	                line = '';
	                width = 0;
	                continue;
	            }
	            token = ' ';
	        }
	        if (collapseSpaces)
	        {
	            var currIsBreakingSpace = TextMetrics.isBreakingSpace(token);
	            var lastIsBreakingSpace = TextMetrics.isBreakingSpace(line[line.length - 1]);
	            if (currIsBreakingSpace && lastIsBreakingSpace)
	            {
	                continue;
	            }
	        }
	        var tokenWidth = TextMetrics.getFromCache(token, letterSpacing, cache, context);
	        if (tokenWidth > wordWrapWidth)
	        {
	            if (line !== '')
	            {
	                lines += TextMetrics.addLine(line);
	                line = '';
	                width = 0;
	            }
	            if (TextMetrics.canBreakWords(token, style.breakWords))
	            {
	                var characters = token.split('');
	                for (var j = 0; j < characters.length; j++)
	                {
	                    var char = characters[j];
	                    var k = 1;
	                    while (characters[j + k])
	                    {
	                        var nextChar = characters[j + k];
	                        var lastChar = char[char.length - 1];
	                        if (!TextMetrics.canBreakChars(lastChar, nextChar, token, j, style.breakWords))
	                        {
	                            char += nextChar;
	                        }
	                        else
	                        {
	                            break;
	                        }
	                        k++;
	                    }
	                    j += char.length - 1;
	                    var characterWidth = TextMetrics.getFromCache(char, letterSpacing, cache, context);
	                    if (characterWidth + width > wordWrapWidth)
	                    {
	                        lines += TextMetrics.addLine(line);
	                        canPrependSpaces = false;
	                        line = '';
	                        width = 0;
	                    }
	                    line += char;
	                    width += characterWidth;
	                }
	            }
	            else
	            {
	                if (line.length > 0)
	                {
	                    lines += TextMetrics.addLine(line);
	                    line = '';
	                    width = 0;
	                }
	                var isLastToken = i === tokens.length - 1;
	                lines += TextMetrics.addLine(token, !isLastToken);
	                canPrependSpaces = false;
	                line = '';
	                width = 0;
	            }
	        }
	        else
	        {
	            if (tokenWidth + width > wordWrapWidth)
	            {
	                canPrependSpaces = false;
	                lines += TextMetrics.addLine(line);
	                line = '';
	                width = 0;
	            }
	            if (line.length > 0 || !TextMetrics.isBreakingSpace(token) || canPrependSpaces)
	            {
	                line += token;
	                width += tokenWidth;
	            }
	        }
	    }
	    lines += TextMetrics.addLine(line, false);
	    return lines;
	};
	TextMetrics.addLine = function addLine (line, newLine)
	{
	        if ( newLine === void 0 ) newLine = true;
	    line = TextMetrics.trimRight(line);
	    line = (newLine) ? (line + "\n") : line;
	    return line;
	};
	TextMetrics.getFromCache = function getFromCache (key, letterSpacing, cache, context)
	{
	    var width = cache[key];
	    if (width === undefined)
	    {
	        var spacing = ((key.length) * letterSpacing);
	        width = context.measureText(key).width + spacing;
	        cache[key] = width;
	    }
	    return width;
	};
	TextMetrics.collapseSpaces = function collapseSpaces (whiteSpace)
	{
	    return (whiteSpace === 'normal' || whiteSpace === 'pre-line');
	};
	TextMetrics.collapseNewlines = function collapseNewlines (whiteSpace)
	{
	    return (whiteSpace === 'normal');
	};
	TextMetrics.trimRight = function trimRight (text)
	{
	    if (typeof text !== 'string')
	    {
	        return '';
	    }
	    for (var i = text.length - 1; i >= 0; i--)
	    {
	        var char = text[i];
	        if (!TextMetrics.isBreakingSpace(char))
	        {
	            break;
	        }
	        text = text.slice(0, -1);
	    }
	    return text;
	};
	TextMetrics.isNewline = function isNewline (char)
	{
	    if (typeof char !== 'string')
	    {
	        return false;
	    }
	    return (TextMetrics._newlines.indexOf(char.charCodeAt(0)) >= 0);
	};
	TextMetrics.isBreakingSpace = function isBreakingSpace (char)
	{
	    if (typeof char !== 'string')
	    {
	        return false;
	    }
	    return (TextMetrics._breakingSpaces.indexOf(char.charCodeAt(0)) >= 0);
	};
	TextMetrics.tokenize = function tokenize (text)
	{
	    var tokens = [];
	    var token = '';
	    if (typeof text !== 'string')
	    {
	        return tokens;
	    }
	    for (var i = 0; i < text.length; i++)
	    {
	        var char = text[i];
	        if (TextMetrics.isBreakingSpace(char) || TextMetrics.isNewline(char))
	        {
	            if (token !== '')
	            {
	                tokens.push(token);
	                token = '';
	            }
	            tokens.push(char);
	            continue;
	        }
	        token += char;
	    }
	    if (token !== '')
	    {
	        tokens.push(token);
	    }
	    return tokens;
	};
	TextMetrics.canBreakWords = function canBreakWords (token, breakWords)
	{
	    return breakWords;
	};
	TextMetrics.canBreakChars = function canBreakChars (char, nextChar, token, index, breakWords)
	{
	    return true;
	};
	TextMetrics.measureFont = function measureFont (font)
	{
	    if (TextMetrics._fonts[font])
	    {
	        return TextMetrics._fonts[font];
	    }
	    var properties = {};
	    var canvas = TextMetrics._canvas;
	    var context = TextMetrics._context;
	    context.font = font;
	    var metricsString = TextMetrics.METRICS_STRING + TextMetrics.BASELINE_SYMBOL;
	    var width = Math.ceil(context.measureText(metricsString).width);
	    var baseline = Math.ceil(context.measureText(TextMetrics.BASELINE_SYMBOL).width);
	    var height = 2 * baseline;
	    baseline = baseline * TextMetrics.BASELINE_MULTIPLIER | 0;
	    canvas.width = width;
	    canvas.height = height;
	    context.fillStyle = '#f00';
	    context.fillRect(0, 0, width, height);
	    context.font = font;
	    context.textBaseline = 'alphabetic';
	    context.fillStyle = '#000';
	    context.fillText(metricsString, 0, baseline);
	    var imagedata = context.getImageData(0, 0, width, height).data;
	    var pixels = imagedata.length;
	    var line = width * 4;
	    var i = 0;
	    var idx = 0;
	    var stop = false;
	    for (i = 0; i < baseline; ++i)
	    {
	        for (var j = 0; j < line; j += 4)
	        {
	            if (imagedata[idx + j] !== 255)
	            {
	                stop = true;
	                break;
	            }
	        }
	        if (!stop)
	        {
	            idx += line;
	        }
	        else
	        {
	            break;
	        }
	    }
	    properties.ascent = baseline - i;
	    idx = pixels - line;
	    stop = false;
	    for (i = height; i > baseline; --i)
	    {
	        for (var j$1 = 0; j$1 < line; j$1 += 4)
	        {
	            if (imagedata[idx + j$1] !== 255)
	            {
	                stop = true;
	                break;
	            }
	        }
	        if (!stop)
	        {
	            idx -= line;
	        }
	        else
	        {
	            break;
	        }
	    }
	    properties.descent = i - baseline;
	    properties.fontSize = properties.ascent + properties.descent;
	    TextMetrics._fonts[font] = properties;
	    return properties;
	};
	TextMetrics.clearMetrics = function clearMetrics (font)
	{
	        if ( font === void 0 ) font = '';
	    if (font)
	    {
	        delete TextMetrics._fonts[font];
	    }
	    else
	    {
	        TextMetrics._fonts = {};
	    }
	};
	var canvas = document.createElement('canvas');
	canvas.width = canvas.height = 10;
	TextMetrics._canvas = canvas;
	TextMetrics._context = canvas.getContext('2d');
	TextMetrics._fonts = {};
	TextMetrics.METRICS_STRING = '|Éq';
	TextMetrics.BASELINE_SYMBOL = 'M';
	TextMetrics.BASELINE_MULTIPLIER = 1.4;
	TextMetrics._newlines = [
	    0x000A,
	    0x000D ];
	TextMetrics._breakingSpaces = [
	    0x0009,
	    0x0020,
	    0x2000,
	    0x2001,
	    0x2002,
	    0x2003,
	    0x2004,
	    0x2005,
	    0x2006,
	    0x2008,
	    0x2009,
	    0x200A,
	    0x205F,
	    0x3000 ];
	var defaultDestroyOptions = {
	    texture: true,
	    children: false,
	    baseTexture: true,
	};
	var Text = (function (Sprite$$1) {
	    function Text(text, style, canvas)
	    {
	        canvas = canvas || document.createElement('canvas');
	        canvas.width = 3;
	        canvas.height = 3;
	        var texture = core.Texture.from(canvas, settings_1.settings.SCALE_MODE, 'text');
	        texture.orig = new math.Rectangle();
	        texture.trim = new math.Rectangle();
	        Sprite$$1.call(this, texture);
	        core.Texture.addToCache(this._texture, this._texture.baseTexture.textureCacheIds[0]);
	        this.canvas = canvas;
	        this.context = this.canvas.getContext('2d');
	        this.resolution = settings_1.settings.RESOLUTION;
	        this._text = null;
	        this._style = null;
	        this._styleListener = null;
	        this._font = '';
	        this.text = text;
	        this.style = style;
	        this.localStyleID = -1;
	    }
	    if ( Sprite$$1 ) Text.__proto__ = Sprite$$1;
	    Text.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
	    Text.prototype.constructor = Text;
	    var prototypeAccessors = { width: { configurable: true },height: { configurable: true },style: { configurable: true },text: { configurable: true } };
	    Text.prototype.updateText = function updateText (respectDirty)
	    {
	        var this$1 = this;
	        var style = this._style;
	        if (this.localStyleID !== style.styleID)
	        {
	            this.dirty = true;
	            this.localStyleID = style.styleID;
	        }
	        if (!this.dirty && respectDirty)
	        {
	            return;
	        }
	        this._font = this._style.toFontString();
	        var context = this.context;
	        var measured = TextMetrics.measureText(this._text, this._style, this._style.wordWrap, this.canvas);
	        var width = measured.width;
	        var height = measured.height;
	        var lines = measured.lines;
	        var lineHeight = measured.lineHeight;
	        var lineWidths = measured.lineWidths;
	        var maxLineWidth = measured.maxLineWidth;
	        var fontProperties = measured.fontProperties;
	        this.canvas.width = Math.ceil((Math.max(1, width) + (style.padding * 2)) * this.resolution);
	        this.canvas.height = Math.ceil((Math.max(1, height) + (style.padding * 2)) * this.resolution);
	        context.scale(this.resolution, this.resolution);
	        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	        context.font = this._font;
	        context.strokeStyle = style.stroke;
	        context.lineWidth = style.strokeThickness;
	        context.textBaseline = style.textBaseline;
	        context.lineJoin = style.lineJoin;
	        context.miterLimit = style.miterLimit;
	        var linePositionX;
	        var linePositionY;
	        if (style.dropShadow)
	        {
	            context.fillStyle = style.dropShadowColor;
	            context.globalAlpha = style.dropShadowAlpha;
	            context.shadowBlur = style.dropShadowBlur;
	            if (style.dropShadowBlur > 0)
	            {
	                context.shadowColor = style.dropShadowColor;
	            }
	            var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
	            var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;
	            for (var i = 0; i < lines.length; i++)
	            {
	                linePositionX = style.strokeThickness / 2;
	                linePositionY = ((style.strokeThickness / 2) + (i * lineHeight)) + fontProperties.ascent;
	                if (style.align === 'right')
	                {
	                    linePositionX += maxLineWidth - lineWidths[i];
	                }
	                else if (style.align === 'center')
	                {
	                    linePositionX += (maxLineWidth - lineWidths[i]) / 2;
	                }
	                if (style.fill)
	                {
	                    this$1.drawLetterSpacing(
	                        lines[i],
	                        linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding
	                    );
	                    if (style.stroke && style.strokeThickness)
	                    {
	                        context.strokeStyle = style.dropShadowColor;
	                        this$1.drawLetterSpacing(
	                            lines[i],
	                            linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding,
	                            true
	                        );
	                        context.strokeStyle = style.stroke;
	                    }
	                }
	            }
	        }
	        context.shadowBlur = 0;
	        context.globalAlpha = 1;
	        context.fillStyle = this._generateFillStyle(style, lines);
	        for (var i$1 = 0; i$1 < lines.length; i$1++)
	        {
	            linePositionX = style.strokeThickness / 2;
	            linePositionY = ((style.strokeThickness / 2) + (i$1 * lineHeight)) + fontProperties.ascent;
	            if (style.align === 'right')
	            {
	                linePositionX += maxLineWidth - lineWidths[i$1];
	            }
	            else if (style.align === 'center')
	            {
	                linePositionX += (maxLineWidth - lineWidths[i$1]) / 2;
	            }
	            if (style.stroke && style.strokeThickness)
	            {
	                this$1.drawLetterSpacing(
	                    lines[i$1],
	                    linePositionX + style.padding,
	                    linePositionY + style.padding,
	                    true
	                );
	            }
	            if (style.fill)
	            {
	                this$1.drawLetterSpacing(
	                    lines[i$1],
	                    linePositionX + style.padding,
	                    linePositionY + style.padding
	                );
	            }
	        }
	        this.updateTexture();
	    };
	    Text.prototype.drawLetterSpacing = function drawLetterSpacing (text, x, y, isStroke)
	    {
	        var this$1 = this;
	        if ( isStroke === void 0 ) isStroke = false;
	        var style = this._style;
	        var letterSpacing = style.letterSpacing;
	        if (letterSpacing === 0)
	        {
	            if (isStroke)
	            {
	                this.context.strokeText(text, x, y);
	            }
	            else
	            {
	                this.context.fillText(text, x, y);
	            }
	            return;
	        }
	        var characters = String.prototype.split.call(text, '');
	        var currentPosition = x;
	        var index = 0;
	        var current = '';
	        while (index < text.length)
	        {
	            current = characters[index++];
	            if (isStroke)
	            {
	                this$1.context.strokeText(current, currentPosition, y);
	            }
	            else
	            {
	                this$1.context.fillText(current, currentPosition, y);
	            }
	            currentPosition += this$1.context.measureText(current).width + letterSpacing;
	        }
	    };
	    Text.prototype.updateTexture = function updateTexture ()
	    {
	        var canvas = this.canvas;
	        if (this._style.trim)
	        {
	            var trimmed = utils.trimCanvas(canvas);
	            canvas.width = trimmed.width;
	            canvas.height = trimmed.height;
	            this.context.putImageData(trimmed.data, 0, 0);
	        }
	        var texture = this._texture;
	        var style = this._style;
	        var padding = style.trim ? 0 : style.padding;
	        var baseTexture = texture.baseTexture;
	        texture.trim.width = texture._frame.width = canvas.width / this.resolution;
	        texture.trim.height = texture._frame.height = canvas.height / this.resolution;
	        texture.trim.x = -padding;
	        texture.trim.y = -padding;
	        texture.orig.width = texture._frame.width - (padding * 2);
	        texture.orig.height = texture._frame.height - (padding * 2);
	        this._onTextureUpdate();
	        baseTexture.setRealSize(canvas.width, canvas.height, this.resolution);
	        this.dirty = false;
	    };
	    Text.prototype.render = function render (renderer)
	    {
	        if (this.resolution !== renderer.resolution)
	        {
	            this.resolution = renderer.resolution;
	            this.dirty = true;
	        }
	        this.updateText(true);
	        Sprite$$1.prototype.render.call(this, renderer);
	    };
	    Text.prototype._renderCanvas = function _renderCanvas (renderer)
	    {
	        if (this.resolution !== renderer.resolution)
	        {
	            this.resolution = renderer.resolution;
	            this.dirty = true;
	        }
	        this.updateText(true);
	        Sprite$$1.prototype._renderCanvas.call(this, renderer);
	    };
	    Text.prototype.getLocalBounds = function getLocalBounds (rect)
	    {
	        this.updateText(true);
	        return Sprite$$1.prototype.getLocalBounds.call(this, rect);
	    };
	    Text.prototype._calculateBounds = function _calculateBounds ()
	    {
	        this.updateText(true);
	        this.calculateVertices();
	        this._bounds.addQuad(this.vertexData);
	    };
	    Text.prototype._onStyleChange = function _onStyleChange ()
	    {
	        this.dirty = true;
	    };
	    Text.prototype._generateFillStyle = function _generateFillStyle (style, lines)
	    {
	        if (!Array.isArray(style.fill))
	        {
	            return style.fill;
	        }
	        if (navigator.isCocoonJS)
	        {
	            return style.fill[0];
	        }
	        var gradient;
	        var totalIterations;
	        var currentIteration;
	        var stop;
	        var width = this.canvas.width / this.resolution;
	        var height = this.canvas.height / this.resolution;
	        var fill = style.fill.slice();
	        var fillGradientStops = style.fillGradientStops.slice();
	        if (!fillGradientStops.length)
	        {
	            var lengthPlus1 = fill.length + 1;
	            for (var i = 1; i < lengthPlus1; ++i)
	            {
	                fillGradientStops.push(i / lengthPlus1);
	            }
	        }
	        fill.unshift(style.fill[0]);
	        fillGradientStops.unshift(0);
	        fill.push(style.fill[style.fill.length - 1]);
	        fillGradientStops.push(1);
	        if (style.fillGradientType === TEXT_GRADIENT.LINEAR_VERTICAL)
	        {
	            gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);
	            totalIterations = (fill.length + 1) * lines.length;
	            currentIteration = 0;
	            for (var i$1 = 0; i$1 < lines.length; i$1++)
	            {
	                currentIteration += 1;
	                for (var j = 0; j < fill.length; j++)
	                {
	                    if (typeof fillGradientStops[j] === 'number')
	                    {
	                        stop = (fillGradientStops[j] / lines.length) + (i$1 / lines.length);
	                    }
	                    else
	                    {
	                        stop = currentIteration / totalIterations;
	                    }
	                    gradient.addColorStop(stop, fill[j]);
	                    currentIteration++;
	                }
	            }
	        }
	        else
	        {
	            gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);
	            totalIterations = fill.length + 1;
	            currentIteration = 1;
	            for (var i$2 = 0; i$2 < fill.length; i$2++)
	            {
	                if (typeof fillGradientStops[i$2] === 'number')
	                {
	                    stop = fillGradientStops[i$2];
	                }
	                else
	                {
	                    stop = currentIteration / totalIterations;
	                }
	                gradient.addColorStop(stop, fill[i$2]);
	                currentIteration++;
	            }
	        }
	        return gradient;
	    };
	    Text.prototype.destroy = function destroy (options)
	    {
	        if (typeof options === 'boolean')
	        {
	            options = { children: options };
	        }
	        options = Object.assign({}, defaultDestroyOptions, options);
	        Sprite$$1.prototype.destroy.call(this, options);
	        this.context = null;
	        this.canvas = null;
	        this._style = null;
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        this.updateText(true);
	        return Math.abs(this.scale.x) * this._texture.orig.width;
	    };
	    prototypeAccessors.width.set = function (value)
	    {
	        this.updateText(true);
	        var s = utils.sign(this.scale.x) || 1;
	        this.scale.x = s * value / this._texture.orig.width;
	        this._width = value;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        this.updateText(true);
	        return Math.abs(this.scale.y) * this._texture.orig.height;
	    };
	    prototypeAccessors.height.set = function (value)
	    {
	        this.updateText(true);
	        var s = utils.sign(this.scale.y) || 1;
	        this.scale.y = s * value / this._texture.orig.height;
	        this._height = value;
	    };
	    prototypeAccessors.style.get = function ()
	    {
	        return this._style;
	    };
	    prototypeAccessors.style.set = function (style)
	    {
	        style = style || {};
	        if (style instanceof TextStyle)
	        {
	            this._style = style;
	        }
	        else
	        {
	            this._style = new TextStyle(style);
	        }
	        this.localStyleID = -1;
	        this.dirty = true;
	    };
	    prototypeAccessors.text.get = function ()
	    {
	        return this._text;
	    };
	    prototypeAccessors.text.set = function (text)
	    {
	        text = String(text === '' || text === null || text === undefined ? ' ' : text);
	        if (this._text === text)
	        {
	            return;
	        }
	        this._text = text;
	        this.dirty = true;
	    };
	    Object.defineProperties( Text.prototype, prototypeAccessors );
	    return Text;
	}(sprite.Sprite));
	exports.Text = Text;
	exports.TextStyle = TextStyle;
	exports.TextMetrics = TextMetrics;
	exports.TEXT_GRADIENT = TEXT_GRADIENT;
	});
	var text$1 = unwrapExports(text);
	var text_1 = text.Text;
	var text_2 = text.TextStyle;
	var text_3 = text.TextMetrics;
	var text_4 = text.TEXT_GRADIENT;

	var text$2 = ({
		default: text$1,
		__moduleExports: text,
		Text: text_1,
		TextStyle: text_2,
		TextMetrics: text_3,
		TEXT_GRADIENT: text_4
	});

	var prepare = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var CountLimiter = function CountLimiter(maxItemsPerFrame)
	{
	    this.maxItemsPerFrame = maxItemsPerFrame;
	    this.itemsLeft = 0;
	};
	CountLimiter.prototype.beginFrame = function beginFrame ()
	{
	    this.itemsLeft = this.maxItemsPerFrame;
	};
	CountLimiter.prototype.allowedToUpload = function allowedToUpload ()
	{
	    return this.itemsLeft-- > 0;
	};
	settings_1.settings.UPLOADS_PER_FRAME = 4;
	var BasePrepare = function BasePrepare(renderer)
	{
	    var this$1 = this;
	    this.limiter = new CountLimiter(settings_1.settings.UPLOADS_PER_FRAME);
	    this.renderer = renderer;
	    this.uploadHookHelper = null;
	    this.queue = [];
	    this.addHooks = [];
	    this.uploadHooks = [];
	    this.completes = [];
	    this.ticking = false;
	    this.delayedTick = function () {
	        if (!this$1.queue)
	        {
	            return;
	        }
	        this$1.prepareItems();
	    };
	    this.registerFindHook(findText);
	    this.registerFindHook(findTextStyle);
	    this.registerFindHook(findMultipleBaseTextures);
	    this.registerFindHook(findBaseTexture);
	    this.registerFindHook(findTexture);
	    this.registerUploadHook(drawText);
	    this.registerUploadHook(calculateTextStyle);
	};
	BasePrepare.prototype.upload = function upload (item, done)
	{
	    if (typeof item === 'function')
	    {
	        done = item;
	        item = null;
	    }
	    if (item)
	    {
	        this.add(item);
	    }
	    if (this.queue.length)
	    {
	        if (done)
	        {
	            this.completes.push(done);
	        }
	        if (!this.ticking)
	        {
	            this.ticking = true;
	            ticker.Ticker.shared.addOnce(this.tick, this, ticker.UPDATE_PRIORITY.UTILITY);
	        }
	    }
	    else if (done)
	    {
	        done();
	    }
	};
	BasePrepare.prototype.tick = function tick ()
	{
	    setTimeout(this.delayedTick, 0);
	};
	BasePrepare.prototype.prepareItems = function prepareItems ()
	{
	        var this$1 = this;
	    this.limiter.beginFrame();
	    while (this.queue.length && this.limiter.allowedToUpload())
	    {
	        var item = this$1.queue[0];
	        var uploaded = false;
	        if (item && !item._destroyed)
	        {
	            for (var i = 0, len = this.uploadHooks.length; i < len; i++)
	            {
	                if (this$1.uploadHooks[i](this$1.uploadHookHelper, item))
	                {
	                    this$1.queue.shift();
	                    uploaded = true;
	                    break;
	                }
	            }
	        }
	        if (!uploaded)
	        {
	            this$1.queue.shift();
	        }
	    }
	    if (!this.queue.length)
	    {
	        this.ticking = false;
	        var completes = this.completes.slice(0);
	        this.completes.length = 0;
	        for (var i$1 = 0, len$1 = completes.length; i$1 < len$1; i$1++)
	        {
	            completes[i$1]();
	        }
	    }
	    else
	    {
	        ticker.Ticker.shared.addOnce(this.tick, this, ticker.UPDATE_PRIORITY.UTILITY);
	    }
	};
	BasePrepare.prototype.registerFindHook = function registerFindHook (addHook)
	{
	    if (addHook)
	    {
	        this.addHooks.push(addHook);
	    }
	    return this;
	};
	BasePrepare.prototype.registerUploadHook = function registerUploadHook (uploadHook)
	{
	    if (uploadHook)
	    {
	        this.uploadHooks.push(uploadHook);
	    }
	    return this;
	};
	BasePrepare.prototype.add = function add (item)
	{
	        var this$1 = this;
	    for (var i = 0, len = this.addHooks.length; i < len; i++)
	    {
	        if (this$1.addHooks[i](item, this$1.queue))
	        {
	            break;
	        }
	    }
	    if (item instanceof display.Container)
	    {
	        for (var i$1 = item.children.length - 1; i$1 >= 0; i$1--)
	        {
	            this$1.add(item.children[i$1]);
	        }
	    }
	    return this;
	};
	BasePrepare.prototype.destroy = function destroy ()
	{
	    if (this.ticking)
	    {
	        ticker.Ticker.shared.remove(this.tick, this);
	    }
	    this.ticking = false;
	    this.addHooks = null;
	    this.uploadHooks = null;
	    this.renderer = null;
	    this.completes = null;
	    this.queue = null;
	    this.limiter = null;
	    this.uploadHookHelper = null;
	};
	function findMultipleBaseTextures(item, queue)
	{
	    var result = false;
	    if (item && item._textures && item._textures.length)
	    {
	        for (var i = 0; i < item._textures.length; i++)
	        {
	            if (item._textures[i] instanceof core.Texture)
	            {
	                var baseTexture = item._textures[i].baseTexture;
	                if (queue.indexOf(baseTexture) === -1)
	                {
	                    queue.push(baseTexture);
	                    result = true;
	                }
	            }
	        }
	    }
	    return result;
	}
	function findBaseTexture(item, queue)
	{
	    if (item instanceof core.BaseTexture)
	    {
	        if (queue.indexOf(item) === -1)
	        {
	            queue.push(item);
	        }
	        return true;
	    }
	    return false;
	}
	function findTexture(item, queue)
	{
	    if (item._texture && item._texture instanceof core.Texture)
	    {
	        var texture = item._texture.baseTexture;
	        if (queue.indexOf(texture) === -1)
	        {
	            queue.push(texture);
	        }
	        return true;
	    }
	    return false;
	}
	function drawText(helper, item)
	{
	    if (item instanceof text.Text)
	    {
	        item.updateText(true);
	        return true;
	    }
	    return false;
	}
	function calculateTextStyle(helper, item)
	{
	    if (item instanceof text.TextStyle)
	    {
	        var font = item.toFontString();
	        text.TextMetrics.measureFont(font);
	        return true;
	    }
	    return false;
	}
	function findText(item, queue)
	{
	    if (item instanceof text.Text)
	    {
	        if (queue.indexOf(item.style) === -1)
	        {
	            queue.push(item.style);
	        }
	        if (queue.indexOf(item) === -1)
	        {
	            queue.push(item);
	        }
	        var texture = item._texture.baseTexture;
	        if (queue.indexOf(texture) === -1)
	        {
	            queue.push(texture);
	        }
	        return true;
	    }
	    return false;
	}
	function findTextStyle(item, queue)
	{
	    if (item instanceof text.TextStyle)
	    {
	        if (queue.indexOf(item) === -1)
	        {
	            queue.push(item);
	        }
	        return true;
	    }
	    return false;
	}
	var Prepare = (function (BasePrepare$$1) {
	    function Prepare(renderer)
	    {
	        BasePrepare$$1.call(this, renderer);
	        this.uploadHookHelper = this.renderer;
	        this.registerFindHook(findGraphics);
	        this.registerUploadHook(uploadBaseTextures);
	        this.registerUploadHook(uploadGraphics);
	    }
	    if ( BasePrepare$$1 ) Prepare.__proto__ = BasePrepare$$1;
	    Prepare.prototype = Object.create( BasePrepare$$1 && BasePrepare$$1.prototype );
	    Prepare.prototype.constructor = Prepare;
	    return Prepare;
	}(BasePrepare));
	function uploadBaseTextures(renderer, item)
	{
	    if (item instanceof core.BaseTexture)
	    {
	        if (!item._glTextures[renderer.CONTEXT_UID])
	        {
	            renderer.textureManager.updateTexture(item);
	        }
	        return true;
	    }
	    return false;
	}
	function uploadGraphics(renderer, item)
	{
	    if (item instanceof graphics.Graphics)
	    {
	        if (item.dirty || item.clearDirty || !item._webGL[renderer.plugins.graphics.CONTEXT_UID])
	        {
	            renderer.plugins.graphics.updateGraphics(item);
	        }
	        return true;
	    }
	    return false;
	}
	function findGraphics(item, queue)
	{
	    if (item instanceof graphics.Graphics)
	    {
	        queue.push(item);
	        return true;
	    }
	    return false;
	}
	var TimeLimiter = function TimeLimiter(maxMilliseconds)
	{
	    this.maxMilliseconds = maxMilliseconds;
	    this.frameStart = 0;
	};
	TimeLimiter.prototype.beginFrame = function beginFrame ()
	{
	    this.frameStart = Date.now();
	};
	TimeLimiter.prototype.allowedToUpload = function allowedToUpload ()
	{
	    return Date.now() - this.frameStart < this.maxMilliseconds;
	};
	exports.Prepare = Prepare;
	exports.BasePrepare = BasePrepare;
	exports.CountLimiter = CountLimiter;
	exports.TimeLimiter = TimeLimiter;
	});
	var prepare$1 = unwrapExports(prepare);
	var prepare_1 = prepare.Prepare;
	var prepare_2 = prepare.BasePrepare;
	var prepare_3 = prepare.CountLimiter;
	var prepare_4 = prepare.TimeLimiter;

	var prepare$2 = ({
		default: prepare$1,
		__moduleExports: prepare,
		Prepare: prepare_1,
		BasePrepare: prepare_2,
		CountLimiter: prepare_3,
		TimeLimiter: prepare_4
	});

	var spriteAnimated = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var AnimatedSprite = (function (Sprite$$1) {
	    function AnimatedSprite(textures, autoUpdate)
	    {
	        Sprite$$1.call(this, textures[0] instanceof core.Texture ? textures[0] : textures[0].texture);
	        this._textures = null;
	        this._durations = null;
	        this.textures = textures;
	        this._autoUpdate = autoUpdate !== false;
	        this.animationSpeed = 1;
	        this.loop = true;
	        this.onComplete = null;
	        this.onFrameChange = null;
	        this.onLoop = null;
	        this._currentTime = 0;
	        this.playing = false;
	    }
	    if ( Sprite$$1 ) AnimatedSprite.__proto__ = Sprite$$1;
	    AnimatedSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
	    AnimatedSprite.prototype.constructor = AnimatedSprite;
	    var prototypeAccessors = { totalFrames: { configurable: true },textures: { configurable: true },currentFrame: { configurable: true } };
	    AnimatedSprite.prototype.stop = function stop ()
	    {
	        if (!this.playing)
	        {
	            return;
	        }
	        this.playing = false;
	        if (this._autoUpdate)
	        {
	            ticker.Ticker.shared.remove(this.update, this);
	        }
	    };
	    AnimatedSprite.prototype.play = function play ()
	    {
	        if (this.playing)
	        {
	            return;
	        }
	        this.playing = true;
	        if (this._autoUpdate)
	        {
	            ticker.Ticker.shared.add(this.update, this, ticker.UPDATE_PRIORITY.HIGH);
	        }
	    };
	    AnimatedSprite.prototype.gotoAndStop = function gotoAndStop (frameNumber)
	    {
	        this.stop();
	        var previousFrame = this.currentFrame;
	        this._currentTime = frameNumber;
	        if (previousFrame !== this.currentFrame)
	        {
	            this.updateTexture();
	        }
	    };
	    AnimatedSprite.prototype.gotoAndPlay = function gotoAndPlay (frameNumber)
	    {
	        var previousFrame = this.currentFrame;
	        this._currentTime = frameNumber;
	        if (previousFrame !== this.currentFrame)
	        {
	            this.updateTexture();
	        }
	        this.play();
	    };
	    AnimatedSprite.prototype.update = function update (deltaTime)
	    {
	        var this$1 = this;
	        var elapsed = this.animationSpeed * deltaTime;
	        var previousFrame = this.currentFrame;
	        if (this._durations !== null)
	        {
	            var lag = this._currentTime % 1 * this._durations[this.currentFrame];
	            lag += elapsed / 60 * 1000;
	            while (lag < 0)
	            {
	                this$1._currentTime--;
	                lag += this$1._durations[this$1.currentFrame];
	            }
	            var sign = Math.sign(this.animationSpeed * deltaTime);
	            this._currentTime = Math.floor(this._currentTime);
	            while (lag >= this._durations[this.currentFrame])
	            {
	                lag -= this$1._durations[this$1.currentFrame] * sign;
	                this$1._currentTime += sign;
	            }
	            this._currentTime += lag / this._durations[this.currentFrame];
	        }
	        else
	        {
	            this._currentTime += elapsed;
	        }
	        if (this._currentTime < 0 && !this.loop)
	        {
	            this.gotoAndStop(0);
	            if (this.onComplete)
	            {
	                this.onComplete();
	            }
	        }
	        else if (this._currentTime >= this._textures.length && !this.loop)
	        {
	            this.gotoAndStop(this._textures.length - 1);
	            if (this.onComplete)
	            {
	                this.onComplete();
	            }
	        }
	        else if (previousFrame !== this.currentFrame)
	        {
	            if (this.loop && this.onLoop)
	            {
	                if (this.animationSpeed > 0 && this.currentFrame < previousFrame)
	                {
	                    this.onLoop();
	                }
	                else if (this.animationSpeed < 0 && this.currentFrame > previousFrame)
	                {
	                    this.onLoop();
	                }
	            }
	            this.updateTexture();
	        }
	    };
	    AnimatedSprite.prototype.updateTexture = function updateTexture ()
	    {
	        this._texture = this._textures[this.currentFrame];
	        this._textureID = -1;
	        this.cachedTint = 0xFFFFFF;
	        if (this.onFrameChange)
	        {
	            this.onFrameChange(this.currentFrame);
	        }
	    };
	    AnimatedSprite.prototype.destroy = function destroy (options)
	    {
	        this.stop();
	        Sprite$$1.prototype.destroy.call(this, options);
	    };
	    AnimatedSprite.fromFrames = function fromFrames (frames)
	    {
	        var textures = [];
	        for (var i = 0; i < frames.length; ++i)
	        {
	            textures.push(core.Texture.from(frames[i]));
	        }
	        return new AnimatedSprite(textures);
	    };
	    AnimatedSprite.fromImages = function fromImages (images)
	    {
	        var textures = [];
	        for (var i = 0; i < images.length; ++i)
	        {
	            textures.push(core.Texture.from(images[i]));
	        }
	        return new AnimatedSprite(textures);
	    };
	    prototypeAccessors.totalFrames.get = function ()
	    {
	        return this._textures.length;
	    };
	    prototypeAccessors.textures.get = function ()
	    {
	        return this._textures;
	    };
	    prototypeAccessors.textures.set = function (value)
	    {
	        var this$1 = this;
	        if (value[0] instanceof core.Texture)
	        {
	            this._textures = value;
	            this._durations = null;
	        }
	        else
	        {
	            this._textures = [];
	            this._durations = [];
	            for (var i = 0; i < value.length; i++)
	            {
	                this$1._textures.push(value[i].texture);
	                this$1._durations.push(value[i].time);
	            }
	        }
	        this.gotoAndStop(0);
	        this.updateTexture();
	    };
	    prototypeAccessors.currentFrame.get = function ()
	    {
	        var currentFrame = Math.floor(this._currentTime) % this._textures.length;
	        if (currentFrame < 0)
	        {
	            currentFrame += this._textures.length;
	        }
	        return currentFrame;
	    };
	    Object.defineProperties( AnimatedSprite.prototype, prototypeAccessors );
	    return AnimatedSprite;
	}(sprite.Sprite));
	exports.AnimatedSprite = AnimatedSprite;
	});
	var spriteAnimated$1 = unwrapExports(spriteAnimated);
	var spriteAnimated_1 = spriteAnimated.AnimatedSprite;

	var spriteAnimated$2 = ({
		default: spriteAnimated$1,
		__moduleExports: spriteAnimated,
		AnimatedSprite: spriteAnimated_1
	});

	var spritesheet = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	var url$$1 = _interopDefault(url);
	var Spritesheet = function Spritesheet(baseTexture, data, resolutionFilename)
	{
	    if ( resolutionFilename === void 0 ) resolutionFilename = null;
	    this.baseTexture = baseTexture;
	    this.textures = {};
	    this.data = data;
	    this.resolution = this._updateResolution(
	        resolutionFilename
	        || (this.baseTexture.resource ? this.baseTexture.resource.url : null)
	    );
	    this._frames = this.data.frames;
	    this._frameKeys = Object.keys(this._frames);
	    this._batchIndex = 0;
	    this._callback = null;
	};
	var staticAccessors = { BATCH_SIZE: { configurable: true } };
	staticAccessors.BATCH_SIZE.get = function ()
	{
	    return 1000;
	};
	Spritesheet.prototype._updateResolution = function _updateResolution (resolutionFilename)
	{
	    var scale = this.data.meta.scale;
	    var resolution = utils.getResolutionOfUrl(resolutionFilename, null);
	    if (resolution === null)
	    {
	        resolution = scale !== undefined ? parseFloat(scale) : 1;
	    }
	    if (resolution !== 1)
	    {
	        this.baseTexture.setResolution(resolution);
	    }
	    return resolution;
	};
	Spritesheet.prototype.parse = function parse (callback)
	{
	    this._batchIndex = 0;
	    this._callback = callback;
	    if (this._frameKeys.length <= Spritesheet.BATCH_SIZE)
	    {
	        this._processFrames(0);
	        this._parseComplete();
	    }
	    else
	    {
	        this._nextBatch();
	    }
	};
	Spritesheet.prototype._processFrames = function _processFrames (initialFrameIndex)
	{
	        var this$1 = this;
	    var frameIndex = initialFrameIndex;
	    var maxFrames = Spritesheet.BATCH_SIZE;
	    while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length)
	    {
	        var i = this$1._frameKeys[frameIndex];
	        var data = this$1._frames[i];
	        var rect = data.frame;
	        if (rect)
	        {
	            var frame = null;
	            var trim = null;
	            var sourceSize = data.trimmed !== false && data.sourceSize
	                ? data.sourceSize : data.frame;
	            var orig = new math.Rectangle(
	                0,
	                0,
	                Math.floor(sourceSize.w) / this$1.resolution,
	                Math.floor(sourceSize.h) / this$1.resolution
	            );
	            if (data.rotated)
	            {
	                frame = new math.Rectangle(
	                    Math.floor(rect.x) / this$1.resolution,
	                    Math.floor(rect.y) / this$1.resolution,
	                    Math.floor(rect.h) / this$1.resolution,
	                    Math.floor(rect.w) / this$1.resolution
	                );
	            }
	            else
	            {
	                frame = new math.Rectangle(
	                    Math.floor(rect.x) / this$1.resolution,
	                    Math.floor(rect.y) / this$1.resolution,
	                    Math.floor(rect.w) / this$1.resolution,
	                    Math.floor(rect.h) / this$1.resolution
	                );
	            }
	            if (data.trimmed !== false && data.spriteSourceSize)
	            {
	                trim = new math.Rectangle(
	                    Math.floor(data.spriteSourceSize.x) / this$1.resolution,
	                    Math.floor(data.spriteSourceSize.y) / this$1.resolution,
	                    Math.floor(rect.w) / this$1.resolution,
	                    Math.floor(rect.h) / this$1.resolution
	                );
	            }
	            this$1.textures[i] = new core.Texture(
	                this$1.baseTexture,
	                frame,
	                orig,
	                trim,
	                data.rotated ? 2 : 0
	            );
	            core.Texture.addToCache(this$1.textures[i], i);
	        }
	        frameIndex++;
	    }
	};
	Spritesheet.prototype._parseComplete = function _parseComplete ()
	{
	    var callback = this._callback;
	    this._callback = null;
	    this._batchIndex = 0;
	    callback.call(this, this.textures);
	};
	Spritesheet.prototype._nextBatch = function _nextBatch ()
	{
	        var this$1 = this;
	    this._processFrames(this._batchIndex * Spritesheet.BATCH_SIZE);
	    this._batchIndex++;
	    setTimeout(function () {
	        if (this$1._batchIndex * Spritesheet.BATCH_SIZE < this$1._frameKeys.length)
	        {
	            this$1._nextBatch();
	        }
	        else
	        {
	            this$1._parseComplete();
	        }
	    }, 0);
	};
	Spritesheet.prototype.destroy = function destroy (destroyBase)
	{
	        var this$1 = this;
	        if ( destroyBase === void 0 ) destroyBase = false;
	    for (var i in this$1.textures)
	    {
	        this$1.textures[i].destroy();
	    }
	    this._frames = null;
	    this._frameKeys = null;
	    this.data = null;
	    this.textures = null;
	    if (destroyBase)
	    {
	        this.baseTexture.destroy();
	    }
	    this.baseTexture = null;
	};
	Object.defineProperties( Spritesheet, staticAccessors );
	var SpritesheetLoader = function SpritesheetLoader () {};
	SpritesheetLoader.use = function use (resource, next)
	{
	    var imageResourceName = (resource.name) + "_image";
	    if (!resource.data
	        || resource.type !== loaders.LoaderResource.TYPE.JSON
	        || !resource.data.frames
	        || this.resources[imageResourceName]
	    )
	    {
	        next();
	        return;
	    }
	    var loadOptions = {
	        crossOrigin: resource.crossOrigin,
	        metadata: resource.metadata.imageMetadata,
	        parentResource: resource,
	    };
	    var resourcePath = SpritesheetLoader.getResourcePath(resource, this.baseUrl);
	    this.add(imageResourceName, resourcePath, loadOptions, function onImageLoad(res)
	    {
	        if (res.error)
	        {
	            next(res.error);
	            return;
	        }
	        var spritesheet = new Spritesheet(
	            res.texture.baseTexture,
	            resource.data,
	            resource.url
	        );
	        spritesheet.parse(function () {
	            resource.spritesheet = spritesheet;
	            resource.textures = spritesheet.textures;
	            next();
	        });
	    });
	};
	SpritesheetLoader.getResourcePath = function getResourcePath (resource, baseUrl)
	{
	    if (resource.isDataUrl)
	    {
	        return resource.data.meta.image;
	    }
	    return url$$1.resolve(resource.url.replace(baseUrl, ''), resource.data.meta.image);
	};
	exports.Spritesheet = Spritesheet;
	exports.SpritesheetLoader = SpritesheetLoader;
	});
	var spritesheet$1 = unwrapExports(spritesheet);
	var spritesheet_1 = spritesheet.Spritesheet;
	var spritesheet_2 = spritesheet.SpritesheetLoader;

	var spritesheet$2 = ({
		default: spritesheet$1,
		__moduleExports: spritesheet,
		Spritesheet: spritesheet_1,
		SpritesheetLoader: spritesheet_2
	});

	var spriteTiling = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var tempPoint = new math.Point();
	var TilingSprite = (function (Sprite$$1) {
	    function TilingSprite(texture, width, height)
	    {
	        if ( width === void 0 ) width = 100;
	        if ( height === void 0 ) height = 100;
	        Sprite$$1.call(this, texture);
	        this.tileTransform = new math.Transform();
	        this._width = width;
	        this._height = height;
	        this._canvasPattern = null;
	        this.uvMatrix = texture.uvMatrix || new core.TextureMatrix(texture);
	        this.pluginName = 'tilingSprite';
	        this.uvRespectAnchor = false;
	    }
	    if ( Sprite$$1 ) TilingSprite.__proto__ = Sprite$$1;
	    TilingSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
	    TilingSprite.prototype.constructor = TilingSprite;
	    var prototypeAccessors = { clampMargin: { configurable: true },tileScale: { configurable: true },tilePosition: { configurable: true },width: { configurable: true },height: { configurable: true } };
	    prototypeAccessors.clampMargin.get = function ()
	    {
	        return this.uvMatrix.clampMargin;
	    };
	    prototypeAccessors.clampMargin.set = function (value)
	    {
	        this.uvMatrix.clampMargin = value;
	        this.uvMatrix.update(true);
	    };
	    prototypeAccessors.tileScale.get = function ()
	    {
	        return this.tileTransform.scale;
	    };
	    prototypeAccessors.tileScale.set = function (value)
	    {
	        this.tileTransform.scale.copyFrom(value);
	    };
	    prototypeAccessors.tilePosition.get = function ()
	    {
	        return this.tileTransform.position;
	    };
	    prototypeAccessors.tilePosition.set = function (value)
	    {
	        this.tileTransform.position.copyFrom(value);
	    };
	    TilingSprite.prototype._onTextureUpdate = function _onTextureUpdate ()
	    {
	        if (this.uvMatrix)
	        {
	            this.uvMatrix.texture = this._texture;
	        }
	        this.cachedTint = 0xFFFFFF;
	    };
	    TilingSprite.prototype._render = function _render (renderer)
	    {
	        var texture = this._texture;
	        if (!texture || !texture.valid)
	        {
	            return;
	        }
	        this.tileTransform.updateLocalTransform();
	        this.uvMatrix.update();
	        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
	        renderer.plugins[this.pluginName].render(this);
	    };
	    TilingSprite.prototype._calculateBounds = function _calculateBounds ()
	    {
	        var minX = this._width * -this._anchor._x;
	        var minY = this._height * -this._anchor._y;
	        var maxX = this._width * (1 - this._anchor._x);
	        var maxY = this._height * (1 - this._anchor._y);
	        this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
	    };
	    TilingSprite.prototype.getLocalBounds = function getLocalBounds (rect)
	    {
	        if (this.children.length === 0)
	        {
	            this._bounds.minX = this._width * -this._anchor._x;
	            this._bounds.minY = this._height * -this._anchor._y;
	            this._bounds.maxX = this._width * (1 - this._anchor._x);
	            this._bounds.maxY = this._height * (1 - this._anchor._y);
	            if (!rect)
	            {
	                if (!this._localBoundsRect)
	                {
	                    this._localBoundsRect = new math.Rectangle();
	                }
	                rect = this._localBoundsRect;
	            }
	            return this._bounds.getRectangle(rect);
	        }
	        return Sprite$$1.prototype.getLocalBounds.call(this, rect);
	    };
	    TilingSprite.prototype.containsPoint = function containsPoint (point)
	    {
	        this.worldTransform.applyInverse(point, tempPoint);
	        var width = this._width;
	        var height = this._height;
	        var x1 = -width * this.anchor._x;
	        if (tempPoint.x >= x1 && tempPoint.x < x1 + width)
	        {
	            var y1 = -height * this.anchor._y;
	            if (tempPoint.y >= y1 && tempPoint.y < y1 + height)
	            {
	                return true;
	            }
	        }
	        return false;
	    };
	    TilingSprite.prototype.destroy = function destroy (options)
	    {
	        Sprite$$1.prototype.destroy.call(this, options);
	        this.tileTransform = null;
	        this.uvMatrix = null;
	    };
	    TilingSprite.from = function from (source, width, height)
	    {
	        return new TilingSprite(core.Texture.from(source), width, height);
	    };
	    TilingSprite.fromFrame = function fromFrame (frameId, width, height)
	    {
	        var texture = utils.TextureCache[frameId];
	        if (!texture)
	        {
	            throw new Error(("The frameId \"" + frameId + "\" does not exist in the texture cache " + (this)));
	        }
	        return new TilingSprite(texture, width, height);
	    };
	    TilingSprite.fromImage = function fromImage (imageId, width, height, options)
	    {
	        if (options && typeof options !== 'object')
	        {
	            options = {
	                scaleMode: arguments[4],
	                resourceOptions: {
	                    crossorigin: arguments[3],
	                },
	            };
	        }
	        return new TilingSprite(core.Texture.from(imageId, options), width, height);
	    };
	    prototypeAccessors.width.get = function ()
	    {
	        return this._width;
	    };
	    prototypeAccessors.width.set = function (value)
	    {
	        this._width = value;
	    };
	    prototypeAccessors.height.get = function ()
	    {
	        return this._height;
	    };
	    prototypeAccessors.height.set = function (value)
	    {
	        this._height = value;
	    };
	    Object.defineProperties( TilingSprite.prototype, prototypeAccessors );
	    return TilingSprite;
	}(sprite.Sprite));
	var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n";
	var fragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n";
	var fragmentSimple = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n";
	var tempMat = new math.Matrix();
	var TilingSpriteRenderer = (function (ObjectRenderer$$1) {
	    function TilingSpriteRenderer(renderer)
	    {
	        ObjectRenderer$$1.call(this, renderer);
	        var uniforms = { globals: this.renderer.globalUniforms };
	        this.shader = core.Shader.from(vertex, fragment, uniforms);
	        this.simpleShader = core.Shader.from(vertex, fragmentSimple, uniforms);
	        this.quad = new core.QuadUv();
	    }
	    if ( ObjectRenderer$$1 ) TilingSpriteRenderer.__proto__ = ObjectRenderer$$1;
	    TilingSpriteRenderer.prototype = Object.create( ObjectRenderer$$1 && ObjectRenderer$$1.prototype );
	    TilingSpriteRenderer.prototype.constructor = TilingSpriteRenderer;
	    TilingSpriteRenderer.prototype.render = function render (ts)
	    {
	        var renderer = this.renderer;
	        var quad = this.quad;
	        var vertices = quad.vertices;
	        vertices[0] = vertices[6] = (ts._width) * -ts.anchor.x;
	        vertices[1] = vertices[3] = ts._height * -ts.anchor.y;
	        vertices[2] = vertices[4] = (ts._width) * (1.0 - ts.anchor.x);
	        vertices[5] = vertices[7] = ts._height * (1.0 - ts.anchor.y);
	        if (ts.uvRespectAnchor)
	        {
	            vertices = quad.uvs;
	            vertices[0] = vertices[6] = -ts.anchor.x;
	            vertices[1] = vertices[3] = -ts.anchor.y;
	            vertices[2] = vertices[4] = 1.0 - ts.anchor.x;
	            vertices[5] = vertices[7] = 1.0 - ts.anchor.y;
	        }
	        quad.invalidate();
	        var tex = ts._texture;
	        var baseTex = tex.baseTexture;
	        var lt = ts.tileTransform.localTransform;
	        var uv = ts.uvMatrix;
	        var isSimple = baseTex.isPowerOfTwo
	            && tex.frame.width === baseTex.width && tex.frame.height === baseTex.height;
	        if (isSimple)
	        {
	            if (!baseTex._glTextures[renderer.CONTEXT_UID])
	            {
	                if (baseTex.wrapMode === constants.WRAP_MODES.CLAMP)
	                {
	                    baseTex.wrapMode = constants.WRAP_MODES.REPEAT;
	                }
	            }
	            else
	            {
	                isSimple = baseTex.wrapMode !== constants.WRAP_MODES.CLAMP;
	            }
	        }
	        var shader = isSimple ? this.simpleShader : this.shader;
	        var w = tex.width;
	        var h = tex.height;
	        var W = ts._width;
	        var H = ts._height;
	        tempMat.set(lt.a * w / W,
	            lt.b * w / H,
	            lt.c * h / W,
	            lt.d * h / H,
	            lt.tx / W,
	            lt.ty / H);
	        tempMat.invert();
	        if (isSimple)
	        {
	            tempMat.prepend(uv.mapCoord);
	        }
	        else
	        {
	            shader.uniforms.uMapCoord = uv.mapCoord.toArray(true);
	            shader.uniforms.uClampFrame = uv.uClampFrame;
	            shader.uniforms.uClampOffset = uv.uClampOffset;
	        }
	        shader.uniforms.uTransform = tempMat.toArray(true);
	        shader.uniforms.uColor = utils.premultiplyTintToRgba(ts.tint, ts.worldAlpha,
	            shader.uniforms.uColor, baseTex.premultiplyAlpha);
	        shader.uniforms.translationMatrix = ts.transform.worldTransform.toArray(true);
	        shader.uniforms.uSampler = tex;
	        renderer.shader.bind(shader);
	        renderer.geometry.bind(quad);
	        renderer.state.setBlendMode(utils.correctBlendMode(ts.blendMode, baseTex.premultiplyAlpha));
	        renderer.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
	    };
	    return TilingSpriteRenderer;
	}(core.ObjectRenderer));
	exports.TilingSprite = TilingSprite;
	exports.TilingSpriteRenderer = TilingSpriteRenderer;
	});
	var spriteTiling$1 = unwrapExports(spriteTiling);
	var spriteTiling_1 = spriteTiling.TilingSprite;
	var spriteTiling_2 = spriteTiling.TilingSpriteRenderer;

	var spriteTiling$2 = ({
		default: spriteTiling$1,
		__moduleExports: spriteTiling,
		TilingSprite: spriteTiling_1,
		TilingSpriteRenderer: spriteTiling_2
	});

	var textBitmap = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var BitmapText = (function (Container$$1) {
	    function BitmapText(text, style)
	    {
	        var this$1 = this;
	        if ( style === void 0 ) style = {};
	        Container$$1.call(this);
	        this._textWidth = 0;
	        this._textHeight = 0;
	        this._glyphs = [];
	        this._font = {
	            tint: style.tint !== undefined ? style.tint : 0xFFFFFF,
	            align: style.align || 'left',
	            name: null,
	            size: 0,
	        };
	        this.font = style.font;
	        this._text = text;
	        this._maxWidth = 0;
	        this._maxLineHeight = 0;
	        this._letterSpacing = 0;
	        this._anchor = new math.ObservablePoint(function () { this$1.dirty = true; }, this, 0, 0);
	        this.dirty = false;
	        this.updateText();
	    }
	    if ( Container$$1 ) BitmapText.__proto__ = Container$$1;
	    BitmapText.prototype = Object.create( Container$$1 && Container$$1.prototype );
	    BitmapText.prototype.constructor = BitmapText;
	    var prototypeAccessors = { tint: { configurable: true },align: { configurable: true },anchor: { configurable: true },font: { configurable: true },text: { configurable: true },maxWidth: { configurable: true },maxLineHeight: { configurable: true },textWidth: { configurable: true },letterSpacing: { configurable: true },textHeight: { configurable: true } };
	    BitmapText.prototype.updateText = function updateText ()
	    {
	        var this$1 = this;
	        var data = BitmapText.fonts[this._font.name];
	        var scale = this._font.size / data.size;
	        var pos = new math.Point();
	        var chars = [];
	        var lineWidths = [];
	        var text = this.text.replace(/(?:\r\n|\r)/g, '\n');
	        var textLength = text.length;
	        var maxWidth = this._maxWidth * data.size / this._font.size;
	        var prevCharCode = null;
	        var lastLineWidth = 0;
	        var maxLineWidth = 0;
	        var line = 0;
	        var lastBreakPos = -1;
	        var lastBreakWidth = 0;
	        var spacesRemoved = 0;
	        var maxLineHeight = 0;
	        for (var i = 0; i < textLength; i++)
	        {
	            var charCode = text.charCodeAt(i);
	            var char = text.charAt(i);
	            if (/(?:\s)/.test(char))
	            {
	                lastBreakPos = i;
	                lastBreakWidth = lastLineWidth;
	            }
	            if (char === '\r' || char === '\n')
	            {
	                lineWidths.push(lastLineWidth);
	                maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
	                ++line;
	                ++spacesRemoved;
	                pos.x = 0;
	                pos.y += data.lineHeight;
	                prevCharCode = null;
	                continue;
	            }
	            var charData = data.chars[charCode];
	            if (!charData)
	            {
	                continue;
	            }
	            if (prevCharCode && charData.kerning[prevCharCode])
	            {
	                pos.x += charData.kerning[prevCharCode];
	            }
	            chars.push({
	                texture: charData.texture,
	                line: line,
	                charCode: charCode,
	                position: new math.Point(pos.x + charData.xOffset + (this$1._letterSpacing / 2), pos.y + charData.yOffset),
	            });
	            pos.x += charData.xAdvance + this$1._letterSpacing;
	            lastLineWidth = pos.x;
	            maxLineHeight = Math.max(maxLineHeight, (charData.yOffset + charData.texture.height));
	            prevCharCode = charCode;
	            if (lastBreakPos !== -1 && maxWidth > 0 && pos.x > maxWidth)
	            {
	                ++spacesRemoved;
	                utils.removeItems(chars, 1 + lastBreakPos - spacesRemoved, 1 + i - lastBreakPos);
	                i = lastBreakPos;
	                lastBreakPos = -1;
	                lineWidths.push(lastBreakWidth);
	                maxLineWidth = Math.max(maxLineWidth, lastBreakWidth);
	                line++;
	                pos.x = 0;
	                pos.y += data.lineHeight;
	                prevCharCode = null;
	            }
	        }
	        var lastChar = text.charAt(text.length - 1);
	        if (lastChar !== '\r' && lastChar !== '\n')
	        {
	            if (/(?:\s)/.test(lastChar))
	            {
	                lastLineWidth = lastBreakWidth;
	            }
	            lineWidths.push(lastLineWidth);
	            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
	        }
	        var lineAlignOffsets = [];
	        for (var i$1 = 0; i$1 <= line; i$1++)
	        {
	            var alignOffset = 0;
	            if (this$1._font.align === 'right')
	            {
	                alignOffset = maxLineWidth - lineWidths[i$1];
	            }
	            else if (this$1._font.align === 'center')
	            {
	                alignOffset = (maxLineWidth - lineWidths[i$1]) / 2;
	            }
	            lineAlignOffsets.push(alignOffset);
	        }
	        var lenChars = chars.length;
	        var tint = this.tint;
	        for (var i$2 = 0; i$2 < lenChars; i$2++)
	        {
	            var c = this$1._glyphs[i$2];
	            if (c)
	            {
	                c.texture = chars[i$2].texture;
	            }
	            else
	            {
	                c = new sprite.Sprite(chars[i$2].texture);
	                this$1._glyphs.push(c);
	            }
	            c.position.x = (chars[i$2].position.x + lineAlignOffsets[chars[i$2].line]) * scale;
	            c.position.y = chars[i$2].position.y * scale;
	            c.scale.x = c.scale.y = scale;
	            c.tint = tint;
	            if (!c.parent)
	            {
	                this$1.addChild(c);
	            }
	        }
	        for (var i$3 = lenChars; i$3 < this._glyphs.length; ++i$3)
	        {
	            this$1.removeChild(this$1._glyphs[i$3]);
	        }
	        this._textWidth = maxLineWidth * scale;
	        this._textHeight = (pos.y + data.lineHeight) * scale;
	        if (this.anchor.x !== 0 || this.anchor.y !== 0)
	        {
	            for (var i$4 = 0; i$4 < lenChars; i$4++)
	            {
	                this$1._glyphs[i$4].x -= this$1._textWidth * this$1.anchor.x;
	                this$1._glyphs[i$4].y -= this$1._textHeight * this$1.anchor.y;
	            }
	        }
	        this._maxLineHeight = maxLineHeight * scale;
	    };
	    BitmapText.prototype.updateTransform = function updateTransform ()
	    {
	        this.validate();
	        this.containerUpdateTransform();
	    };
	    BitmapText.prototype.getLocalBounds = function getLocalBounds ()
	    {
	        this.validate();
	        return Container$$1.prototype.getLocalBounds.call(this);
	    };
	    BitmapText.prototype.validate = function validate ()
	    {
	        if (this.dirty)
	        {
	            this.updateText();
	            this.dirty = false;
	        }
	    };
	    prototypeAccessors.tint.get = function ()
	    {
	        return this._font.tint;
	    };
	    prototypeAccessors.tint.set = function (value)
	    {
	        this._font.tint = (typeof value === 'number' && value >= 0) ? value : 0xFFFFFF;
	        this.dirty = true;
	    };
	    prototypeAccessors.align.get = function ()
	    {
	        return this._font.align;
	    };
	    prototypeAccessors.align.set = function (value)
	    {
	        this._font.align = value || 'left';
	        this.dirty = true;
	    };
	    prototypeAccessors.anchor.get = function ()
	    {
	        return this._anchor;
	    };
	    prototypeAccessors.anchor.set = function (value)
	    {
	        if (typeof value === 'number')
	        {
	            this._anchor.set(value);
	        }
	        else
	        {
	            this._anchor.copyFrom(value);
	        }
	    };
	    prototypeAccessors.font.get = function ()
	    {
	        return this._font;
	    };
	    prototypeAccessors.font.set = function (value)
	    {
	        if (!value)
	        {
	            return;
	        }
	        if (typeof value === 'string')
	        {
	            value = value.split(' ');
	            this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
	            this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
	        }
	        else
	        {
	            this._font.name = value.name;
	            this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
	        }
	        this.dirty = true;
	    };
	    prototypeAccessors.text.get = function ()
	    {
	        return this._text;
	    };
	    prototypeAccessors.text.set = function (value)
	    {
	        value = value.toString() || ' ';
	        if (this._text === value)
	        {
	            return;
	        }
	        this._text = value;
	        this.dirty = true;
	    };
	    prototypeAccessors.maxWidth.get = function ()
	    {
	        return this._maxWidth;
	    };
	    prototypeAccessors.maxWidth.set = function (value)
	    {
	        if (this._maxWidth === value)
	        {
	            return;
	        }
	        this._maxWidth = value;
	        this.dirty = true;
	    };
	    prototypeAccessors.maxLineHeight.get = function ()
	    {
	        this.validate();
	        return this._maxLineHeight;
	    };
	    prototypeAccessors.textWidth.get = function ()
	    {
	        this.validate();
	        return this._textWidth;
	    };
	    prototypeAccessors.letterSpacing.get = function ()
	    {
	        return this._letterSpacing;
	    };
	    prototypeAccessors.letterSpacing.set = function (value)
	    {
	        if (this._letterSpacing !== value)
	        {
	            this._letterSpacing = value;
	            this.dirty = true;
	        }
	    };
	    prototypeAccessors.textHeight.get = function ()
	    {
	        this.validate();
	        return this._textHeight;
	    };
	    BitmapText.registerFont = function registerFont (xml, textures)
	    {
	        var data = {};
	        var info = xml.getElementsByTagName('info')[0];
	        var common = xml.getElementsByTagName('common')[0];
	        var pages = xml.getElementsByTagName('page');
	        var res = utils.getResolutionOfUrl(pages[0].getAttribute('file'), settings_1.settings.RESOLUTION);
	        var pagesTextures = {};
	        data.font = info.getAttribute('face');
	        data.size = parseInt(info.getAttribute('size'), 10);
	        data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10) / res;
	        data.chars = {};
	        if (textures instanceof core.Texture)
	        {
	            textures = [textures];
	        }
	        for (var i = 0; i < pages.length; i++)
	        {
	            var id = pages[i].getAttribute('id');
	            var file = pages[i].getAttribute('file');
	            pagesTextures[id] = textures instanceof Array ? textures[i] : textures[file];
	        }
	        var letters = xml.getElementsByTagName('char');
	        for (var i$1 = 0; i$1 < letters.length; i$1++)
	        {
	            var letter = letters[i$1];
	            var charCode = parseInt(letter.getAttribute('id'), 10);
	            var page = letter.getAttribute('page') || 0;
	            var textureRect = new math.Rectangle(
	                (parseInt(letter.getAttribute('x'), 10) / res) + (pagesTextures[page].frame.x / res),
	                (parseInt(letter.getAttribute('y'), 10) / res) + (pagesTextures[page].frame.y / res),
	                parseInt(letter.getAttribute('width'), 10) / res,
	                parseInt(letter.getAttribute('height'), 10) / res
	            );
	            data.chars[charCode] = {
	                xOffset: parseInt(letter.getAttribute('xoffset'), 10) / res,
	                yOffset: parseInt(letter.getAttribute('yoffset'), 10) / res,
	                xAdvance: parseInt(letter.getAttribute('xadvance'), 10) / res,
	                kerning: {},
	                texture: new core.Texture(pagesTextures[page].baseTexture, textureRect),
	                page: page,
	            };
	        }
	        var kernings = xml.getElementsByTagName('kerning');
	        for (var i$2 = 0; i$2 < kernings.length; i$2++)
	        {
	            var kerning = kernings[i$2];
	            var first = parseInt(kerning.getAttribute('first'), 10) / res;
	            var second = parseInt(kerning.getAttribute('second'), 10) / res;
	            var amount = parseInt(kerning.getAttribute('amount'), 10) / res;
	            if (data.chars[second])
	            {
	                data.chars[second].kerning[first] = amount;
	            }
	        }
	        BitmapText.fonts[data.font] = data;
	        return data;
	    };
	    Object.defineProperties( BitmapText.prototype, prototypeAccessors );
	    return BitmapText;
	}(display.Container));
	BitmapText.fonts = {};
	var BitmapFontLoader = function BitmapFontLoader () {};
	BitmapFontLoader.parse = function parse (resource, texture)
	{
	    resource.bitmapFont = BitmapText.registerFont(resource.data, texture);
	};
	BitmapFontLoader.add = function add ()
	{
	    loaders.LoaderResource.setExtensionXhrType('fnt', loaders.LoaderResource.XHR_RESPONSE_TYPE.DOCUMENT);
	};
	BitmapFontLoader.dirname = function dirname (url)
	{
	    var dir = url
	        .replace(/\/$/, '')
	        .replace(/\/[^\/]*$/, '');
	    if (dir === url)
	    {
	        return '.';
	    }
	    else if (dir === '')
	    {
	        return '/';
	    }
	    return dir;
	};
	BitmapFontLoader.use = function use (resource, next)
	{
	        var this$1 = this;
	    if (!resource.data || resource.type !== loaders.LoaderResource.TYPE.XML)
	    {
	        next();
	        return;
	    }
	    if (resource.data.getElementsByTagName('page').length === 0
	        || resource.data.getElementsByTagName('info').length === 0
	        || resource.data.getElementsByTagName('info')[0].getAttribute('face') === null
	    )
	    {
	        next();
	        return;
	    }
	    var xmlUrl = !resource.isDataUrl ? BitmapFontLoader.dirname(resource.url) : '';
	    if (resource.isDataUrl)
	    {
	        if (xmlUrl === '.')
	        {
	            xmlUrl = '';
	        }
	        if (this.baseUrl && xmlUrl)
	        {
	            if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/')
	            {
	                xmlUrl += '/';
	            }
	        }
	    }
	    xmlUrl = xmlUrl.replace(this.baseUrl, '');
	    if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/')
	    {
	        xmlUrl += '/';
	    }
	    var pages = resource.data.getElementsByTagName('page');
	    var textures = {};
	    var completed = function (page) {
	        textures[page.metadata.pageFile] = page.texture;
	        if (Object.keys(textures).length === pages.length)
	        {
	            BitmapFontLoader.parse(resource, textures);
	            next();
	        }
	    };
	    for (var i = 0; i < pages.length; ++i)
	    {
	        var pageFile = pages[i].getAttribute('file');
	        var url = xmlUrl + pageFile;
	        var exists = false;
	        for (var name in this$1.resources)
	        {
	            if (this$1.resources[name].url === url)
	            {
	                this$1.resources[name].metadata.pageFile = pageFile;
	                completed(this$1.resources[name]);
	                exists = true;
	                break;
	            }
	        }
	        if (!exists)
	        {
	            var options = {
	                crossOrigin: resource.crossOrigin,
	                loadType: loaders.LoaderResource.LOAD_TYPE.IMAGE,
	                metadata: Object.assign(
	                    { pageFile: pageFile },
	                    resource.metadata.imageMetadata
	                ),
	                parentResource: resource,
	            };
	            this$1.add(url, options, completed);
	        }
	    }
	};
	exports.BitmapText = BitmapText;
	exports.BitmapFontLoader = BitmapFontLoader;
	});
	var textBitmap$1 = unwrapExports(textBitmap);
	var textBitmap_1 = textBitmap.BitmapText;
	var textBitmap_2 = textBitmap.BitmapFontLoader;

	var textBitmap$2 = ({
		default: textBitmap$1,
		__moduleExports: textBitmap,
		BitmapText: textBitmap_1,
		BitmapFontLoader: textBitmap_2
	});

	var fragments = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var _default = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
	var defaultFilter = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
	exports.defaultVertex = _default;
	exports.defaultFilterVertex = defaultFilter;
	});
	unwrapExports(fragments);
	var fragments_1 = fragments.defaultVertex;
	var fragments_2 = fragments.defaultFilterVertex;

	var filterAlpha = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var fragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n";
	var AlphaFilter = (function (Filter$$1) {
	    function AlphaFilter(alpha)
	    {
	        if ( alpha === void 0 ) alpha = 1.0;
	        Filter$$1.call(this, fragments.defaultVertex, fragment, { uAlpha: 1 });
	        this.alpha = alpha;
	    }
	    if ( Filter$$1 ) AlphaFilter.__proto__ = Filter$$1;
	    AlphaFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    AlphaFilter.prototype.constructor = AlphaFilter;
	    var prototypeAccessors = { alpha: { configurable: true } };
	    prototypeAccessors.alpha.get = function ()
	    {
	        return this.uniforms.uAlpha;
	    };
	    prototypeAccessors.alpha.set = function (value)
	    {
	        this.uniforms.uAlpha = value;
	    };
	    Object.defineProperties( AlphaFilter.prototype, prototypeAccessors );
	    return AlphaFilter;
	}(core.Filter));
	exports.AlphaFilter = AlphaFilter;
	});
	unwrapExports(filterAlpha);
	var filterAlpha_1 = filterAlpha.AlphaFilter;

	var filterBlur = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var vertTemplate = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 inputClamp;\n    uniform vec4 outputFrame;\n    \n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n    \n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n    \n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
	function generateVertBlurSource(kernelSize, x)
	{
	    var halfLength = Math.ceil(kernelSize / 2);
	    var vertSource = vertTemplate;
	    var blurLoop = '';
	    var template;
	    if (x)
	    {
	        template = 'vBlurTexCoords[%index%] =  min( textureCoord + vec2(%sampleIndex% * strength, 0.0), inputClamp.zw);';
	    }
	    else
	    {
	        template = 'vBlurTexCoords[%index%] =  min( textureCoord + vec2(0.0, %sampleIndex% * strength), inputClamp.zw);';
	    }
	    for (var i = 0; i < kernelSize; i++)
	    {
	        var blur = template.replace('%index%', i);
	        blur = blur.replace('%sampleIndex%', ((i - (halfLength - 1)) + ".0"));
	        blurLoop += blur;
	        blurLoop += '\n';
	    }
	    vertSource = vertSource.replace('%blur%', blurLoop);
	    vertSource = vertSource.replace('%size%', kernelSize);
	    return vertSource;
	}
	var GAUSSIAN_VALUES = {
	    5: [0.153388, 0.221461, 0.250301],
	    7: [0.071303, 0.131514, 0.189879, 0.214607],
	    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
	    11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
	    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
	    15: [0.000489, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448],
	};
	var fragTemplate = [
	    'varying vec2 vBlurTexCoords[%size%];',
	    'uniform sampler2D uSampler;',
	    'void main(void)',
	    '{',
	    '    gl_FragColor = vec4(0.0);',
	    '    %blur%',
	    '}' ].join('\n');
	function generateFragBlurSource(kernelSize)
	{
	    var kernel = GAUSSIAN_VALUES[kernelSize];
	    var halfLength = kernel.length;
	    var fragSource = fragTemplate;
	    var blurLoop = '';
	    var template = 'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;';
	    var value;
	    for (var i = 0; i < kernelSize; i++)
	    {
	        var blur = template.replace('%index%', i);
	        value = i;
	        if (i >= halfLength)
	        {
	            value = kernelSize - i - 1;
	        }
	        blur = blur.replace('%value%', kernel[value]);
	        blurLoop += blur;
	        blurLoop += '\n';
	    }
	    fragSource = fragSource.replace('%blur%', blurLoop);
	    fragSource = fragSource.replace('%size%', kernelSize);
	    return fragSource;
	}
	function getMaxKernelSize(gl)
	{
	    var maxVaryings = (gl.getParameter(gl.MAX_VARYING_VECTORS));
	    var kernelSize = 15;
	    while (kernelSize > maxVaryings)
	    {
	        kernelSize -= 2;
	    }
	    return kernelSize;
	}
	var BlurFilterPass = (function (Filter$$1) {
	    function BlurFilterPass(horizontal, strength, quality, resolution, kernelSize)
	    {
	        kernelSize = kernelSize || 5;
	        var vertSrc = generateVertBlurSource(kernelSize, horizontal);
	        var fragSrc = generateFragBlurSource(kernelSize);
	        Filter$$1.call(
	            this, vertSrc,
	            fragSrc
	        );
	        this.horizontal = horizontal;
	        this.resolution = resolution || settings_1.settings.RESOLUTION;
	        this._quality = 0;
	        this.quality = quality || 4;
	        this.blur = strength || 8;
	        this.firstRun = true;
	    }
	    if ( Filter$$1 ) BlurFilterPass.__proto__ = Filter$$1;
	    BlurFilterPass.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    BlurFilterPass.prototype.constructor = BlurFilterPass;
	    var prototypeAccessors = { blur: { configurable: true },quality: { configurable: true } };
	    BlurFilterPass.prototype.apply = function apply (filterManager, input, output, clear)
	    {
	        var this$1 = this;
	        if (this.firstRun)
	        {
	            var gl = filterManager.renderer.gl;
	            var kernelSize = getMaxKernelSize(gl);
	            this.vertexSrc = generateVertBlurSource(kernelSize, true);
	            this.fragmentSrc = generateFragBlurSource(kernelSize);
	            this.firstRun = false;
	        }
	        if (output)
	        {
	            if (this.horizontal)
	            {
	                this.uniforms.strength = (1 / output.width) * (output.width / input.width);
	            }
	            else
	            {
	                this.uniforms.strength = (1 / output.height) * (output.height / input.height);
	            }
	        }
	        else
	        {
	            if (this.horizontal)
	            {
	                this.uniforms.strength = (1 / filterManager.renderer.width) * (filterManager.renderer.width / input.width);
	            }
	            else
	            {
	                this.uniforms.strength = (1 / filterManager.renderer.height) * (filterManager.renderer.height / input.height);
	            }
	        }
	        this.uniforms.strength *= this.strength;
	        this.uniforms.strength /= this.passes;
	        if (this.passes === 1)
	        {
	            filterManager.applyFilter(this, input, output, clear);
	        }
	        else
	        {
	            var renderTarget = filterManager.getFilterTexture();
	            var renderer = filterManager.renderer;
	            var flip = input;
	            var flop = renderTarget;
	            this.state.blend = false;
	            filterManager.applyFilter(this, flip, flop, false);
	            for (var i = 1; i < this.passes - 1; i++)
	            {
	                renderer.renderTexture.bind(flip, flip.filterFrame);
	                this$1.uniforms.uSampler = flop;
	                var temp = flop;
	                flop = flip;
	                flip = temp;
	                renderer.shader.bind(this$1);
	                renderer.geometry.draw(5);
	            }
	            this.state.blend = true;
	            filterManager.applyFilter(this, flop, output, clear);
	            filterManager.returnFilterTexture(renderTarget);
	        }
	    };
	    prototypeAccessors.blur.get = function ()
	    {
	        return this.strength;
	    };
	    prototypeAccessors.blur.set = function (value)
	    {
	        this.padding = 1 + (Math.abs(value) * 2);
	        this.strength = value;
	    };
	    prototypeAccessors.quality.get = function ()
	    {
	        return this._quality;
	    };
	    prototypeAccessors.quality.set = function (value)
	    {
	        this._quality = value;
	        this.passes = value;
	    };
	    Object.defineProperties( BlurFilterPass.prototype, prototypeAccessors );
	    return BlurFilterPass;
	}(core.Filter));
	var BlurFilter = (function (Filter$$1) {
	    function BlurFilter(strength, quality, resolution, kernelSize)
	    {
	        Filter$$1.call(this);
	        this.blurXFilter = new BlurFilterPass(true, strength, quality, resolution, kernelSize);
	        this.blurYFilter = new BlurFilterPass(false, strength, quality, resolution, kernelSize);
	        this._padding = 0;
	        this.resolution = resolution || settings_1.settings.RESOLUTION;
	        this.quality = quality || 4;
	        this.blur = strength || 8;
	        this.repeatEdgePixels = false;
	    }
	    if ( Filter$$1 ) BlurFilter.__proto__ = Filter$$1;
	    BlurFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    BlurFilter.prototype.constructor = BlurFilter;
	    var prototypeAccessors = { blur: { configurable: true },quality: { configurable: true },blurX: { configurable: true },blurY: { configurable: true },blendMode: { configurable: true },repeatEdgePixels: { configurable: true } };
	    BlurFilter.prototype.apply = function apply (filterManager, input, output)
	    {
	        var xStrength = Math.abs(this.blurXFilter.strength);
	        var yStrength = Math.abs(this.blurYFilter.strength);
	        if (xStrength && yStrength)
	        {
	            var renderTarget = filterManager.getFilterTexture(true);
	            this.blurXFilter.apply(filterManager, input, renderTarget, true);
	            this.blurYFilter.apply(filterManager, renderTarget, output, false);
	            filterManager.returnFilterTexture(renderTarget);
	        }
	        else if (yStrength)
	        {
	            this.blurYFilter.apply(filterManager, input, output, false);
	        }
	        else
	        {
	            this.blurXFilter.apply(filterManager, input, output, false);
	        }
	    };
	    BlurFilter.prototype.updatePadding = function updatePadding ()
	    {
	        if (this._repeatEdgePixels)
	        {
	            this.padding = 0;
	        }
	        else
	        {
	            this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
	        }
	    };
	    prototypeAccessors.blur.get = function ()
	    {
	        return this.blurXFilter.blur;
	    };
	    prototypeAccessors.blur.set = function (value)
	    {
	        this.blurXFilter.blur = this.blurYFilter.blur = value;
	        this.updatePadding();
	    };
	    prototypeAccessors.quality.get = function ()
	    {
	        return this.blurXFilter.quality;
	    };
	    prototypeAccessors.quality.set = function (value)
	    {
	        this.blurXFilter.quality = this.blurYFilter.quality = value;
	    };
	    prototypeAccessors.blurX.get = function ()
	    {
	        return this.blurXFilter.blur;
	    };
	    prototypeAccessors.blurX.set = function (value)
	    {
	        this.blurXFilter.blur = value;
	        this.updatePadding();
	    };
	    prototypeAccessors.blurY.get = function ()
	    {
	        return this.blurYFilter.blur;
	    };
	    prototypeAccessors.blurY.set = function (value)
	    {
	        this.blurYFilter.blur = value;
	        this.updatePadding();
	    };
	    prototypeAccessors.blendMode.get = function ()
	    {
	        return this.blurYFilter._blendMode;
	    };
	    prototypeAccessors.blendMode.set = function (value)
	    {
	        this.blurYFilter._blendMode = value;
	    };
	    prototypeAccessors.repeatEdgePixels.get = function ()
	    {
	        return this._repeatEdgePixels;
	    };
	    prototypeAccessors.repeatEdgePixels.set = function (value)
	    {
	        this._repeatEdgePixels = value;
	        this.updatePadding();
	    };
	    Object.defineProperties( BlurFilter.prototype, prototypeAccessors );
	    return BlurFilter;
	}(core.Filter));
	exports.BlurFilter = BlurFilter;
	exports.BlurFilterPass = BlurFilterPass;
	});
	unwrapExports(filterBlur);
	var filterBlur_1 = filterBlur.BlurFilter;
	var filterBlur_2 = filterBlur.BlurFilterPass;

	var filterColorMatrix = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var fragment = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n";
	var ColorMatrixFilter = (function (Filter$$1) {
	    function ColorMatrixFilter()
	    {
	        var uniforms = {
	            m: new Float32Array([1, 0, 0, 0, 0,
	                0, 1, 0, 0, 0,
	                0, 0, 1, 0, 0,
	                0, 0, 0, 1, 0]),
	            uAlpha: 1,
	        };
	        Filter$$1.call(this, fragments.defaultFilterVertex, fragment, uniforms);
	        this.alpha = 1;
	    }
	    if ( Filter$$1 ) ColorMatrixFilter.__proto__ = Filter$$1;
	    ColorMatrixFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;
	    var prototypeAccessors = { matrix: { configurable: true },alpha: { configurable: true } };
	    ColorMatrixFilter.prototype._loadMatrix = function _loadMatrix (matrix, multiply)
	    {
	        if ( multiply === void 0 ) multiply = false;
	        var newMatrix = matrix;
	        if (multiply)
	        {
	            this._multiply(newMatrix, this.uniforms.m, matrix);
	            newMatrix = this._colorMatrix(newMatrix);
	        }
	        this.uniforms.m = newMatrix;
	    };
	    ColorMatrixFilter.prototype._multiply = function _multiply (out, a, b)
	    {
	        out[0] = (a[0] * b[0]) + (a[1] * b[5]) + (a[2] * b[10]) + (a[3] * b[15]);
	        out[1] = (a[0] * b[1]) + (a[1] * b[6]) + (a[2] * b[11]) + (a[3] * b[16]);
	        out[2] = (a[0] * b[2]) + (a[1] * b[7]) + (a[2] * b[12]) + (a[3] * b[17]);
	        out[3] = (a[0] * b[3]) + (a[1] * b[8]) + (a[2] * b[13]) + (a[3] * b[18]);
	        out[4] = (a[0] * b[4]) + (a[1] * b[9]) + (a[2] * b[14]) + (a[3] * b[19]) + a[4];
	        out[5] = (a[5] * b[0]) + (a[6] * b[5]) + (a[7] * b[10]) + (a[8] * b[15]);
	        out[6] = (a[5] * b[1]) + (a[6] * b[6]) + (a[7] * b[11]) + (a[8] * b[16]);
	        out[7] = (a[5] * b[2]) + (a[6] * b[7]) + (a[7] * b[12]) + (a[8] * b[17]);
	        out[8] = (a[5] * b[3]) + (a[6] * b[8]) + (a[7] * b[13]) + (a[8] * b[18]);
	        out[9] = (a[5] * b[4]) + (a[6] * b[9]) + (a[7] * b[14]) + (a[8] * b[19]) + a[9];
	        out[10] = (a[10] * b[0]) + (a[11] * b[5]) + (a[12] * b[10]) + (a[13] * b[15]);
	        out[11] = (a[10] * b[1]) + (a[11] * b[6]) + (a[12] * b[11]) + (a[13] * b[16]);
	        out[12] = (a[10] * b[2]) + (a[11] * b[7]) + (a[12] * b[12]) + (a[13] * b[17]);
	        out[13] = (a[10] * b[3]) + (a[11] * b[8]) + (a[12] * b[13]) + (a[13] * b[18]);
	        out[14] = (a[10] * b[4]) + (a[11] * b[9]) + (a[12] * b[14]) + (a[13] * b[19]) + a[14];
	        out[15] = (a[15] * b[0]) + (a[16] * b[5]) + (a[17] * b[10]) + (a[18] * b[15]);
	        out[16] = (a[15] * b[1]) + (a[16] * b[6]) + (a[17] * b[11]) + (a[18] * b[16]);
	        out[17] = (a[15] * b[2]) + (a[16] * b[7]) + (a[17] * b[12]) + (a[18] * b[17]);
	        out[18] = (a[15] * b[3]) + (a[16] * b[8]) + (a[17] * b[13]) + (a[18] * b[18]);
	        out[19] = (a[15] * b[4]) + (a[16] * b[9]) + (a[17] * b[14]) + (a[18] * b[19]) + a[19];
	        return out;
	    };
	    ColorMatrixFilter.prototype._colorMatrix = function _colorMatrix (matrix)
	    {
	        var m = new Float32Array(matrix);
	        m[4] /= 255;
	        m[9] /= 255;
	        m[14] /= 255;
	        m[19] /= 255;
	        return m;
	    };
	    ColorMatrixFilter.prototype.brightness = function brightness (b, multiply)
	    {
	        var matrix = [
	            b, 0, 0, 0, 0,
	            0, b, 0, 0, 0,
	            0, 0, b, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.greyscale = function greyscale (scale, multiply)
	    {
	        var matrix = [
	            scale, scale, scale, 0, 0,
	            scale, scale, scale, 0, 0,
	            scale, scale, scale, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.blackAndWhite = function blackAndWhite (multiply)
	    {
	        var matrix = [
	            0.3, 0.6, 0.1, 0, 0,
	            0.3, 0.6, 0.1, 0, 0,
	            0.3, 0.6, 0.1, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.hue = function hue (rotation, multiply)
	    {
	        rotation = (rotation || 0) / 180 * Math.PI;
	        var cosR = Math.cos(rotation);
	        var sinR = Math.sin(rotation);
	        var sqrt = Math.sqrt;
	        var w = 1 / 3;
	        var sqrW = sqrt(w);
	        var a00 = cosR + ((1.0 - cosR) * w);
	        var a01 = (w * (1.0 - cosR)) - (sqrW * sinR);
	        var a02 = (w * (1.0 - cosR)) + (sqrW * sinR);
	        var a10 = (w * (1.0 - cosR)) + (sqrW * sinR);
	        var a11 = cosR + (w * (1.0 - cosR));
	        var a12 = (w * (1.0 - cosR)) - (sqrW * sinR);
	        var a20 = (w * (1.0 - cosR)) - (sqrW * sinR);
	        var a21 = (w * (1.0 - cosR)) + (sqrW * sinR);
	        var a22 = cosR + (w * (1.0 - cosR));
	        var matrix = [
	            a00, a01, a02, 0, 0,
	            a10, a11, a12, 0, 0,
	            a20, a21, a22, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.contrast = function contrast (amount, multiply)
	    {
	        var v = (amount || 0) + 1;
	        var o = -0.5 * (v - 1);
	        var matrix = [
	            v, 0, 0, 0, o,
	            0, v, 0, 0, o,
	            0, 0, v, 0, o,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.saturate = function saturate (amount, multiply)
	    {
	        if ( amount === void 0 ) amount = 0;
	        var x = (amount * 2 / 3) + 1;
	        var y = ((x - 1) * -0.5);
	        var matrix = [
	            x, y, y, 0, 0,
	            y, x, y, 0, 0,
	            y, y, x, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.desaturate = function desaturate ()
	    {
	        this.saturate(-1);
	    };
	    ColorMatrixFilter.prototype.negative = function negative (multiply)
	    {
	        var matrix = [
	            -1, 0, 0, 1, 0,
	            0, -1, 0, 1, 0,
	            0, 0, -1, 1, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.sepia = function sepia (multiply)
	    {
	        var matrix = [
	            0.393, 0.7689999, 0.18899999, 0, 0,
	            0.349, 0.6859999, 0.16799999, 0, 0,
	            0.272, 0.5339999, 0.13099999, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.technicolor = function technicolor (multiply)
	    {
	        var matrix = [
	            1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337,
	            -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398,
	            -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.polaroid = function polaroid (multiply)
	    {
	        var matrix = [
	            1.438, -0.062, -0.062, 0, 0,
	            -0.122, 1.378, -0.122, 0, 0,
	            -0.016, -0.016, 1.483, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.toBGR = function toBGR (multiply)
	    {
	        var matrix = [
	            0, 0, 1, 0, 0,
	            0, 1, 0, 0, 0,
	            1, 0, 0, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.kodachrome = function kodachrome (multiply)
	    {
	        var matrix = [
	            1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
	            -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
	            -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.browni = function browni (multiply)
	    {
	        var matrix = [
	            0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873,
	            -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127,
	            0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.vintage = function vintage (multiply)
	    {
	        var matrix = [
	            0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123,
	            0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591,
	            0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.colorTone = function colorTone (desaturation, toned, lightColor, darkColor, multiply)
	    {
	        desaturation = desaturation || 0.2;
	        toned = toned || 0.15;
	        lightColor = lightColor || 0xFFE580;
	        darkColor = darkColor || 0x338000;
	        var lR = ((lightColor >> 16) & 0xFF) / 255;
	        var lG = ((lightColor >> 8) & 0xFF) / 255;
	        var lB = (lightColor & 0xFF) / 255;
	        var dR = ((darkColor >> 16) & 0xFF) / 255;
	        var dG = ((darkColor >> 8) & 0xFF) / 255;
	        var dB = (darkColor & 0xFF) / 255;
	        var matrix = [
	            0.3, 0.59, 0.11, 0, 0,
	            lR, lG, lB, desaturation, 0,
	            dR, dG, dB, toned, 0,
	            lR - dR, lG - dG, lB - dB, 0, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.night = function night (intensity, multiply)
	    {
	        intensity = intensity || 0.1;
	        var matrix = [
	            intensity * (-2.0), -intensity, 0, 0, 0,
	            -intensity, 0, intensity, 0, 0,
	            0, intensity, intensity * 2.0, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.predator = function predator (amount, multiply)
	    {
	        var matrix = [
	            11.224130630493164 * amount,
	            -4.794486999511719 * amount,
	            -2.8746118545532227 * amount,
	            0 * amount,
	            0.40342438220977783 * amount,
	            -3.6330697536468506 * amount,
	            9.193157196044922 * amount,
	            -2.951810836791992 * amount,
	            0 * amount,
	            -1.316135048866272 * amount,
	            -3.2184197902679443 * amount,
	            -4.2375030517578125 * amount,
	            7.476448059082031 * amount,
	            0 * amount,
	            0.8044459223747253 * amount,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.lsd = function lsd (multiply)
	    {
	        var matrix = [
	            2, -0.4, 0.5, 0, 0,
	            -0.5, 2, -0.4, 0, 0,
	            -0.4, -0.5, 3, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, multiply);
	    };
	    ColorMatrixFilter.prototype.reset = function reset ()
	    {
	        var matrix = [
	            1, 0, 0, 0, 0,
	            0, 1, 0, 0, 0,
	            0, 0, 1, 0, 0,
	            0, 0, 0, 1, 0 ];
	        this._loadMatrix(matrix, false);
	    };
	    prototypeAccessors.matrix.get = function ()
	    {
	        return this.uniforms.m;
	    };
	    prototypeAccessors.matrix.set = function (value)
	    {
	        this.uniforms.m = value;
	    };
	    prototypeAccessors.alpha.get = function ()
	    {
	        return this.uniforms.uAlpha;
	    };
	    prototypeAccessors.alpha.set = function (value)
	    {
	        this.uniforms.uAlpha = value;
	    };
	    Object.defineProperties( ColorMatrixFilter.prototype, prototypeAccessors );
	    return ColorMatrixFilter;
	}(core.Filter));
	ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;
	exports.ColorMatrixFilter = ColorMatrixFilter;
	});
	unwrapExports(filterColorMatrix);
	var filterColorMatrix_1 = filterColorMatrix.ColorMatrixFilter;

	var filterDisplacement = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var vertex = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n";
	var fragment = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale * inputSize.zw;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n";
	var DisplacementFilter = (function (Filter$$1) {
	    function DisplacementFilter(sprite, scale)
	    {
	        var maskMatrix = new math.Matrix();
	        sprite.renderable = false;
	        Filter$$1.call(this, vertex, fragment, {
	            mapSampler: sprite._texture,
	            filterMatrix: maskMatrix,
	            scale: { x: 1, y: 1 },
	        });
	        this.maskSprite = sprite;
	        this.maskMatrix = maskMatrix;
	        if (scale === null || scale === undefined)
	        {
	            scale = 20;
	        }
	        this.scale = new math.Point(scale, scale);
	    }
	    if ( Filter$$1 ) DisplacementFilter.__proto__ = Filter$$1;
	    DisplacementFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    DisplacementFilter.prototype.constructor = DisplacementFilter;
	    var prototypeAccessors = { map: { configurable: true } };
	    DisplacementFilter.prototype.apply = function apply (filterManager, input, output)
	    {
	        this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
	        this.uniforms.scale.x = this.scale.x;
	        this.uniforms.scale.y = this.scale.y;
	        filterManager.applyFilter(this, input, output);
	    };
	    prototypeAccessors.map.get = function ()
	    {
	        return this.uniforms.mapSampler;
	    };
	    prototypeAccessors.map.set = function (value)
	    {
	        this.uniforms.mapSampler = value;
	    };
	    Object.defineProperties( DisplacementFilter.prototype, prototypeAccessors );
	    return DisplacementFilter;
	}(core.Filter));
	exports.DisplacementFilter = DisplacementFilter;
	});
	unwrapExports(filterDisplacement);
	var filterDisplacement_1 = filterDisplacement.DisplacementFilter;

	var filterFxaa = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var vertex = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n";
	var fragment = "varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it's\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n";
	var FXAAFilter = (function (Filter$$1) {
	    function FXAAFilter()
	    {
	        Filter$$1.call(this, vertex, fragment);
	    }
	    if ( Filter$$1 ) FXAAFilter.__proto__ = Filter$$1;
	    FXAAFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    FXAAFilter.prototype.constructor = FXAAFilter;
	    return FXAAFilter;
	}(core.Filter));
	exports.FXAAFilter = FXAAFilter;
	});
	unwrapExports(filterFxaa);
	var filterFxaa_1 = filterFxaa.FXAAFilter;

	var filterNoise = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var fragment = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n";
	var NoiseFilter = (function (Filter$$1) {
	    function NoiseFilter(noise, seed)
	    {
	        if ( noise === void 0 ) noise = 0.5;
	        if ( seed === void 0 ) seed = Math.random();
	        Filter$$1.call(this, fragments.defaultFilterVertex, fragment, {
	            uNoise: 0,
	            uSeed: 0,
	        });
	        this.noise = noise;
	        this.seed = seed;
	    }
	    if ( Filter$$1 ) NoiseFilter.__proto__ = Filter$$1;
	    NoiseFilter.prototype = Object.create( Filter$$1 && Filter$$1.prototype );
	    NoiseFilter.prototype.constructor = NoiseFilter;
	    var prototypeAccessors = { noise: { configurable: true },seed: { configurable: true } };
	    prototypeAccessors.noise.get = function ()
	    {
	        return this.uniforms.uNoise;
	    };
	    prototypeAccessors.noise.set = function (value)
	    {
	        this.uniforms.uNoise = value;
	    };
	    prototypeAccessors.seed.get = function ()
	    {
	        return this.uniforms.uSeed;
	    };
	    prototypeAccessors.seed.set = function (value)
	    {
	        this.uniforms.uSeed = value;
	    };
	    Object.defineProperties( NoiseFilter.prototype, prototypeAccessors );
	    return NoiseFilter;
	}(core.Filter));
	exports.NoiseFilter = NoiseFilter;
	});
	unwrapExports(filterNoise);
	var filterNoise_1 = filterNoise.NoiseFilter;

	var _tempMatrix = new math.Matrix();
	display.DisplayObject.prototype._cacheAsBitmap = false;
	display.DisplayObject.prototype._cacheData = false;
	var CacheData = function CacheData()
	{
	    this.textureCacheId = null;
	    this.originalRender = null;
	    this.originalRenderCanvas = null;
	    this.originalCalculateBounds = null;
	    this.originalGetLocalBounds = null;
	    this.originalUpdateTransform = null;
	    this.originalHitTest = null;
	    this.originalDestroy = null;
	    this.originalMask = null;
	    this.originalFilterArea = null;
	    this.sprite = null;
	};
	Object.defineProperties(display.DisplayObject.prototype, {
	    cacheAsBitmap: {
	        get: function get()
	        {
	            return this._cacheAsBitmap;
	        },
	        set: function set(value)
	        {
	            if (this._cacheAsBitmap === value)
	            {
	                return;
	            }
	            this._cacheAsBitmap = value;
	            var data;
	            if (value)
	            {
	                if (!this._cacheData)
	                {
	                    this._cacheData = new CacheData();
	                }
	                data = this._cacheData;
	                data.originalRender = this.render;
	                data.originalRenderCanvas = this.renderCanvas;
	                data.originalUpdateTransform = this.updateTransform;
	                data.originalCalculateBounds = this._calculateBounds;
	                data.originalGetLocalBounds = this.getLocalBounds;
	                data.originalDestroy = this.destroy;
	                data.originalContainsPoint = this.containsPoint;
	                data.originalMask = this._mask;
	                data.originalFilterArea = this.filterArea;
	                this.render = this._renderCached;
	                this.renderCanvas = this._renderCachedCanvas;
	                this.destroy = this._cacheAsBitmapDestroy;
	            }
	            else
	            {
	                data = this._cacheData;
	                if (data.sprite)
	                {
	                    this._destroyCachedDisplayObject();
	                }
	                this.render = data.originalRender;
	                this.renderCanvas = data.originalRenderCanvas;
	                this._calculateBounds = data.originalCalculateBounds;
	                this.getLocalBounds = data.originalGetLocalBounds;
	                this.destroy = data.originalDestroy;
	                this.updateTransform = data.originalUpdateTransform;
	                this.containsPoint = data.originalContainsPoint;
	                this._mask = data.originalMask;
	                this.filterArea = data.originalFilterArea;
	            }
	        },
	    },
	});
	display.DisplayObject.prototype._renderCached = function _renderCached(renderer)
	{
	    if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
	    {
	        return;
	    }
	    this._initCachedDisplayObject(renderer);
	    this._cacheData.sprite._transformID = -1;
	    this._cacheData.sprite.worldAlpha = this.worldAlpha;
	    this._cacheData.sprite._render(renderer);
	};
	display.DisplayObject.prototype._initCachedDisplayObject = function _initCachedDisplayObject(renderer)
	{
	    if (this._cacheData && this._cacheData.sprite)
	    {
	        return;
	    }
	    var cacheAlpha = this.alpha;
	    this.alpha = 1;
	    renderer.batch.flush();
	    var bounds = this.getLocalBounds().clone();
	    if (this.filters)
	    {
	        var padding = this.filters[0].padding;
	        bounds.pad(padding);
	    }
	    var cachedRenderTarget = renderer._activeRenderTarget;
	    var renderTexture = core.RenderTexture.create(bounds.width | 0, bounds.height | 0);
	    var textureCacheId = "cacheAsBitmap_" + (utils.uid());
	    this._cacheData.textureCacheId = textureCacheId;
	    core.BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId);
	    core.Texture.addToCache(renderTexture, textureCacheId);
	    var m = _tempMatrix;
	    m.tx = -bounds.x;
	    m.ty = -bounds.y;
	    this.transform.worldTransform.identity();
	    this.render = this._cacheData.originalRender;
	    renderer.render(this, renderTexture, true, m, true);
	    renderer.renderTexture.bind(cachedRenderTarget);
	    this.render = this._renderCached;
	    this.updateTransform = this.displayObjectUpdateTransform;
	    this._mask = null;
	    this.filterArea = null;
	    var cachedSprite = new sprite.Sprite(renderTexture);
	    cachedSprite.transform.worldTransform = this.transform.worldTransform;
	    cachedSprite.anchor.x = -(bounds.x / bounds.width);
	    cachedSprite.anchor.y = -(bounds.y / bounds.height);
	    cachedSprite.alpha = cacheAlpha;
	    cachedSprite._bounds = this._bounds;
	    this._calculateBounds = this._calculateCachedBounds;
	    this.getLocalBounds = this._getCachedLocalBounds;
	    this._cacheData.sprite = cachedSprite;
	    this.transform._parentID = -1;
	    if (!this.parent)
	    {
	        this.parent = renderer._tempDisplayObjectParent;
	        this.updateTransform();
	        this.parent = null;
	    }
	    else
	    {
	        this.updateTransform();
	    }
	    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
	};
	display.DisplayObject.prototype._renderCachedCanvas = function _renderCachedCanvas(renderer)
	{
	    if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
	    {
	        return;
	    }
	    this._initCachedDisplayObjectCanvas(renderer);
	    this._cacheData.sprite.worldAlpha = this.worldAlpha;
	    this._cacheData.sprite.renderCanvas(renderer);
	};
	display.DisplayObject.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(renderer)
	{
	    if (this._cacheData && this._cacheData.sprite)
	    {
	        return;
	    }
	    var bounds = this.getLocalBounds();
	    var cacheAlpha = this.alpha;
	    this.alpha = 1;
	    var cachedRenderTarget = renderer.context;
	    var renderTexture = core.RenderTexture.create(bounds.width | 0, bounds.height | 0);
	    var textureCacheId = "cacheAsBitmap_" + (utils.uid());
	    this._cacheData.textureCacheId = textureCacheId;
	    core.BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId);
	    core.Texture.addToCache(renderTexture, textureCacheId);
	    var m = _tempMatrix;
	    this.transform.localTransform.copyTo(m);
	    m.invert();
	    m.tx -= bounds.x;
	    m.ty -= bounds.y;
	    this.renderCanvas = this._cacheData.originalRenderCanvas;
	    renderer.render(this, renderTexture, true, m, false);
	    renderer.context = cachedRenderTarget;
	    this.renderCanvas = this._renderCachedCanvas;
	    this._calculateBounds = this._calculateCachedBounds;
	    this._mask = null;
	    this.filterArea = null;
	    var cachedSprite = new sprite.Sprite(renderTexture);
	    cachedSprite.transform.worldTransform = this.transform.worldTransform;
	    cachedSprite.anchor.x = -(bounds.x / bounds.width);
	    cachedSprite.anchor.y = -(bounds.y / bounds.height);
	    cachedSprite._bounds = this._bounds;
	    cachedSprite.alpha = cacheAlpha;
	    if (!this.parent)
	    {
	        this.parent = renderer._tempDisplayObjectParent;
	        this.updateTransform();
	        this.parent = null;
	    }
	    else
	    {
	        this.updateTransform();
	    }
	    this.updateTransform = this.displayObjectUpdateTransform;
	    this._cacheData.sprite = cachedSprite;
	    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
	};
	display.DisplayObject.prototype._calculateCachedBounds = function _calculateCachedBounds()
	{
	    this._cacheData.sprite._calculateBounds();
	};
	display.DisplayObject.prototype._getCachedLocalBounds = function _getCachedLocalBounds()
	{
	    return this._cacheData.sprite.getLocalBounds();
	};
	display.DisplayObject.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject()
	{
	    this._cacheData.sprite._texture.destroy(true);
	    this._cacheData.sprite = null;
	    core.BaseTexture.removeFromCache(this._cacheData.textureCacheId);
	    core.Texture.removeFromCache(this._cacheData.textureCacheId);
	    this._cacheData.textureCacheId = null;
	};
	display.DisplayObject.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(options)
	{
	    this.cacheAsBitmap = false;
	    this.destroy(options);
	};

	display.DisplayObject.prototype.name = null;
	display.Container.prototype.getChildByName = function getChildByName(name)
	{
	    var this$1 = this;
	    for (var i = 0; i < this.children.length; i++)
	    {
	        if (this$1.children[i].name === name)
	        {
	            return this$1.children[i];
	        }
	    }
	    return null;
	};

	display.DisplayObject.prototype.getGlobalPosition = function getGlobalPosition(point, skipUpdate)
	{
	    if ( point === void 0 ) point = new math.Point();
	    if ( skipUpdate === void 0 ) skipUpdate = false;
	    if (this.parent)
	    {
	        this.parent.toGlobal(this.position, point, skipUpdate);
	    }
	    else
	    {
	        point.x = this.position.x;
	        point.y = this.position.y;
	    }
	    return point;
	};

	var warnings = {};
	function warn(msg)
	{
	    if (warnings[msg])
	    {
	        return;
	    }
	    var stack = new Error().stack;
	    if (typeof stack === 'undefined')
	    {
	        console.warn('Deprecation Warning: ', msg);
	    }
	    else
	    {
	        stack = stack.split('\n').splice(3).join('\n');
	        if (console.groupCollapsed)
	        {
	            console.groupCollapsed(
	                '%cDeprecation Warning: %c%s',
	                'color:#614108;background:#fffbe6',
	                'font-weight:normal;color:#614108;background:#fffbe6',
	                msg
	            );
	            console.warn(stack);
	            console.groupEnd();
	        }
	        else
	        {
	            console.warn('Deprecation Warning: ', msg);
	            console.warn(stack);
	        }
	    }
	    warnings[msg] = true;
	}
	function deprecated(PIXI)
	{
	    Object.defineProperties(PIXI, {
	        SVG_SIZE: {
	            get: function get()
	            {
	                warn('PIXI.utils.SVG_SIZE has moved to PIXI.SVGResource.SVG_SIZE');
	                return PIXI.SVGResource.SVG_SIZE;
	            },
	        },
	        TransformStatic: {
	            get: function get()
	            {
	                warn('PIXI.TransformStatic has been removed, use PIXI.Transform');
	                return PIXI.Transform;
	            },
	        },
	        TransformBase: {
	            get: function get()
	            {
	                warn('PIXI.TransformBase has been removed, use PIXI.Transform');
	                return PIXI.Transform;
	            },
	        },
	        TRANSFORM_MODE: {
	            get: function get()
	            {
	                warn('PIXI.TRANSFORM_MODE has been removed');
	                return { STATIC: 0, DYNAMIC: 1 };
	            },
	        },
	        WebGLRenderer: {
	            get: function get()
	            {
	                warn('PIXI.WebGLRenderer has moved to PIXI.Renderer');
	                return PIXI.Renderer;
	            },
	        },
	        CanvasRenderTarget: {
	            get: function get()
	            {
	                warn('PIXI.CanvasRenderTarget has moved to PIXI.utils.CanvasRenderTarget');
	                return PIXI.utils.CanvasRenderTarget;
	            },
	        },
	        loader: {
	            get: function get()
	            {
	                warn('PIXI.loader has moved to PIXI.Loader.shared');
	                return PIXI.Loader.shared;
	            },
	        },
	        FilterManager: {
	            get: function get()
	            {
	                warn('PIXI.FilterManager has moved to PIXI.systems.FilterSystem');
	                return PIXI.systems.FilterManager;
	            },
	        },
	    });
	    PIXI.extras = {};
	    Object.defineProperties(PIXI.extras, {
	        TilingSprite: {
	            get: function get()
	            {
	                warn('PIXI.extras.TilingSprite has moved to PIXI.TilingSprite');
	                return PIXI.TilingSprite;
	            },
	        },
	        TilingSpriteRenderer: {
	            get: function get()
	            {
	                warn('PIXI.extras.TilingSpriteRenderer has moved to PIXI.TilingSpriteRenderer');
	                return PIXI.TilingSpriteRenderer;
	            },
	        },
	        AnimatedSprite: {
	            get: function get()
	            {
	                warn('PIXI.extras.AnimatedSprite has moved to PIXI.AnimatedSprite');
	                return PIXI.AnimatedSprite;
	            },
	        },
	        BitmapText: {
	            get: function get()
	            {
	                warn('PIXI.extras.BitmapText has moved to PIXI.BitmapText');
	                return PIXI.BitmapText;
	            },
	        },
	    });
	    Object.defineProperties(PIXI.utils, {
	        getSvgSize: {
	            get: function get()
	            {
	                warn('PIXI.utils.getSvgSize has moved to PIXI.SVGResource.getSize');
	                return PIXI.SVGResource.getSize;
	            },
	        },
	    });
	    PIXI.mesh = {};
	    Object.defineProperties(PIXI.mesh, {
	        Mesh: {
	            get: function get()
	            {
	                warn('PIXI.mesh.Mesh has moved to PIXI.Mesh2d');
	                return PIXI.Mesh2d;
	            },
	        },
	        NineSlicePlane: {
	            get: function get()
	            {
	                warn('PIXI.mesh.NineSlicePlane has moved to PIXI.NineSlicePlane');
	                return PIXI.NineSlicePlane;
	            },
	        },
	        Plane: {
	            get: function get()
	            {
	                warn('PIXI.mesh.Plane has moved to PIXI.Plane');
	                return PIXI.Plane;
	            },
	        },
	        Rope: {
	            get: function get()
	            {
	                warn('PIXI.mesh.Rope has moved to PIXI.Rope');
	                return PIXI.Rope;
	            },
	        },
	        RawMesh: {
	            get: function get()
	            {
	                warn('PIXI.mesh.RawMesh has moved to PIXI.Mesh');
	                return PIXI.Mesh;
	            },
	        },
	        CanvasMeshRenderer: {
	            get: function get()
	            {
	                warn('PIXI.mesh.CanvasMeshRenderer has moved to PIXI.CanvasMeshRenderer');
	                return PIXI.CanvasMeshRenderer;
	            },
	        },
	        MeshRenderer: {
	            get: function get()
	            {
	                warn('PIXI.mesh.MeshRenderer has moved to PIXI.MeshRenderer');
	                return PIXI.MeshRenderer;
	            },
	        },
	    });
	    PIXI.particles = {};
	    Object.defineProperties(PIXI.particles, {
	        ParticleContainer: {
	            get: function get()
	            {
	                warn('PIXI.particles.ParticleContainer has moved to PIXI.ParticleContainer');
	                return PIXI.ParticleContainer;
	            },
	        },
	        ParticleRenderer: {
	            get: function get()
	            {
	                warn('PIXI.particles.ParticleRenderer has moved to PIXI.ParticleRenderer');
	                return PIXI.ParticleRenderer;
	            },
	        },
	    });
	    PIXI.ticker = {};
	    Object.defineProperties(PIXI.ticker, {
	        Ticker: {
	            get: function get()
	            {
	                warn('PIXI.ticker.Ticker has moved to PIXI.Ticker');
	                return PIXI.Ticker;
	            },
	        },
	        shared: {
	            get: function get()
	            {
	                warn('PIXI.ticker.shared has moved to PIXI.Ticker.shared');
	                return PIXI.Ticker.shared;
	            },
	        },
	    });
	    PIXI.loaders = {};
	    Object.defineProperties(PIXI.loaders, {
	        Loader: {
	            get: function get()
	            {
	                warn('PIXI.loaders.Loader has moved to PIXI.Loader');
	                return PIXI.Loader;
	            },
	        },
	        Resource: {
	            get: function get()
	            {
	                warn('PIXI.loaders.Resource has moved to PIXI.LoaderResource');
	                return PIXI.LoaderResource;
	            },
	        },
	        bitmapFontParser: {
	            get: function get()
	            {
	                warn('PIXI.loaders.bitmapFontParser has moved to PIXI.BitmapFontLoader.use');
	                return PIXI.BitmapFontLoader.use;
	            },
	        },
	        parseBitmapFontData: {
	            get: function get()
	            {
	                warn('PIXI.loaders.parseBitmapFontData has moved to PIXI.BitmapFontLoader.parse');
	                return PIXI.BitmapFontLoader.parse;
	            },
	        },
	        spritesheetParser: {
	            get: function get()
	            {
	                warn('PIXI.loaders.spritesheetParser has moved to PIXI.SpritesheetLoader.use');
	                return PIXI.SpritesheetLoader.use;
	            },
	        },
	        getResourcePath: {
	            get: function get()
	            {
	                warn('PIXI.loaders.getResourcePath has moved to PIXI.SpritesheetLoader.getResourcePath');
	                return PIXI.SpritesheetLoader.getResourcePath;
	            },
	        },
	    });
	    PIXI.Loader.addPixiMiddleware = function addPixiMiddleware(middleware)
	    {
	        warn('PIXI.loaders.Loader.addPixiMiddleware is deprecated, use PIXI.loaders.Loader.registerPlugin');
	        return PIXI.loaders.Loader.registerPlugin({ use: middleware() });
	    };
	    Object.defineProperty(PIXI.extract, 'WebGLExtract', {
	        get: function get()
	        {
	            warn('PIXI.extract.WebGLExtract has moved to PIXI.extract.Extract');
	            return PIXI.extract.Extract;
	        },
	    });
	    Object.defineProperty(PIXI.prepare, 'WebGLPrepare', {
	        get: function get()
	        {
	            warn('PIXI.prepare.WebGLPrepare has moved to PIXI.prepare.Prepare');
	            return PIXI.prepare.Prepare;
	        },
	    });
	    PIXI.Container.prototype._renderWebGL = function _renderWebGL(renderer)
	    {
	        warn('PIXI.Container#_renderWebGL has moved to PIXI.Container#_render');
	        this._render(renderer);
	    };
	    PIXI.Container.prototype.renderWebGL = function renderWebGL(renderer)
	    {
	        warn('PIXI.Container#renderWebGL has moved to PIXI.Container#render');
	        this.render(renderer);
	    };
	    PIXI.DisplayObject.prototype.renderWebGL = function renderWebGL(renderer)
	    {
	        warn('PIXI.DisplayObject#renderWebGL has moved to PIXI.DisplayObject#render');
	        this.render(renderer);
	    };
	    PIXI.Container.prototype.renderAdvancedWebGL = function renderAdvancedWebGL(renderer)
	    {
	        warn('PIXI.Container#renderAdvancedWebGL has moved to PIXI.Container#renderAdvanced');
	        this.renderAdvanced(renderer);
	    };
	    Object.defineProperties(PIXI.settings, {
	        TRANSFORM_MODE: {
	            get: function get()
	            {
	                warn('PIXI.settings.TRANSFORM_MODE has been removed.');
	                return 0;
	            },
	            set: function set()
	            {
	                warn('PIXI.settings.TRANSFORM_MODE has been removed.');
	            },
	        },
	    });
	    var BaseTexture = PIXI.BaseTexture;
	    BaseTexture.fromImage = function fromImage(canvas, crossorigin, scaleMode, scale)
	    {
	        warn('PIXI.BaseTexture.fromImage has been replaced with PIXI.BaseTexture.from');
	        var resourceOptions = { scale: scale, crossorigin: crossorigin };
	        return BaseTexture.from(canvas, { scaleMode: scaleMode, resourceOptions: resourceOptions });
	    };
	    BaseTexture.fromCanvas = function fromCanvas(canvas, scaleMode)
	    {
	        warn('PIXI.BaseTexture.fromCanvas has been replaced with PIXI.BaseTexture.from');
	        return BaseTexture.from(canvas, { scaleMode: scaleMode });
	    };
	    BaseTexture.fromSVG = function fromSVG(canvas, crossorigin, scaleMode, scale)
	    {
	        warn('PIXI.BaseTexture.fromSVG has been replaced with PIXI.BaseTexture.from');
	        var resourceOptions = { scale: scale, crossorigin: crossorigin };
	        return BaseTexture.from(canvas, { scaleMode: scaleMode, resourceOptions: resourceOptions });
	    };
	    PIXI.Point.prototype.copy = function copy(p)
	    {
	        warn('PIXI.Point.copy has been replaced with PIXI.Point#copyFrom');
	        return this.copyFrom(p);
	    };
	    PIXI.ObservablePoint.prototype.copy = function copy(p)
	    {
	        warn('PIXI.ObservablePoint.copy has been replaced with PIXI.ObservablePoint#copyFrom');
	        return this.copyFrom(p);
	    };
	    PIXI.Rectangle.prototype.copy = function copy(p)
	    {
	        warn('PIXI.Rectangle.copy has been replaced with PIXI.Rectangle#copyFrom');
	        return this.copyFrom(p);
	    };
	    PIXI.Matrix.prototype.copy = function copy(p)
	    {
	        warn('PIXI.Matrix.copy has been replaced with PIXI.Matrix#copyTo');
	        return this.copyTo(p);
	    };
	    Object.assign(PIXI.systems.FilterSystem.prototype, {
	        getRenderTarget: function getRenderTarget(clear, resolution)
	        {
	            warn('FilterManager#getRenderTarget has been replaced with FilterSystem#getFilterTexture');
	            return this.getFilterTexture(resolution);
	        },
	        returnRenderTarget: function returnRenderTarget(renderTexture)
	        {
	            warn('FilterManager#returnRenderTarget has been replaced with FilterSystem#returnFilterTexture');
	            this.returnFilterTexture(renderTexture);
	        },
	    });
	    Object.defineProperties(PIXI.RenderTexture.prototype, {
	        sourceFrame: {
	            get: function get()
	            {
	                warn('PIXI.RenderTexture#sourceFrame has been removed');
	                return this.filterFrame;
	            },
	        },
	        size: {
	            get: function get()
	            {
	                warn('PIXI.RenderTexture#size has been removed');
	                return this._frame;
	            },
	        },
	    });
	    var BlurXFilter = (function (superclass) {
	        function BlurXFilter(strength, quality, resolution, kernelSize)
	        {
	            warn('PIXI.filters.BlurXFilter is deprecated, use PIXI.filters.BlurFilterPass');
	            superclass.call(this, true, strength, quality, resolution, kernelSize);
	        }
	        if ( superclass ) BlurXFilter.__proto__ = superclass;
	        BlurXFilter.prototype = Object.create( superclass && superclass.prototype );
	        BlurXFilter.prototype.constructor = BlurXFilter;
	        return BlurXFilter;
	    }(PIXI.filters.BlurFilterPass));
	    var BlurYFilter = (function (superclass) {
	        function BlurYFilter(strength, quality, resolution, kernelSize)
	        {
	            warn('PIXI.filters.BlurYFilter is deprecated, use PIXI.filters.BlurFilterPass');
	            superclass.call(this, false, strength, quality, resolution, kernelSize);
	        }
	        if ( superclass ) BlurYFilter.__proto__ = superclass;
	        BlurYFilter.prototype = Object.create( superclass && superclass.prototype );
	        BlurYFilter.prototype.constructor = BlurYFilter;
	        return BlurYFilter;
	    }(PIXI.filters.BlurFilterPass));
	    Object.assign(PIXI.filters, {
	        BlurXFilter: BlurXFilter,
	        BlurYFilter: BlurYFilter,
	    });
	    var Sprite = PIXI.Sprite;
	    var Texture = PIXI.Texture;
	    function spriteFrom(name, source, crossorigin, scaleMode)
	    {
	        warn(("PIXI.Sprite." + name + " is deprecated, use PIXI.Sprite.from"));
	        return Sprite.from(source, {
	            resourceOptions: {
	                scale: scaleMode,
	                crossorigin: crossorigin,
	            },
	        });
	    }
	    Sprite.fromImage = spriteFrom.bind(null, 'fromImage');
	    Sprite.fromSVG = spriteFrom.bind(null, 'fromSVG');
	    Sprite.fromCanvas = spriteFrom.bind(null, 'fromCanvas');
	    Sprite.fromVideo = spriteFrom.bind(null, 'fromVideo');
	    Sprite.fromFrame = spriteFrom.bind(null, 'fromFrame');
	    function textureFrom(name, source, crossorigin, scaleMode)
	    {
	        warn(("PIXI.Texture." + name + " is deprecated, use PIXI.Texture.from"));
	        return Texture.from(source, {
	            resourceOptions: {
	                scale: scaleMode,
	                crossorigin: crossorigin,
	            },
	        });
	    }
	    Texture.fromImage = textureFrom.bind(null, 'fromImage');
	    Texture.fromSVG = textureFrom.bind(null, 'fromSVG');
	    Texture.fromCanvas = textureFrom.bind(null, 'fromCanvas');
	    Texture.fromVideo = textureFrom.bind(null, 'fromVideo');
	    Texture.fromFrame = textureFrom.bind(null, 'fromFrame');
	    Object.defineProperty(PIXI.AbstractRenderer.prototype, 'autoResize', {
	        get: function get()
	        {
	            warn('PIXI.AbstractRenderer autoResize is deprecated, use autoDensity');
	            return this.autoDensity;
	        },
	        set: function set(value)
	        {
	            warn('PIXI.AbstractRenderer autoResize is deprecated, use autoDensity');
	            this.autoDensity = value;
	        },
	    });
	}
	core_4.registerPlugin('accessibility', accessibility_2);
	core_4.registerPlugin('extract', extract_1);
	core_4.registerPlugin('graphics', graphics_3);
	core_4.registerPlugin('interaction', interaction_2);
	core_4.registerPlugin('mesh', mesh_2);
	core_4.registerPlugin('particle', particles_2);
	core_4.registerPlugin('prepare', prepare_1);
	core_4.registerPlugin('sprite', sprite_2);
	core_4.registerPlugin('tilingSprite', spriteTiling_2);
	loaders_2.registerPlugin(textBitmap_2);
	loaders_2.registerPlugin(spritesheet_2);
	app_1.registerPlugin(ticker_2);
	app_1.registerPlugin(loaders_4);
	utils_4.performMixins();
	var VERSION = '5.0.0-alpha.3';
	var PIXI = { VERSION: VERSION };
	var filters = {
	    AlphaFilter: filterAlpha_1,
	    BlurFilter: filterBlur_1,
	    BlurFilterPass: filterBlur_2,
	    ColorMatrixFilter: filterColorMatrix_1,
	    DisplacementFilter: filterDisplacement_1,
	    FXAAFilter: filterFxaa_1,
	    NoiseFilter: filterNoise_1,
	};
	if (typeof window !== 'undefined')
	{
	    var namespaces = {
	        accessibility: accessibility$2,
	        extract: extract$2,
	        filters: filters,
	        interaction: interaction$2,
	        prepare: prepare$2,
	        settings: settings_2,
	        utils: utils$2,
	    };
	    window.PIXI = Object.assign(
	        PIXI,
	        namespaces,
	        app$2,
	        constants$2,
	        core$2,
	        display$2,
	        graphics$2,
	        loaders$2,
	        math$2,
	        mesh$2,
	        meshExtras$2,
	        particles$2,
	        sprite$2,
	        spriteAnimated$2,
	        spritesheet$2,
	        spriteTiling$2,
	        text$2,
	        textBitmap$2,
	        ticker$2
	    );
	    deprecated(PIXI);
	}

	var PIXI$1 = ({
		PIXI: PIXI,
		VERSION: VERSION,
		accessibility: accessibility$2,
		extract: extract$2,
		filters: filters,
		interaction: interaction$2,
		prepare: prepare$2,
		settings: settings_2,
		utils: utils$2,
		__moduleExports: app,
		Application: app_1,
		ENV: constants_1,
		RENDERER_TYPE: constants_2,
		BLEND_MODES: constants_3,
		DRAW_MODES: constants_4,
		FORMATS: constants_5,
		TARGETS: constants_6,
		TYPES: constants_7,
		SCALE_MODES: constants_8,
		WRAP_MODES: constants_9,
		GC_MODES: constants_10,
		PRECISION: constants_11,
		systems: core_1,
		resources: core_2,
		System: core_3,
		Renderer: core_4,
		AbstractRenderer: core_5,
		FrameBuffer: core_6,
		CubeTexture: core_7,
		BaseTexture: core_8,
		Texture: core_9,
		TextureMatrix: core_10,
		RenderTexture: core_11,
		BaseRenderTexture: core_12,
		TextureUvs: core_13,
		State: core_14,
		ObjectRenderer: core_15,
		Quad: core_16,
		QuadUv: core_17,
		checkMaxIfStatementsInShader: core_18,
		Shader: core_19,
		Program: core_20,
		UniformGroup: core_21,
		SpriteMaskFilter: core_22,
		Filter: core_23,
		Attribute: core_24,
		Buffer: core_25,
		Geometry: core_26,
		Bounds: display_1,
		DisplayObject: display_2,
		Container: display_3,
		Graphics: graphics_1,
		GraphicsData: graphics_2,
		GraphicsRenderer: graphics_3,
		LoaderResource: loaders_1,
		Loader: loaders_2,
		TextureLoader: loaders_3,
		LoaderPlugin: loaders_4,
		Point: math_1,
		ObservablePoint: math_2,
		Matrix: math_3,
		GroupD8: math_4,
		Transform: math_5,
		Circle: math_6,
		Ellipse: math_7,
		Polygon: math_8,
		Rectangle: math_9,
		RoundedRectangle: math_10,
		PI_2: math_11,
		RAD_TO_DEG: math_12,
		DEG_TO_RAD: math_13,
		SHAPES: math_14,
		Mesh: mesh_1,
		MeshRenderer: mesh_2,
		Mesh2d: meshExtras_1,
		Plane: meshExtras_2,
		NineSlicePlane: meshExtras_3,
		Rope: meshExtras_4,
		ParticleContainer: particles_1,
		ParticleRenderer: particles_2,
		Sprite: sprite_1,
		SpriteRenderer: sprite_2,
		Spritesheet: spritesheet_1,
		SpritesheetLoader: spritesheet_2,
		AnimatedSprite: spriteAnimated_1,
		TilingSprite: spriteTiling_1,
		TilingSpriteRenderer: spriteTiling_2,
		Text: text_1,
		TextStyle: text_2,
		TextMetrics: text_3,
		TEXT_GRADIENT: text_4,
		BitmapText: textBitmap_1,
		BitmapFontLoader: textBitmap_2,
		Ticker: ticker_1,
		TickerPlugin: ticker_2,
		UPDATE_PRIORITY: ticker_3
	});

	utils_6();
	var app$3 = new app_1({
	    autoResize: true
	});
	document.body.appendChild(app$3.view);
	var CreaNyan = {
	    PIXI: PIXI$1,
	    app: app$3,
	    run: function () {
	        var bunnyImgURL = 'https://pixijs.io/examples/required/assets/basics/bunny.png';
	        var bunny = sprite_1.from(bunnyImgURL);
	        bunny.anchor.set(0.5);
	        bunny.x = 640;
	        bunny.y = 360;
	        app$3.stage.addChild(bunny);
	        app$3.ticker.add(function (delta) {
	            bunny.rotation += 0.1 * delta;
	        });
	    }
	};

	return CreaNyan;

}));
//# sourceMappingURL=creanyan.js.map
