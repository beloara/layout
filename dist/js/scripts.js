"use strict";

(function () {
  var showHideLastRow = function showHideLastRow() {
    var containerGrid = document.querySelector('.cards__list');
    var items = document.querySelectorAll('.cards-item');
    var conatainerStyles = window.getComputedStyle(containerGrid);
    var columns = conatainerStyles.gridTemplateColumns.split(' ').length;
    var cardsItemsCount = items.length;
    var rows = Math.floor(cardsItemsCount / columns);
    containerGrid.style.gridAutoRows = 0;
    containerGrid.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
  };
  window.addEventListener('resize', function () {
    showHideLastRow();
  });
  window.addEventListener('DOMContentLoaded', function () {
    showHideLastRow();
  });
  var burger = document.querySelector('.burger');
  var closeOpenMenu = function closeOpenMenu() {
    var menu = document.querySelector('.nav');
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
  };
  burger.addEventListener('click', function (e) {
    e.preventDefault();
    closeOpenMenu();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsIm5hbWVzIjpbInNob3dIaWRlTGFzdFJvdyIsImNvbnRhaW5lckdyaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25hdGFpbmVyU3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbHVtbnMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwic3BsaXQiLCJsZW5ndGgiLCJjYXJkc0l0ZW1zQ291bnQiLCJyb3dzIiwiTWF0aCIsImZsb29yIiwic3R5bGUiLCJncmlkQXV0b1Jvd3MiLCJncmlkVGVtcGxhdGVSb3dzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1cmdlciIsImNsb3NlT3Blbk1lbnUiLCJtZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZXMiOlsic2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNob3dIaWRlTGFzdFJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2xpc3QnKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzLWl0ZW0nKTtcclxuICAgIGNvbnN0IGNvbmF0YWluZXJTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXJHcmlkKTtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gY29uYXRhaW5lclN0eWxlcy5ncmlkVGVtcGxhdGVDb2x1bW5zLnNwbGl0KCcgJykubGVuZ3RoO1xyXG4gICAgY29uc3QgY2FyZHNJdGVtc0NvdW50ID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmZsb29yKGNhcmRzSXRlbXNDb3VudCAvIGNvbHVtbnMpO1xyXG5cclxuICAgIGNvbnRhaW5lckdyaWQuc3R5bGUuZ3JpZEF1dG9Sb3dzID0gMDtcclxuICAgIGNvbnRhaW5lckdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICdyZXBlYXQoJyArIHJvd3MgKyAnLCAxZnIpJztcclxuICB9O1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgc2hvd0hpZGVMYXN0Um93KCk7XHJcbiAgfSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBzaG93SGlkZUxhc3RSb3coKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xyXG5cclxuICBjb25zdCBjbG9zZU9wZW5NZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlT3Blbk1lbnUoKTtcclxuICB9KTtcclxuXHJcbn0pKClcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtFQUNYLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFlO0lBQ2xDLElBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQzVELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDdEQsSUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUNQLGFBQWEsQ0FBQztJQUUvRCxJQUFNUSxPQUFPLEdBQUdILGdCQUFnQixDQUFDSSxtQkFBbUIsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNO0lBQ3RFLElBQU1DLGVBQWUsR0FBR1QsS0FBSyxDQUFDUSxNQUFNO0lBRXBDLElBQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILGVBQWUsR0FBR0osT0FBTyxDQUFDO0lBRWxEUixhQUFhLENBQUNnQixLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BDakIsYUFBYSxDQUFDZ0IsS0FBSyxDQUFDRSxnQkFBZ0IsR0FBRyxTQUFTLEdBQUdMLElBQUksR0FBRyxRQUFRO0VBQ3BFLENBQUM7RUFFRFAsTUFBTSxDQUFDYSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUN0Q3BCLGVBQWUsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQztFQUNGTyxNQUFNLENBQUNhLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFDaERwQixlQUFlLENBQUMsQ0FBQztFQUNuQixDQUFDLENBQUM7RUFFRixJQUFNcUIsTUFBTSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQU1tQixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBZTtJQUNoQyxJQUFNQyxJQUFJLEdBQUdyQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0NrQixNQUFNLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pDRixJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztFQUN0QyxDQUFDO0VBRURKLE1BQU0sQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNNLENBQUMsRUFBSztJQUN0Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkwsYUFBYSxDQUFDLENBQUM7RUFDakIsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQUFFLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=
