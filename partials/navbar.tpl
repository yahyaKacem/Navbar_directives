<ul class="nav">
  <li
    ng-class="nav_item.active"
    class="{{nav_item.class}}"
    ng-repeat="nav_item in nav_items"
  >
    <a href="#/{{nav_item.href}}">
      {{nav_item.label}}
    </a>
  </li>
</ul>
