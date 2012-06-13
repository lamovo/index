<h1>Index.js</h1>

<p>Index.js makes it easy to keep track of the current index, the previous and the next one. It features convenient properties like <code>loop</code> and <code>direction</code>. This makes it the perfect base for a slider, audio playlist, or any collection where you want to keep track of the active element.</p>

<h2>Integration</h2>

<h3>Global</h3>

<pre><code>&lt;script src=&quot;index.js&quot;&gt;&lt;/script&gt;</code></pre>

<h3>RequireJS (AMD)</h3>

<pre><code>require(['index'], function(Index) {

});</code></pre>

<h2>API</h2>

<h3>Initialization</h3>

<table>
	<thead>
		<tr>
			<td>Constructor</td>
			<td>Description</td>
		</tr>
	</thead>
	
	<tr>
		<td><code>Index(last?:number, first?:number)</code></td>
		<td>Creates a new Index instance.</td>
	</tr>
</table>

<h3>Methods</h3>

<table>
	<thead>
		<tr>
			<td>Method</td>
			<td>Return type</td>
			<td>Description</td>
		</tr>
	</thead>
	
	<tr>
		<td><code>set(base:number)</code></td>
		<td><code>Index</code></a></td>
		<td>Set a new base index.</td>
	</tr>
</table>

<h3>Properties</h3>

<table>
	<thead>
		<tr>
			<td>Property</td>
			<td>Type</td>
			<td>Description</td>
		</tr>
	</thead>
	
	<tr>
		<td><code>added</code></td>
		<td><code>array</code></td>
		<td>The indices that are added to <code>active</code> since the previous <code>set</code> method call. Depends on <a href="http://underscorejs.org">Underscore</a>.</td>
	</tr>
				
	<tr>
		<td><code>active</code></td>
		<td><code>array</code></td>
		<td>An array of active indices.</td>
	</tr>
	
	<tr>
		<td><code>back</code></td>
		<td><code>array</code></td>
		<td>The history of previous, current and next indices.</td>
	</tr>
						
	<tr>
		<td><code>curr</code></td>
		<td><code>number</code></td>
		<td>The current index.</td>
	</tr>
	
	<tr>
		<td><code>direction</code></td>
		<td><code>number</code></td>
		<td>The direction the index is following. Either <code>undefined</code>, <code>-1</code> or <code>1</code>.</td>
	</tr>
						
	<tr>
		<td><code>first</code></td>
		<td><code>number</code></td>
		<td>The first index.</td>
	</tr>
						
	<tr>
		<td><code>last</code></td>
		<td><code>number</code></td>
		<td>The last index.</td>
	</tr>
						
	<tr>
		<td><code>loop</code></td>
		<td><code>boolean</code></td>
		<td>If set to <code>true</code>, the index will reset to <code>first</code> once the index is greater than <code>last</code>.</td>
	</tr>
	
	<tr>
		<td><code>next</code></td>
		<td><code>number</code></td>
		<td>The next index.</td>
	</tr>
	
	<tr>
		<td><code>prev</code></td>
		<td><code>number</code></td>
		<td>The previous index.</td>
	</tr>
	
	<tr>
		<td><code>removed</code></td>
		<td><code>array</code></td>
		<td>The indices that are removed from <code>active</code> since the previous call to <code>set</code>. Depends on <a href="http://underscorejs.org">Underscore</a>.</td>
	</tr>
	
	<tr>
		<td><code>version</code></td>
		<td><code>string</code></td>
		<td>Version number.</td>
	</tr>
</table>

<h2>Test</h2>

<p>A Jasmine test is included. Open <code>test/SpecRunner.html</code> to run it.</p>